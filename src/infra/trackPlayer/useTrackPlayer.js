import { createContext, useState, useContext } from 'react';
import { Audio } from 'expo-av';

const TrackPlayerContext = createContext();

export const TrackPlayerProvider = ({ children }) => {
  /** @type {[Audio.Sound?, React.Dispatch<Audio.Sound>]} state */
  const [playbackObject, setPlaybackObject] = useState(undefined);
  const [currentTrack, setCurrentTrack] = useState();

  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentVolume, setCurrentVolume] = useState(0);

  return (
    <TrackPlayerContext.Provider
      value={{
        playbackObject,
        setPlaybackObject,
        currentTrack,
        setCurrentTrack,
        duration,
        setDuration,
        position,
        setPosition,
        currentVolume,
        setCurrentVolume,
        isLoading,
        setIsLoading,
        isPlaying,
        setIsPlaying,
      }}>
      {children}
    </TrackPlayerContext.Provider>
  );
};

export default TrackPlayerContext;

export function useTrackPlayer() {
  const {
    playbackObject,
    setPlaybackObject,
    currentTrack,
    setCurrentTrack,
    duration,
    setDuration,
    position,
    setPosition,
    currentVolume,
    setCurrentVolume,
    isLoading,
    setIsLoading,
    isPlaying,
    setIsPlaying,
  } = useContext(TrackPlayerContext);

  const trackElapsedTime = position;
  const trackRemainingTime = duration - position;

  const trackPlayingProgress = duration > 0 ? position / duration : 0;

  async function loadTrackIntoPlayer(podcastChannel, podcastEpisode) {
    if (currentTrack && currentTrack.id === podcastEpisode.id) return;

    if (currentTrack) {
      await playbackObject.unloadAsync();
    }

    const track = {
      id: podcastEpisode.id,
      url: podcastEpisode.audioFile.url,
      title: podcastEpisode.title,
      artist: podcastChannel.title,
      duration: podcastEpisode.duration,
      contentType: podcastEpisode.audioFile.fileType,
      artwork: podcastEpisode.banner
        ? podcastEpisode.banner
        : podcastChannel.logo,
      channel: podcastChannel,
      episode: podcastEpisode,
    };

    await Audio.setAudioModeAsync({
      staysActiveInBackground: true,
    });

    const { sound } = await Audio.Sound.createAsync(
      { uri: podcastEpisode.audioFile.url },
      { shouldPlay: true }
    );

    sound.setOnPlaybackStatusUpdate((status) => {
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
      setIsLoading(status.isBuffering);
      setIsPlaying(status.isPlaying);
    });

    setPlaybackObject(sound);
    setCurrentTrack(track);
    setIsPlaying(true);
  }

  function changeTrackPlayerVolume(volume) {
    if (!playbackObject) return;

    return playbackObject.setVolumeAsync(volume);
  }

  function play() {
    if (!playbackObject) return;

    console.log('Play :>> ');

    return playbackObject.playAsync();
  }

  function pause() {
    if (!playbackObject) return;

    console.log('Pause :>> ');


    return playbackObject.pauseAsync();
  }

  async function goToTrackPosition(progress) {
    if (!playbackObject) return;

    console.log('GoToTrackPosition :>> ');

    setIsLoading(true);

    playbackObject
      .playFromPositionAsync(progress * duration)
      .then(() => setIsLoading(false));
  }

  // function fowardsBySeconds(seconds) {
  //   if (!playbackObject) return;

  //   return TrackPlayer.seekBy(seconds);
  // }

  // function backwardsBySeconds(seconds) {
  //   if (!playbackObject) return;

  //   return TrackPlayer.seekBy(-seconds);
  // }

  return {
    isLoading,
    isPlaying,
    currentTrack,
    currentVolume,
    trackElapsedTime,
    trackRemainingTime,
    trackPlayingProgress,
    loadTrackIntoPlayer,
    play,
    pause,
    changeTrackPlayerVolume,
    goToTrackPosition,
    // fowardsBySeconds,
    // backwardsBySeconds,
  };
}
