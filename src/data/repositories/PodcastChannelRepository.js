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
    return this._newDB.getAllItems(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, 'title')
  }

  async getSavedEpisodesBySubscribedChannel(channelId) {
    return this._newDB.searchByField(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, 'channelId', channelId)
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

  /**
   * @param {PodcastChannel} channel
   */
  async subscribeToChannel(channel) {
    const channelWithTitle = await this._newDB.searchByField(DatabaseCollectionNames.SUBSCRIBED_PODCASTS, "title", channel.title)

    if (channelWithTitle.length > 0) {
      console.error("Channel is already subscribed")
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
      console.log('salvando o episódio: ', episode.title);

      const episodeWithTitle = await this._newDB.searchByField(
        DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES,
        "title",
        episode.title
      )

      if (episodeWithTitle.length > 0) {
        console.error("Episode is already saved")
        continue
      }

      console.log('episódio ainda não está no banco');

      const episodeToSave = {
        ...episode.toObject(),
        channelId: channel.id,
      }

      await this._newDB.insertItem(DatabaseCollectionNames.SUBSCRIBED_PODCAST_EPISODES, episodeToSave)

      console.log('episódio salvo com sucesso');

      continue
    }
  }
}

export const podcastChannelRepository = new PodcastChannelRepository();
