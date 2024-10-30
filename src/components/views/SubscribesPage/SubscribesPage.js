import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Navigations } from '../../../data/Navigations';
import { podcastChannelRepository } from '../../../data/repositories';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Layout } from '../../commons/Layout/Layout';
import { PageTitle } from '../../commons/PageTitle/PageTitle';
import { IconButton } from '../../commons/IconButton/IconButton';

import { MiniPlayer } from '../../player/MiniPlayer/MiniPlayer';

import { PodcastChannelCard } from '../../podcasts/PodcastChannelCard/PodcastChannelCard';

import * as S from './style';
import { colors } from '../../../styles/colors';

export function SubscribesPage({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [subscribedPodcasts, setSubscribedPodcasts] = useState([])

  const {
    isPlaying,
    currentTrack,
    play,
    pause,
    loadTrackIntoPlayer
  } = useTrackPlayer();

  function goToPodcastFeedPage(channel) {
    Navigations.navigateToPodcastFeedPage(navigation, channel);
  }

  function goToPlayerPage() {
    Navigations.navigateToPlayerPage(
      navigation,
      loadTrackIntoPlayer,
      currentTrack.channel,
      currentTrack.episode
    );
  }

  function openSubscriptionModal() {
    Navigations.navigateToPodcastSubscriptionModal(navigation)
  }

  function togglePlayPause() {
    if (isPlaying) pause();
    else play();
  }

  function fetchSubscribedChannels() {
    setRefreshing(true)

    podcastChannelRepository.getSubscribedChannels()
      .then((data) =>
        setSubscribedPodcasts(data)
      )
      .finally(() => {
        setRefreshing(false)
      })
  }

  useEffect(() => {
    fetchSubscribedChannels()
  }, [])

  return (
    <Layout>
      <PageTitle rightSideSlot={
        <IconButton
          size={26}
          isHollowed
          mode="default"
          onButtonPress={openSubscriptionModal}
          icon={() => (
            <MaterialCommunityIcons
              size={26}
              color={colors.text[300]}
              name='view-grid-plus-outline'
            />
          )}
        />
      }>
        Inscrições {`(${subscribedPodcasts.length})`}
      </PageTitle>

      <FlatList
        refreshing={refreshing}
        onRefresh={fetchSubscribedChannels}
        numColumns={3}
        data={subscribedPodcasts}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ gap: 0 }}
        keyExtractor={(podcastChannel) => podcastChannel.id}
        renderItem={({ item: podcastChannel }) => (
          <S.PodcastFeedItem>
            <PodcastChannelCard
              cover={podcastChannel.logo}
              title={podcastChannel.title}
              totalEpisodes={podcastChannel.totalEpisodesQuantity}
              onCardPress={() => goToPodcastFeedPage(podcastChannel)}
            />
          </S.PodcastFeedItem>
        )}
      />

      <MiniPlayer
        isPlaying={isPlaying}
        currentTrack={currentTrack}
        onOpenPlayerPage={goToPlayerPage}
        onTogglePlayPause={togglePlayPause}
      />
    </Layout>
  );
}
