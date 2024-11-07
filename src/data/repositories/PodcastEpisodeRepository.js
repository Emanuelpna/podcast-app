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

  async getEpisodeDetaislById(episodeId) {
    return await this._db.getItemDetails(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, episodeId)
  }
}
