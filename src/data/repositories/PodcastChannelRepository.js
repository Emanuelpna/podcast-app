import { DatabaseCollectionNames } from '../../domain/enums/DatabaseCollectionNames';

import { database } from '../_fakeDB';
import { Database } from '../protocols/Database'
import { LoggingService } from '../services/LoggingService';

/**
 * @typedef {import('../../domain/models/podcast/PodcastChannel').PodcastChannel} PodcastChannel
 * @typedef {import('../../domain/models/podcast/PodcastEpisode').PodcastEpisode} PodcastEpisode
 * */
export class PodcastChannelRepository {
  constructor(db) {
    if (!db instanceof Database)
      throw LoggingService.error('You need to use a class that extends `/data/protocols/Database`');

    /** @type {Database} _newDB */
    this._newDB = db;
    this._db = database;
  }

  async getSubscribedChannels() {
    return this._newDB.getAllItems(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, 'title')
  }

  async getSavedEpisodesBySubscribedChannel(channelId) {
    return this._newDB.searchByField(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, 'channelId', channelId)
  }

  async getLatestsEpisodesFromSubscribedChannels() {
    const latestsEpisodes = []

    const channels = await this._newDB.getAllItems(DatabaseCollectionNames.SUBSCRIBED_PODCASTS)

    const daysPastToLookForEpisodes = 7 // one week

    const daysToMilisseconds = 24 * 60 * 60 * 1000

    const today = new Date()
    const oldReferenceDate = new Date(today.getTime() - daysPastToLookForEpisodes * daysToMilisseconds);

    for await (const channel of channels) {
      const episodes = await this._newDB.searchByField(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, 'channelId', channel.id)

      for await (const episode of episodes) {
        const episodePublishDate = new Date(episode.publishDate)

        if (!episodePublishDate) continue

        if (episodePublishDate.getTime() >= oldReferenceDate.getTime())
          latestsEpisodes.push({ channel, episode })
      }
    }

    return latestsEpisodes.sort((a, b) => new Date(b.episode.publishDate) - new Date(a.episode.publishDate))
  }

  async getChannelById(channelId) {
    return await this._newDB.getItemDetails(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, channelId)
  }

  getEpisodeById(episodeId) {
    return this._db.downloadedPodcastEpisodes.find(
      (episode) => episode.id === episodeId
    );
  }

  /**
   * @param {PodcastChannel} channel
   */
  async subscribeToChannel(channel) {
    const channelWithTitle = await this._newDB.searchByField(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, "title", channel.title)

    if (channelWithTitle.length > 0) {
      LoggingService.error("Channel is already subscribed")
      return channelWithTitle[0]
    }

    const channelToSubscribe = {
      ...channel.toObject(),
    }

    return await this._newDB.insertItem(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, channelToSubscribe)
  }

  /**
 * @param {PodcastChannel} channel
 * @param {PodcastEpisode[]} episodes
 */
  async saveEpisodesFromSubscribedChannel(channel, episodes) {
    for await (const episode of episodes) {
      LoggingService.log('salvando o episódio: ', episode.title);

      const episodeWithTitle = await this._newDB.searchByField(
        DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES,
        "title",
        episode.title
      )

      if (episodeWithTitle.length > 0) {
        LoggingService.error("Episode is already saved")
        continue
      }

      LoggingService.log('episódio ainda não está no banco');

      const episodeToSave = {
        ...episode.toObject(),
        channelId: channel.id,
      }

      await this._newDB.insertItem(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, episodeToSave)

      LoggingService.log('episódio salvo com sucesso');

      continue
    }
  }

  async unsubscribeFromChannel(channelId) {
    const episodesFromChannel = await this.getSavedEpisodesBySubscribedChannel(channelId)

    if (episodesFromChannel !== null)
      for await (const episode of episodesFromChannel) {
        await this._newDB.removeItem(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, episode.id)
      }

    return await this._newDB.removeItem(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, channelId)
  }
}

export const podcastChannelRepository = new PodcastChannelRepository();
