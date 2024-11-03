import { useEffect, useState } from "react"

import { podcastChannelRepository } from "../../repositories"

export function useLatestsEpisodes() {
  const [isSearching, setIsSearching] = useState(false)
  const [latestsEpisodes, setLatestsEpisodes] = useState([])

  async function getLatestsEpisodes() {
    setIsSearching(true)

    const episodes = await podcastChannelRepository.getLatestsEpisodesFromSubscribedChannels()

    console.log({ episodes: episodes.map(item => item.title) });


    setLatestsEpisodes(episodes)

    setIsSearching(false)
  }

  useEffect(() => {
    getLatestsEpisodes()
  }, [])

  return { isSearching, latestsEpisodes, getLatestsEpisodes }
}
