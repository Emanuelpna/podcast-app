import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Navigations } from '../../../data/Navigations';
import { podcastChannelRepository } from '../../../data/repositories';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Layout } from '../../commons/Layout/Layout';
import { PageTitle } from '../../commons/PageTitle/PageTitle';

import { MiniPlayer } from '../../player/MiniPlayer/MiniPlayer';

import { PodcastChannelCard } from '../../podcasts/PodcastChannelCard/PodcastChannelCard';

import * as S from './style';

export function SubscribesPage({ navigation }) {
  const [subscribedPodcasts, setSubscribedPodcasts] = useState([])

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

  useEffect(() => {
    // podcastChannelRepository.subscribeToChannel(
    //   new PodcastChannel(
    //     'Jogabilidade',
    //     'https://jogabilida.de',
    //     new PodcastAuthor('Jogabilidade', 'admin@jogabilida.de'),
    //     'Podcasts do Jogabilidade que discutem jogos, aqui você vai encontrar o DASH e o Vértice.',
    //     'Wed, 09 Oct 2024 17:04:23 +0000',
    //     'https://jogabilida.de/wp-content/uploads/powerpress/capa_games1440.png',
    //     'https://jogabilida.de/category/podcasts/podcast-games/feed/podcast/',
    //     616
    //   )
    // ).then(() => {
    podcastChannelRepository.getSubscribedChannels()
      .then((data) =>
        setSubscribedPodcasts(data)
      )
    // })
  }, [])

  return (
    <Layout>
      <PageTitle>Inscrições {`(${subscribedPodcasts.length})`}</PageTitle>

      <FlatList
        numColumns={3}
        data={subscribedPodcasts.sort((a, b) =>
          a.title.localeCompare(b.title)
        )}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ gap: 0 }}
        keyExtractor={(podcastChannel) => podcastChannel.id}
        renderItem={({ item: podcastChannel }) => (
          <S.PodcastFeedItem>
            <PodcastChannelCard
              cover={podcastChannel.logo}
              title={podcastChannel.title}
              totalEpisodes={podcastChannel.totalEpisodesQuantity}
              onCardPress={() => goToPodcastFeedPage(podcastChannel.channel)}
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
