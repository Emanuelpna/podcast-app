import { randomUUID } from 'expo-crypto';
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

  async getSavedEpisodesBySubscribedChannel(channelId) {
    return this._db.searchByField(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, 'channelId', channelId)
  }

  /**
  * @param {string} channelId
  * @param {PodcastEpisode[]} episodes
  */
  async saveEpisodesFromSubscribedChannel(channelId, episodes) {
    for await (const episode of episodes) {
      LoggingService.log('   -> Salvando o episódio: ', episode.title);

      const episodeWithTitle = await this._db.searchByField(
        DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES,
        "title",
        episode.title
      )

      if (episodeWithTitle && episodeWithTitle.length > 0) {
        LoggingService.warn("     -> Episode is already saved")
        continue
      }

      LoggingService.log('     -> Episódio ainda não está no banco');

      const episodeToSave = {
        ...episode.toObject(),
        channelId: channelId,
      }

      await this._db.insertItem(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, episodeToSave)

      LoggingService.log('     -> Episódio salvo com sucesso');

      continue
    }
  }

  async deleteEpisodesFromChannel(channelId) {
    const episodesFromChannel = await this.getSavedEpisodesBySubscribedChannel(channelId)

    if (episodesFromChannel !== null)
      for await (const episode of episodesFromChannel) {
        await this._db.removeItem(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, episode.id)
      }
  }
}
