
import { useEffect, createContext, useState, useContext } from 'react';

import { podcastChannelRepository } from '../../repositories';

const SubscribedPodcastsContext = createContext();

export const SubscribedPodcastsProvider = ({ children }) => {
  const [subscribedPodcasts, setSubscribedPodcasts] = useState([]);
  const [isFetchingSubscribedPodcasts, setIsFetchingSubscribedPodcasts] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <SubscribedPodcastsContext.Provider value={{
      subscribedPodcasts,
      setSubscribedPodcasts,
      isFetchingSubscribedPodcasts,
      setIsFetchingSubscribedPodcasts
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
    setIsFetchingSubscribedPodcasts
  } = useContext(SubscribedPodcastsContext)


  function fetchSubscribedChannels() {
    setIsFetchingSubscribedPodcasts(true)

    podcastChannelRepository.getSubscribedChannels()
      .then((data) =>
        setSubscribedPodcasts(data)
      )
      .finally(() => {
        setIsFetchingSubscribedPodcasts(false)
      })
  }

  useEffect(() => {
    fetchSubscribedChannels()
  }, [])

  return { isFetchingSubscribedPodcasts, subscribedPodcasts, fetchSubscribedChannels }
}

export default SubscribedPodcastsContext;
