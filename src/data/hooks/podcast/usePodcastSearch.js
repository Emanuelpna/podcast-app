import { useState } from "react"

import { SubscriptionService } from "../../services/SubscriptionService"

const subscriptionService = new SubscriptionService()

export function usePodcastSearch(onPodcastSubscribe) {
  const [isSearching, setIsSearching] = useState(false)
  const [podcastSearchResults, setPodcastSearchResults] = useState([])

  async function fetchFeedRSS(feedURL) {
    try {
      const podcastData = await subscriptionService.fetchFeedRSS(feedURL)

      setPodcastSearchResults([podcastData])
    } catch (error) {
      setPodcastSearchResults([])
    }
  }

  async function subscribeToChannel(podcastChannel, podcastEpisodes) {
    setIsSearching(true)

    try {
      const result = await subscriptionService.subscribeAndBulkSaveEpisodes(podcastChannel, podcastEpisodes)

      onPodcastSubscribe?.()

      return result
    } catch (error) {
      return []
    } finally {
      setPodcastSearchResults([])
      setIsSearching(false)
    }
  }

  return { isSearching, podcastSearchResults, fetchFeedRSS, subscribeToChannel }
}
