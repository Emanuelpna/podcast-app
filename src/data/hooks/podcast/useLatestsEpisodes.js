import { useEffect, useState } from "react"

import { podcastEpisodeRepository } from "../../repositories"

export function useLatestsEpisodes() {
  const [isSearching, setIsSearching] = useState(false)
  const [latestsEpisodes, setLatestsEpisodes] = useState([])

  async function getLatestsEpisodes() {
    setIsSearching(true)

    const episodes = await podcastEpisodeRepository.getLatestsEpisodesFromSubscribedChannels()

    setLatestsEpisodes(episodes)

    setIsSearching(false)
  }

  useEffect(() => {
    getLatestsEpisodes()
  }, [])

  return { isSearching, latestsEpisodes, getLatestsEpisodes }
}
