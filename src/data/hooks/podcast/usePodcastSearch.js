import { useState } from "react"

import { SubscriptionService } from "../../services/SubscriptionService"
import { iTunesSearch } from "../../../infra/iTunes/search/iTunesSearch"

const subscriptionService = new SubscriptionService()

export const PODCAST_SEARCH_SOURCE = {
  ITUNES: 'iTunes',
  RSS: 'rss'
}

export function usePodcastSearch(onPodcastSubscribe) {
  const [isSearching, setIsSearching] = useState(false)
  const [podcastSearchResults, setPodcastSearchResults] = useState([])

  async function fetchFeedRSS(feedURL) {
    try {
      const podcastData = await subscriptionService.fetchFeedRSS(feedURL)

      podcastData.source = PODCAST_SEARCH_SOURCE.RSS

      setPodcastSearchResults([podcastData])
    } catch (error) {
      setPodcastSearchResults([])
    }
  }

  async function doChannelSearch(searchTerm) {
    const itunesSearch = new iTunesSearch()

    const data = await itunesSearch.searchPodcastByChannelName(searchTerm)

    // data.results.map(async podcast =>
    //   await subscriptionService.fetchFeedRSS(podcast.feedUrl)
    // )

    setPodcastSearchResults(data.results.map(podcast => ({
      id: podcast.collectionId,
      feedUrl: podcast.feedUrl,
      logo: podcast.artworkUrl600,
      title: podcast.collectionName,
      lastUpdate: podcast.releaseDate,
      totalEpisodesQuantity: podcast.trackCount,
      source: PODCAST_SEARCH_SOURCE.ITUNES
    })))
  }

  async function subscribeToChannel(podcastData) {
    setIsSearching(true)

    let data = null

    try {
      if (podcastData.source === PODCAST_SEARCH_SOURCE.RSS) {
        data = podcastData
      } else {
        data = await subscriptionService.fetchFeedRSS(podcastData.feedUrl)
      }

      const result = await subscriptionService.subscribeAndBulkSaveEpisodes(data.podcastChannel, data.podcastEpisodes)

      onPodcastSubscribe?.()

      return result
    } catch (error) {
      return []
    } finally {
      setPodcastSearchResults([])
      setIsSearching(false)
    }
  }

  return {
    isSearching,
    podcastSearchResults,
    fetchFeedRSS,
    doChannelSearch,
    subscribeToChannel
  }
}
