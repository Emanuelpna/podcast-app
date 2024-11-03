import { FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Navigations } from '../../../data/Navigations';
import { useOnScreenFocus } from '../../../data/hooks/navigation/useOnScreenFocus';
import { useSubscribedPodcastsFetch } from '../../../data/hooks/podcast/useSubscribedPodcastsFetch';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Layout } from '../../commons/Layout/Layout';
import { PageTitle } from '../../commons/PageTitle/PageTitle';
import { IconButton } from '../../commons/IconButton/IconButton';

import { MiniPlayer } from '../../player/MiniPlayer/MiniPlayer';

import { PodcastChannelCard } from '../../podcasts/PodcastChannelCard/PodcastChannelCard';

import * as S from './style';
import { colors } from '../../../styles/colors';

/**
 *
 * TODO:
 * - On refreshing subscribed channels FlatList, should fetch on web for the channels and look for new episodes not saved yet
 *
 */

export function SubscribesPage({ navigation }) {
  const {
    isPlaying,
    currentTrack,
    play,
    pause,
    loadTrackIntoPlayer
  } = useTrackPlayer();

  const {
    subscribedPodcasts,
    isFetchingSubscribedPodcasts,
    fetchSubscribedChannels
  } = useSubscribedPodcastsFetch()

  useOnScreenFocus(navigation, fetchSubscribedChannels)

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

  return (
    <Layout>
      <PageTitle rightSideSlot={
        <IconButton
          size={26}
          isHollowed
          mode="default"
          onButtonPress={openSubscriptionModal}
          icon={
            <MaterialCommunityIcons
              size={26}
              color={colors.text[300]}
              name='view-grid-plus-outline'
            />
          }
        />
      }>
        Inscrições {`(${subscribedPodcasts.length})`}
      </PageTitle>

      <FlatList
        refreshing={isFetchingSubscribedPodcasts}
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
