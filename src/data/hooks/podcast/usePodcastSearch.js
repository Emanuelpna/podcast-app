import { useState } from "react"

import { SubscriptionService } from "../../services/SubscriptionService"

const subscriptionService = new SubscriptionService()

export function usePodcastSearch(onPodcastSubscribe) {
  const [podcastSearchResults, setPodcastSearchResults] = useState([])

  async function fetchFeedRSS(feedURL) {
    try {
      const podcastData = await subscriptionService.fetchFeedRSS(feedURL)

      setPodcastSearchResults([podcastData])
    } catch (error) {
      setPodcastSearchResults([])
    }
  }

  async function subscribeToChannel(podcastChannel) {
    try {
      const result = await subscriptionService.subscribeAndBulkSaveEpisodes(podcastChannel)

      onPodcastSubscribe()

      return result
    } catch (error) {
      return []
    } finally {
      setPodcastSearchResults([])
    }
  }

  return { podcastSearchResults, fetchFeedRSS, subscribeToChannel }
}
