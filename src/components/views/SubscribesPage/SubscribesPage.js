import { FlatList } from 'react-native';

import { database } from '../../../data/_fakeDB';
import { Navigations } from '../../../data/Navigations';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Layout } from '../../commons/Layout/Layout';
import { PageTitle } from '../../commons/PageTitle/PageTitle';

import { MiniPlayer } from '../../player/MiniPlayer/MiniPlayer';

import { PodcastChannelCard } from '../../podcasts/PodcastChannelCard/PodcastChannelCard';

import * as S from './style';

export function SubscribesPage({ navigation }) {
  const { isPlaying, currentTrack, play, pause, loadTrackIntoPlayer } =
    useTrackPlayer();

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

  function togglePlayPause() {
    if (isPlaying) pause();
    else play();
  }

  return (
    <Layout>
      <PageTitle>Inscrições {database.subscribedPodcasts && `(${database.subscribedPodcasts.length})`}</PageTitle>

      <FlatList
        numColumns={3}
        data={database.subscribedPodcasts.sort((a, b) =>
          a.title.localeCompare(b.title)
        )}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ gap: 6 }}
        keyExtractor={(podcastChannel) => podcastChannel.website}
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
