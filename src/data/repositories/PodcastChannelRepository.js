import { DatabaseCollectionNames } from '../../domain/enums/DatabaseCollectionNames';

import { database } from '../_fakeDB';
import { Database } from '../protocols/Database'

/**
 * @typedef {import('../../domain/models/podcast/PodcastChannel').PodcastChannel} PodcastChannel
 * @typedef {import('../../domain/models/podcast/PodcastEpisode').PodcastEpisode} PodcastEpisode
 * */
export class PodcastChannelRepository {
  constructor(db) {
    if (!db instanceof Database)
      throw console.error('You need to use a class that extends `/data/protocols/Database`');

    /** @type {Database} _newDB */
    this._newDB = db;
    this._db = database;
  }

  async getSubscribedChannels() {
    return this._newDB.getAllItems(DatabaseCollectionNames.SUBSCRIBED_PODCASTS)
  }

  /**
   * @param {PodcastChannel} channel 
   */
  async subscribeToChannel(channel) {
    const channelWithTitle = await this._newDB.searchByField(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, "title", channel.title)

    if (channelWithTitle) {
      console.error("Channel is already subscribed")
      return null
    }

    const channelToSubscribe = {
      ...channel.toObject(),
    }

    return await this._newDB.insertItem(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, channelToSubscribe)
  }

  getChannelById(channelId) {
    return this._db.subscribedPodcasts.find(
      (channel) => channel.website === channelId
    );
  }

  getEpisodeById(episodeId) {
    return this._db.downloadedPodcastEpisodes.find(
      (episode) => episode.id === episodeId
    );
  }
}

export const podcastChannelRepository = new PodcastChannelRepository();
