import { FlatList } from 'react-native';
import { Divider } from 'react-native-paper';

import { Navigations } from '../../../data/Navigations';
import { EpisodeDownloadService } from '../../../data/services/EpisodeDownloadService';
import { useDownloadedEpisodesFetch } from '../../../data/hooks/podcast/useDownloadedEpisodesFetch';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Layout } from '../../commons/Layout/Layout';
import { PageTitle } from '../../commons/PageTitle/PageTitle';

import { MiniPlayer } from '../../player/MiniPlayer/MiniPlayer';

import { PodcastEpisodeItemList } from '../../podcasts/PodcastEpisodeItemList/PodcastEpisodeItemList';

export function DownloadsPage({ navigation }) {
  const { isPlaying, currentTrack, play, pause, loadTrackIntoPlayer } =
    useTrackPlayer();

  const { isFetching, downloadedEpisodes, fetchDownloadedEpisodes } = useDownloadedEpisodesFetch()

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

  async function deleteDownloadedEpisode(episode) {
    const episodeDownloadService = new EpisodeDownloadService()

    await episodeDownloadService.deleteDownloadedEpisode(episode)

    await fetchDownloadedEpisodes()
  }

  return (
    <Layout>
      <PageTitle>Meus Downloads</PageTitle>

      <FlatList
        refreshing={isFetching}
        onRefresh={fetchDownloadedEpisodes}
        keyExtractor={(podcastData) => podcastData.episode.id}
        data={downloadedEpisodes}
        ItemSeparatorComponent={<Divider />}
        renderItem={({ item: podcastData }) => (
          <PodcastEpisodeItemList
            channel={podcastData.channel}
            episode={podcastData.episode}
            onDeleteDownloadedEpisode={() => deleteDownloadedEpisode(podcastData.episode)}
            onEpisodePlay={() => playPodcastEpisode(podcastData.channel, podcastData.episode)}
            onOpenEpisodePage={() => openEpisodePage(podcastData.channel, podcastData.episode)}
          />
        )
        }
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
