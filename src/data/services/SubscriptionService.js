import { podcastChannelRepository } from "../repositories";

import { RSSReader } from "../../infra/feedRSS/RSSReader";

export class SubscriptionService {
  constructor() {
    this._reader = new RSSReader();
    this._podcastChannelRepository = podcastChannelRepository;
  }

  async subscribeAndBulkSaveEpisodes(podcastChannel) {
    return await this._podcastChannelRepository.subscribeToChannel(podcastChannel)
  }

  async fetchFeedRSS(feedUrl) {
    const response = await this._reader.fetchRSSFeed(feedUrl)

    const xml = await this._reader.parseXmlString(response)

    const podcastData = await this._reader.mapXMLDataToModel(xml, feedUrl)

    return podcastData
  }
}
