import { useEffect, useState } from "react"

import { podcastChannelRepository, podcastEpisodeRepository } from "../../repositories"

export function useLatestsEpisodes() {
  const [isSearching, setIsSearching] = useState(false)
  const [latestsEpisodes, setLatestsEpisodes] = useState([])

  async function getLatestsEpisodes() {
    setIsSearching(true)

    const channels = await podcastChannelRepository.getSubscribedChannels()

    const episodes = await podcastEpisodeRepository.getLatestsEpisodesFromSubscribedChannels(channels)

    setLatestsEpisodes(episodes)

    setIsSearching(false)
  }

  useEffect(() => {
    getLatestsEpisodes()
  }, [])

  return { isSearching, latestsEpisodes, getLatestsEpisodes }
}
