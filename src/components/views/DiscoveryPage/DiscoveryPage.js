import { FlatList } from 'react-native';

import { Navigations } from '../../../data/Navigations';
import { useLatestsEpisodes } from '../../../data/hooks/podcast/useLatestsEpisodes';
import { EpisodeDownloadService } from '../../../data/services/EpisodeDownloadService';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Layout } from '../../commons/Layout/Layout';
import { PageTitle } from '../../commons/PageTitle/PageTitle';
import { MiniPlayer } from '../../player/MiniPlayer/MiniPlayer';
import { PodcastEpisodeCard } from '../../podcasts/PodcastEpisodeCard/PodcastEpisodeCard';


export function DiscoveryPage({ navigation }) {
  const { isPlaying, currentTrack, play, pause, loadTrackIntoPlayer } =
    useTrackPlayer();

  const {
    isSearching,
    latestsEpisodes,
    getLatestsEpisodes,
  } = useLatestsEpisodes()

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

  async function downloadEpisode(episode) {
    const episodeDownloadService = new EpisodeDownloadService()

    await episodeDownloadService.startDownload(episode)
  }

  return (
    <Layout>
      <PageTitle>Últimos Episódios</PageTitle>

      <FlatList
        refreshing={isSearching}
        onRefresh={getLatestsEpisodes}
        data={latestsEpisodes}
        contentContainerStyle={{ gap: 12 }}
        keyExtractor={(item) => item.episode.id}
        renderItem={({ item }) => (
          <PodcastEpisodeCard
            episode={item.episode}
            channel={item.channel}
            onEpisodePlay={() => playPodcastEpisode(item.channel, item.episode)}
            onOpenEpisodePage={() => openEpisodePage(item.channel, item.episode)}
            onDownloadEpisode={() => downloadEpisode(item.episode)}
          />
        )}
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
