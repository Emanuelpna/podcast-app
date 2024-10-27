import { useEffect, useState } from 'react';

import { RSSReader } from './RSSReader';

const reader = new RSSReader();

/**
 * @typedef {import('../../domain/models/podcast/PodcastChannel').PodcastChannel} PodcastChannel
 * @typedef {import('../../domain/models/podcast/PodcastEpisode').PodcastEpisode} PodcastEpisode
 * */
export function useFetchRSSFeed(feedUrl) {
  const [isLoading, setIsLoading] = useState(false);

  /** @type {[PodcastChannel, React.Dispatch<PodcastChannel>]} state */
  const [channel, setChannel] = useState();
   /** @type {[PodcastEpisode[], React.Dispatch<PodcastEpisode[]>]} state */
  const [mostRecentEpisodes, setMostRecentEpisodes] = useState();

  useEffect(() => {
    setIsLoading(true);

    reader
      .fetchRSSFeed(feedUrl)
      .then((response) => reader.parseXmlString(response))
      .then((xml) => reader.mapXMLDataToModel(xml, feedUrl))
      .then((podcastData) => {
        setChannel(podcastData.podcastChannel);
        setMostRecentEpisodes(podcastData.mostRecentEpisodes);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [feedUrl]);

  return { channel, mostRecentEpisodes, isLoading };
}
