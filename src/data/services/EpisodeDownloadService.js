import * as FileSystem from 'expo-file-system';

import { LoggingService } from './LoggingService'

const DOWNLOAD_COLLECTION = '@podcast-app::current-download'
const DOWNLOAD_FILES_DIRECTORY = '@podcast-app_episodes/'

/**
 * @typedef {import('../../domain/models/podcast/PodcastChannel').PodcastChannel} PodcastChannel
 * @typedef {import('../../domain/models/podcast/PodcastEpisode').PodcastEpisode} PodcastEpisode
 * */
export class EpisodeDownloadService {
  downloadResumable = null

  get #episodesDirectory() {
    return FileSystem.documentDirectory + DOWNLOAD_FILES_DIRECTORY
  }

  async tryCreateContentDirectory() {
    try {
      await FileSystem.makeDirectoryAsync(this.#episodesDirectory);
    } catch (error) {
      LoggingService.error('Directory exists', error);
    }
  }

  async getDownloadedEpisodesList() {
    const directoryContent = await FileSystem.readDirectoryAsync(this.#episodesDirectory)

    return directoryContent
  }

  /**
   * @param {PodcastEpisode} episode
   */
  async getDownloadedEpisodeFilePath(episode) {
    const fileNameWithExtension = this.#generateFileNameWithExtension(episode)

    const directoryContent = await this.getDownloadedEpisodesList()

    const fileExists = directoryContent.find(file => file === fileNameWithExtension)

    if (!fileExists) return null

    return this.#episodesDirectory + fileNameWithExtension
  }

  /**
   * @param {PodcastEpisode} episode
   * @param {FileSystem.DeletingOptions} options
   */
  async deleteDownloadedEpisode(episode, options = {}) {
    const fileNameWithExtension = this.#generateFileNameWithExtension(episode)

    try {
      await FileSystem.deleteAsync(this.#episodesDirectory + fileNameWithExtension, options)

    } catch (error) {
      LoggingService.error('Could not delete file ', error);
    }
  }

  /**
   * @param {PodcastEpisode} episode
   * @param {FileSystem.DownloadOptions} options
   */
  async startDownload(episode, options = {}) {
    const fileNameWithExtension = this.#generateFileNameWithExtension(episode)

    await this.tryCreateContentDirectory();

    this.downloadResumable = FileSystem.createDownloadResumable(
      episode.audioFile.url,
      this.#episodesDirectory + fileNameWithExtension,
      options,
      downloadProgress => this.#onDownloadProgress(downloadProgress, episode)
    );

    try {
      await this.downloadResumable.downloadAsync();

      LoggingService.log('Finished downloading episode');
    } catch (error) {
      LoggingService.error(error);
    }
  }

  async pauseCurrentDownload() {
    if (!this.downloadResumable) this.#getSavedResumableDownload()

    try {
      await this.downloadResumable.pauseAsync();

      LoggingService.log(`Paused download (saved for future downloads)`);

      const savableDownload = this.downloadResumable.savable()

      AsyncStorage.setItem(DOWNLOAD_COLLECTION, JSON.stringify(savableDownload));
    } catch (error) {
      LoggingService.error(error);
    }
  }

  async resumePausedDownload() {
    if (!this.downloadResumable) this.#getSavedResumableDownload()

    try {
      await this.downloadResumable.resumeAsync();

      LoggingService.log('Finished downloading episode');
    } catch (e) {
      LoggingService.error(e);
    }
  }

  /**
   * @param {PodcastEpisode} episode
   */
  #generateFileNameWithExtension(episode) {
    if (episode.audioFile.fileType !== 'audio/mpeg') return null

    return `podcast-app-${episode.id}.mp3`
  }

  async #getSavedResumableDownload() {
    const downloadSnapshotJson = await AsyncStorage.getItem(DOWNLOAD_COLLECTION);

    const downloadSnapshot = JSON.parse(downloadSnapshotJson);

    if (!downloadSnapshot) return

    this.downloadResumable = new FileSystem.DownloadResumable(
      downloadSnapshot.url,
      downloadSnapshot.fileUri,
      downloadSnapshot.options,
      this.#onDownloadProgress,
      downloadSnapshot.resumeData
    );
  }
  /**
   * @param {FileSystem.DownloadProgressData} downloadProgress
   */
  #onDownloadProgress(downloadProgress) {
    const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;

    LoggingService.log(`Download Progress: ${progress}`)
  }
}
