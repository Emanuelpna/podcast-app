import { useEffect, useRef } from 'react';
import { View, FlatList } from 'react-native';

import { Navigations } from '../../../data/Navigations';
import { podcastChannelRepository } from '../../../data/repositories';
import { useSubscribedPodcastsFetch } from '../../../data/hooks/podcast/useSubscribedPodcastsFetch';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { PodcastChannelBio } from '../../podcasts/PodcastChannelBio/PodcastChannelBio';
import { PodcastEpisodeCard } from '../../podcasts/PodcastEpisodeCard/PodcastEpisodeCard';

import { Layout } from '../../commons/Layout/Layout';
import { Loading } from '../../commons/Loading/Loading';

export function PodcastFeedPage({ route, navigation }) {
  const { podcastChannel } = route.params;

  const podcastEpisodesListRef = useRef(null)

  const {
    episodesFromChannel,
    isFetchingEpisodes,
    fetchEpisodesFromChannel
  } = useSubscribedPodcastsFetch()

  const { loadTrackIntoPlayer } = useTrackPlayer();

  function playPodcastEpisode(episode) {
    Navigations.navigateToPlayerPage(
      navigation,
      loadTrackIntoPlayer,
      podcastChannel,
      episode
    );
  }

  function openEpisodePage(episodeId) {
    Navigations.navigateToPodcastEpisodePage(
      navigation,
      podcastChannel,
      getEpisodeByID(episodeId)
    );
  }

  function getEpisodeByID(id) {
    return episodesFromChannel.find((episode) => episode.id === id);
  }

  useEffect(() => {
    if (podcastEpisodesListRef.current === null) return

    podcastEpisodesListRef.current.scrollToOffset({ animated: true, offset: 0 });
  }, [episodesFromChannel])

  useEffect(() => {
    if (!podcastChannel?.id) {
      Navigations.navigateToSubscribePage(navigation)
      return
    }

    fetchEpisodesFromChannel(podcastChannel.id)
  }, [])

  if (isFetchingEpisodes || !podcastChannel) return <Loading />;

  return (
    <Layout>
      <PodcastChannelBio
        channel={podcastChannel}
        onUnsubscribeFromChannel={async channelId => {
          await podcastChannelRepository.unsubscribeFromChannel(channelId)

          Navigations.navigateToSubscribePage(navigation)
        }}
      />

      <View style={{ height: 50 }}></View>

      <FlatList
        ref={podcastEpisodesListRef}
        data={episodesFromChannel}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item: episode }) => (
          <PodcastEpisodeCard
            channel={podcastChannel}
            episode={episode}
            onEpisodePlay={() => playPodcastEpisode(episode)}
            onOpenEpisodePage={() => openEpisodePage(episode.id)}
          />
        )}
      />
    </Layout>
  );
}
