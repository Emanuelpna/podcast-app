import { DatabaseCollectionNames } from '../../domain/enums/DatabaseCollectionNames';

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

    /** @type {Database} _db */
    this._db = db;
  }

  async getSubscribedChannels() {
    return this._db.getAllItems(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, 'title')
  }

  async getSavedEpisodesBySubscribedChannel(channelId) {
    return this._db.searchByField(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, 'channelId', channelId)
  }

  async getLatestsEpisodesFromSubscribedChannels() {
    const latestsEpisodes = []

    const channels = await this._db.getAllItems(DatabaseCollectionNames.SUBSCRIBED_PODCASTS)

    const daysPastToLookForEpisodes = 7 // one week

    const daysToMilisseconds = 24 * 60 * 60 * 1000

    const today = new Date()
    const oldReferenceDate = new Date(today.getTime() - daysPastToLookForEpisodes * daysToMilisseconds);

    for await (const channel of channels) {
      const episodes = await this._db.searchByField(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, 'channelId', channel.id)

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
    return await this._db.getItemDetails(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, channelId)
  }

  /**
   * @param {PodcastChannel} channel
   */
  async subscribeToChannel(channel) {
    const channelWithTitle = await this._db.searchByField(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, "title", channel.title)

    if (channelWithTitle.length > 0) {
      LoggingService.error("Channel is already subscribed")
      return channelWithTitle[0]
    }

    const channelToSubscribe = {
      ...channel.toObject(),
    }

    return await this._db.insertItem(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, channelToSubscribe)
  }

  async unsubscribeFromChannel(channelId) {
    return await this._db.removeItem(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, channelId)
  }
}

export const podcastChannelRepository = new PodcastChannelRepository();
