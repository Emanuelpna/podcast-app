import { Navigations } from '../../../data/Navigations';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Player } from '../../player/Player/Player';

import { Layout } from '../../commons/Layout/Layout';

const PLAYBACK_RATES = [0.5, 1.0, 2.0, 3.0]

export function PlayerPage({ navigation }) {
  const {
    isLoading,
    isPlaying,
    currentTrack,
    play,
    pause,
    trackElapsedTime,
    trackPlayingProgress,
    goToTrackPosition,
    fowardsBySeconds,
    backwardsBySeconds,
    setAudioRate
  } = useTrackPlayer();

  let currentPlaybackRateIndex = 1

  function openEpisodePage() {
    Navigations.navigateToPodcastEpisodePage(
      navigation,
      currentTrack.channel,
      currentTrack.episode
    );
  }

  async function onTrackProgressChange(newProgressValue) {
    goToTrackPosition(newProgressValue);
  }

  function togglePlayPause() {
    if (isPlaying) pause();
    else play();
  }

  function cyclePlaybackRate() {
    currentPlaybackRateIndex++

    const rate = PLAYBACK_RATES[currentPlaybackRateIndex % PLAYBACK_RATES.length]

    setAudioRate(rate)
  }

  return (
    <Layout>
      <Player
        title={currentTrack?.title}
        artist={currentTrack?.artist}
        cover={currentTrack?.artwork}
        currentTrackProgress={trackPlayingProgress}
        duration={currentTrack?.duration}
        elapsedTime={trackElapsedTime}
        isPlaying={isPlaying}
        isLoading={isLoading}
        onCoverPress={openEpisodePage}
        onTrackProgressChange={onTrackProgressChange}
        onTogglePlayPause={togglePlayPause}
        onForwardsBySeconds={() => fowardsBySeconds(30)}
        onBackwardsBySeconds={() => backwardsBySeconds(15)}
        onCyclePlaybackRate={cyclePlaybackRate}
      />
    </Layout>
  );
}
