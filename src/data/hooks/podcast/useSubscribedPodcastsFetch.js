
import { useEffect, createContext, useState, useContext } from 'react';

import { podcastChannelRepository } from '../../repositories';

const SubscribedPodcastsContext = createContext();

export const SubscribedPodcastsProvider = ({ children }) => {
  const [subscribedPodcasts, setSubscribedPodcasts] = useState([]);
  const [isFetchingSubscribedPodcasts, setIsFetchingSubscribedPodcasts] = useState(false);

  const [episodesFromChannel, setEpisodesFromChannel] = useState([]);
  const [isFetchingEpisodes, setIsFetchingEpisodes] = useState(false);

  return (
    <SubscribedPodcastsContext.Provider value={{
      subscribedPodcasts,
      setSubscribedPodcasts,
      isFetchingSubscribedPodcasts,
      setIsFetchingSubscribedPodcasts,

      episodesFromChannel,
      setEpisodesFromChannel,
      isFetchingEpisodes,
      setIsFetchingEpisodes
    }}>
      {children}
    </SubscribedPodcastsContext.Provider>
  );
};

export function useSubscribedPodcastsFetch() {
  const {
    subscribedPodcasts,
    setSubscribedPodcasts,
    isFetchingSubscribedPodcasts,
    setIsFetchingSubscribedPodcasts,

    episodesFromChannel,
    setEpisodesFromChannel,
    isFetchingEpisodes,
    setIsFetchingEpisodes
  } = useContext(SubscribedPodcastsContext)


  async function fetchSubscribedChannels() {
    setIsFetchingSubscribedPodcasts(true)

    return podcastChannelRepository.getSubscribedChannels()
      .then((data) => {
        setSubscribedPodcasts(data)

        return data
      })
      .finally(() => {
        setIsFetchingSubscribedPodcasts(false)
      })
  }

  function fetchEpisodesFromChannel(channelId) {
    setIsFetchingEpisodes(true)

    podcastChannelRepository.getSavedEpisodesBySubscribedChannel(channelId)
      .then((data) =>
        setEpisodesFromChannel(
          data.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        )
      )
      .finally(() => {
        setIsFetchingEpisodes(false)
      })
  }

  useEffect(() => {
    fetchSubscribedChannels()
  }, [])

  return {
    isFetchingSubscribedPodcasts,
    subscribedPodcasts,
    isFetchingEpisodes,
    episodesFromChannel,
    fetchSubscribedChannels,
    fetchEpisodesFromChannel
  }
}

export default SubscribedPodcastsContext;
