import { FlatList } from 'react-native';
import { Divider } from 'react-native-paper';

import { database } from '../../../data/_fakeDB';
import { Navigations } from '../../../data/Navigations';
import { PodcastChannelRepository } from '../../../data/repositories/PodcastChannelRepository';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Layout } from '../../commons/Layout/Layout';
import { PageTitle } from '../../commons/PageTitle/PageTitle';

import { MiniPlayer } from '../../player/MiniPlayer/MiniPlayer';

import { PodcastEpisodeItemList } from '../../podcasts/PodcastEpisodeItemList/PodcastEpisodeItemList';

const podcastChannelRepository = new PodcastChannelRepository(database);

export function DownloadsPage({ navigation }) {
  const { isPlaying, currentTrack, play, pause, loadTrackIntoPlayer } =
    useTrackPlayer();

  function openEpisodePage(channel, episode) {
    Navigations.navigateToPodcastEpisodePage(navigation, channel, episode);
  }

  function playPodcastEpisode(channel, episode) {
    Navigations.navigateToPlayerPage(
      navigation,
      loadTrackIntoPlayer,
      channel,
      episode
    );
  }

  function togglePlayPause() {
    if (isPlaying) pause();
    else play();
  }

  return (
    <Layout>
      <PageTitle>Meus Downloads</PageTitle>

      <FlatList
        keyExtractor={(item) => item.id}
        data={database.downloadedPodcastEpisodes}
        ItemSeparatorComponent={<Divider />}
        renderItem={({ item: episode }) => {
          const channel = podcastChannelRepository.getChannelById(
            episode.channelId
          );

          return (
            <PodcastEpisodeItemList
              channel={channel}
              episode={episode}
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
