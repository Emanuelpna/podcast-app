import { FlatList } from 'react-native';

import { database } from '../../../data/_fakeDB';
import { Navigations } from '../../../data/Navigations';
import { PodcastChannelRepository } from '../../../data/repositories/PodcastChannelRepository';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Layout } from '../../commons/Layout/Layout';
import { SearchBar } from '../../commons/SearchBar/SearchBar';
import { PageTitle } from '../../commons/PageTitle/PageTitle';

import { MiniPlayer } from '../../player/MiniPlayer/MiniPlayer';

import { PodcastEpisodeCard } from '../../podcasts/PodcastEpisodeCard/PodcastEpisodeCard';

const podcastChannelRepository = new PodcastChannelRepository(database);

export function DiscoveryPage({ navigation }) {
  const { isPlaying, currentTrack, play, pause, loadTrackIntoPlayer } =
    useTrackPlayer();

  function playPodcastEpisode(channel, episode) {
    Navigations.navigateToPlayerPage(
      navigation,
      loadTrackIntoPlayer,
      channel,
      episode
    );
  }

  function openEpisodePage(channel, episode) {
    Navigations.navigateToPodcastEpisodePage(navigation, channel, episode);
  }

  function togglePlayPause() {
    if (isPlaying) pause();
    else play();
  }

  return (
    <Layout>
      <PageTitle>Últimos Episódios</PageTitle>

      <FlatList
        data={database.newPodcastEpisodes}
        contentContainerStyle={{ gap: 4 }}
        keyExtractor={(episode) => episode.id}
        renderItem={({ item: episode }) => {
          const channel = podcastChannelRepository.getChannelById(
            episode.channelId
          );

          return (
            <PodcastEpisodeCard
              episode={episode}
              channel={channel}
              onEpisodePlay={() => playPodcastEpisode(channel, episode)}
              onOpenEpisodePage={() => openEpisodePage(channel, episode)}
            />
          );
        }}
      />

      <MiniPlayer
        isPlaying={isPlaying}
        currentTrack={currentTrack}
        onTogglePlayPause={togglePlayPause}
        onOpenPlayerPage={() =>
          playPodcastEpisode(currentTrack.channel, currentTrack.episode)
        }
      />
    </Layout>
  );
}
