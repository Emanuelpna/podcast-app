import { LoggingService } from "./LoggingService";
import { podcastChannelRepository, podcastEpisodeRepository } from "../repositories";

import { RSSReader } from "../../infra/feedRSS/RSSReader";

/**
 * @typedef {import('../../domain/models/podcast/PodcastChannel').PodcastChannel} PodcastChannel
 * @typedef {import('../../domain/models/podcast/PodcastEpisode').PodcastEpisode} PodcastEpisode
 * */
export class SubscriptionService {
  constructor() {
    this._reader = new RSSReader();
    this._podcastChannelRepository = podcastChannelRepository;
    this._podcastEpisodeRepository = podcastEpisodeRepository;
  }

  async subscribeAndBulkSaveEpisodes(podcastChannel, podcastEpisodes) {
    LoggingService.log(' -> Started saving channel and episodes');

    try {
      /** @type {PodcastChannel|null} subscribedChannel */
      const subscribedChannel = await this._podcastChannelRepository.subscribeToChannel(podcastChannel)

      LoggingService.log(' -> Finished saving channel: ', subscribedChannel.title);

      LoggingService.log('   -> Starting saving episodes');

      this._podcastEpisodeRepository
        .saveEpisodesFromSubscribedChannel(subscribedChannel.id, podcastEpisodes)
        .then(() => {
          LoggingService.log('   -> Finished saving episodes');
        })

      return subscribedChannel
    } catch (error) {
      return null
    }
  }

  async fetchFeedRSS(feedUrl) {
    const response = await this._reader.fetchRSSFeed(feedUrl)

    const xml = await this._reader.parseXmlString(response)

    const podcastData = await this._reader.mapXMLDataToModel(xml, feedUrl)

    return podcastData
  }
}
