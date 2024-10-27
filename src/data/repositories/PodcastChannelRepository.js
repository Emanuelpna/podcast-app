import { database } from '../_fakeDB';

export class PodcastChannelRepository {
  constructor() {
    this._db = database;
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
