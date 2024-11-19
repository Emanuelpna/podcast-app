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
