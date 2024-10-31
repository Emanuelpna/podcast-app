import { podcastChannelRepository } from "../repositories";

import { RSSReader } from "../../infra/feedRSS/RSSReader";

export class SubscriptionService {
  constructor() {
    this._reader = new RSSReader();
    this._podcastChannelRepository = podcastChannelRepository;
  }

  async subscribeAndBulkSaveEpisodes(podcastChannel, podcastEpisodes) {
    console.log('Started saving channel and episodes');

    let subscribedChannel

    try {
      subscribedChannel = await this._podcastChannelRepository.subscribeToChannel(podcastChannel)
    } catch (error) { }

    console.log('Finished saving channel: ', subscribedChannel);

    console.log('Starting saving episodes');

    this._podcastChannelRepository.saveEpisodesFromSubscribedChannel(subscribedChannel, podcastEpisodes)
      .then(() => {
        console.log('Finished saving episodes');
      })

    return subscribedChannel
  }

  async fetchFeedRSS(feedUrl) {
    const response = await this._reader.fetchRSSFeed(feedUrl)

    const xml = await this._reader.parseXmlString(response)

    const podcastData = await this._reader.mapXMLDataToModel(xml, feedUrl)

    return podcastData
  }
}
