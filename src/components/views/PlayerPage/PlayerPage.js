import { Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { ActivityIndicator } from 'react-native-paper';

import { Navigations } from '../../../data/Navigations';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Player } from '../../player/Player/Player';

import { Layout } from '../../commons/Layout/Layout';

export function PlayerPage({ navigation }) {
  const {
    isLoading,
    isPlaying,
    currentTrack,
    play,
    pause,
    trackElapsedTime,
    trackRemainingTime,
    trackPlayingProgress,
    goToTrackPosition,
  } = useTrackPlayer();

  function openEpisodePage() {
    Navigations.navigateToPodcastEpisodePage(
      navigation,
      currentTrack.channel,
      currentTrack.episode
    );
  }

  async function onChange(newProgressValue) {
    goToTrackPosition(newProgressValue);
  }

  function togglePlayPause() {
    if (isPlaying) pause();
    else play();
  }

  return (
    <Layout>
      {isLoading && <ActivityIndicator animating={true} color="red" />}

      <Player
        title={currentTrack?.title}
        artist={currentTrack?.artist}
        cover={currentTrack?.artwork}
        currentTrackProgress={trackPlayingProgress}
        duration={currentTrack.duration}
        elapsedTime={trackElapsedTime}
        isPlaying={isPlaying}
        isLoading={isLoading}
        onTogglePlayPause={togglePlayPause}
        onTrackProgressChange={onChange}
        onCoverPress={openEpisodePage}
      />
    </Layout>
  );
}
