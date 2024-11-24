import { DatabaseCollectionNames } from '../../domain/enums/DatabaseCollectionNames';

import { Database } from '../protocols/Database'
import { LoggingService } from '../services/LoggingService';

/**
 * @typedef {import('../../domain/models/podcast/PodcastChannel').PodcastChannel} PodcastChannel
 * @typedef {import('../../domain/models/podcast/PodcastEpisode').PodcastEpisode} PodcastEpisode
 * */
export class PodcastEpisodeRepository {
  constructor(db) {
    if (!db instanceof Database)
      throw LoggingService.error('You need to use a class that extends `/data/protocols/Database`');

    /** @type {Database} _newDB */
    this._db = db;
  }

  async getDownloadedEpisodeByID(episodeId) {
    return await this._db.getItemDetails(DatabaseCollectionNames.DOWNLOADED_PODCAST_EPISODES, episodeId)
  }

  async getLatestsEpisodesFromSubscribedChannels() {
    const newestEpisodes = []

    const episodes = await this._db.getAllItems(DatabaseCollectionNames.NEWEST_PODCAST_EPISODES)

    for await (const episode of episodes) {
      const channel = await this._db.getItemDetails(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, episode.channelId)

      newestEpisodes.push({ channel, episode })
    }

    return newestEpisodes
  }

  /**
  * @param {PodcastEpisode[]} episodes
  */
  async saveNewestsEpisodesFromSubscribedChannel(episodes) {
    await this._db.removeCollection(DatabaseCollectionNames.NEWEST_PODCAST_EPISODES)

    const daysPastToLookForEpisodes = 7 // one week

    const daysToMilisseconds = day => day * 24 * 60 * 60 * 1000

    const today = new Date()
    const oldReferenceDate = new Date(today.getTime() - daysToMilisseconds(daysPastToLookForEpisodes));

    const sortedEpisodes = episodes.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))

    for await (const episode of sortedEpisodes) {
      const episodePublishDate = new Date(episode.publishDate)

      if (!episodePublishDate) continue

      // published earlier than the last 7 days
      if (episodePublishDate.getTime() < oldReferenceDate.getTime())
        continue

      LoggingService.log('   -> Salvando o episódio: ', episode.title);

      await this._db.insertItem(DatabaseCollectionNames.NEWEST_PODCAST_EPISODES, episode)

      LoggingService.log('     -> Episódio salvo com sucesso');
    }
  }

  /**
  * @param {PodcastChannel} channel
  * @param {PodcastEpisode} episode
  */
  async saveDownloadedEpisode(channel, episode) {
    const episodeObject = episode.toObject?.()
    const episodeToSave = {
      ...(episodeObject ?? episode),
      channelId: channel.id,
      banner: episode.banner ?? channel.logo,
    }

    await this._db.insertItem(DatabaseCollectionNames.DOWNLOADED_PODCAST_EPISODES, episodeToSave)
  }

  /**
  * @param {PodcastEpisode} episode
  */
  async deleteDownloadedEpisode(episode) {
    await this._db.removeItem(DatabaseCollectionNames.DOWNLOADED_PODCAST_EPISODES, episode.id)
  }

  async deleteEpisodesFromChannel(channelId) {
    const episodesFromChannel = await this._db.searchByField(DatabaseCollectionNames.NEWEST_PODCAST_EPISODES, 'channelId', channelId)

    if (episodesFromChannel !== null)
      for await (const episode of episodesFromChannel) {
        await this._db.removeItem(DatabaseCollectionNames.NEWEST_PODCAST_EPISODES, episode.id)
      }
  }
}
