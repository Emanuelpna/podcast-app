import { useEffect, useRef } from 'react';
import { View, FlatList } from 'react-native';

import { Navigations } from '../../../data/Navigations';
import { LoggingService } from '../../../data/services/LoggingService';
import { EpisodeDownloadService } from '../../../data/services/EpisodeDownloadService';
import { podcastChannelRepository, podcastEpisodeRepository } from '../../../data/repositories';
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

  function playPodcastEpisode(podcastEpisode) {
    Navigations.navigateToPlayerPage(
      navigation,
      loadTrackIntoPlayer,
      podcastChannel,
      podcastEpisode
    );
  }

  function openEpisodePage(podcastEpisode) {
    Navigations.navigateToPodcastEpisodePage(
      navigation,
      podcastChannel,
      podcastEpisode
    );
  }

  async function onUnsubscribeFromChannel(channelId) {
    try {
      await podcastChannelRepository.unsubscribeFromChannel(channelId)

      Navigations.navigateToSubscribePage(navigation)
    } catch (error) {
      LoggingService.error('Erro ao se desinscrever do Canal', error)
    }
  }

  async function downloadEpisode(channel, episode) {
    const episodeDownloadService = new EpisodeDownloadService()

    await episodeDownloadService.startDownload(episode)
    await podcastEpisodeRepository.saveDownloadedEpisode(channel.id, episode)
  }

  useEffect(() => {
    if (podcastEpisodesListRef.current === null) return

    podcastEpisodesListRef.current.scrollToOffset({ animated: true, offset: 0 });
  }, [episodesFromChannel])

  useEffect(() => {
    if (!podcastChannel?.feedRSSUrl) {
      Navigations.navigateToSubscribePage(navigation)
      return
    }

    fetchEpisodesFromChannel(podcastChannel.feedRSSUrl)
  }, [])

  if (isFetchingEpisodes || !podcastChannel) return <Loading />;

  return (
    <Layout>
      <PodcastChannelBio
        channel={podcastChannel}
        onUnsubscribeFromChannel={onUnsubscribeFromChannel}
      />

      <View style={{ height: 20 }}></View>

      <FlatList
        ref={podcastEpisodesListRef}
        data={episodesFromChannel}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={(podcastEpisode) => podcastEpisode.id}
        renderItem={({ item: podcastEpisode }) => (
          <PodcastEpisodeCard
            channel={podcastChannel}
            episode={podcastEpisode}
            onEpisodePlay={() => playPodcastEpisode(podcastEpisode)}
            onOpenEpisodePage={() => openEpisodePage(podcastEpisode)}
            onDownloadEpisode={() => downloadEpisode(podcastChannel, podcastEpisode)}
          />
        )}
      />
    </Layout>
  );
}
