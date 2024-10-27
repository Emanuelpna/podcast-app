import { Text, Linking, View, FlatList } from 'react-native';
import { Avatar } from 'react-native-paper';

import { Navigations } from '../../../data/Navigations';

import { useFetchRSSFeed } from '../../../infra/feedRSS/useFetchRSSFeed';
import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { PodcastChannelBio } from '../../podcasts/PodcastChannelBio/PodcastChannelBio';
import { PodcastEpisodeCard } from '../../podcasts/PodcastEpisodeCard/PodcastEpisodeCard';

import { Card } from '../../commons/Card/Card';
import { Button } from '../../commons/Button/Button';
import { Layout } from '../../commons/Layout/Layout';
import { Loading } from '../../commons/Loading/Loading';

export function PodcastFeedPage({ route, navigation }) {
  const { podcastChannelUrl } = route.params;

  const { channel, mostRecentEpisodes, isLoading } =
    useFetchRSSFeed(podcastChannelUrl);

  const { loadTrackIntoPlayer } = useTrackPlayer();

  function playPodcastEpisode(episode) {
    Navigations.navigateToPlayerPage(
      navigation,
      loadTrackIntoPlayer,
      channel,
      episode
    );
  }

  function openEpisodePage(episodeId) {
    Navigations.navigateToPodcastEpisodePage(
      navigation,
      channel,
      getEpisodeByID(episodeId)
    );
  }

  function getEpisodeByID(id) {
    return mostRecentEpisodes.find((episode) => episode.id === id);
  }

  if (isLoading || !channel) return <Loading />;

  return (
    <Layout>
      <PodcastChannelBio channel={channel} />

      <View style={{ height: 50 }}></View>

      <FlatList
        data={mostRecentEpisodes}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item: episode }) => (
          <PodcastEpisodeCard
            channel={channel}
            episode={episode}
            onEpisodePlay={() => playPodcastEpisode(episode)}
            onOpenEpisodePage={() => openEpisodePage(episode.id)}
          />
        )}
      />
    </Layout>
  );
}
