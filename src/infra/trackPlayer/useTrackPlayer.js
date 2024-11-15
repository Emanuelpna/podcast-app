import { createContext, useState, useContext } from 'react';
import { Audio } from 'expo-av';

import { LoggingService } from '../../data/services/LoggingService';
import { EpisodeDownloadService } from '../../data/services/EpisodeDownloadService';

const TrackPlayerContext = createContext();

export const TrackPlayerProvider = ({ children }) => {
  /** @type {[Audio.Sound?, React.Dispatch<Audio.Sound>]} state */
  const [playbackObject, setPlaybackObject] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

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
    if (currentTrack?.id === podcastEpisode.id) return;

    if (currentTrack !== null || playbackObject !== null) {
      await playbackObject.unloadAsync();
    }

    const episodeDownloadService = new EpisodeDownloadService(podcastEpisode)

    const episodeLocalFilePath = await episodeDownloadService.getDownloadedEpisodeFilePath(podcastEpisode)

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
      shouldDuckAndroid: false
    });

    const { sound } = await Audio.Sound.createAsync(
      { uri: episodeLocalFilePath ? episodeLocalFilePath : podcastEpisode.audioFile.url },
      { shouldPlay: true }
    );

    currentPlaybackRateIndex = 1

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

    LoggingService.log('Play');

    return playbackObject.playAsync();
  }

  function pause() {
    if (!playbackObject) return;

    LoggingService.log('Pause');

    return playbackObject.pauseAsync();
  }

  async function goToTrackPosition(progress) {
    if (!playbackObject) return;

    const newPosition = progress * duration

    LoggingService.log('Go To TrackPosition: ', newPosition);

    setIsLoading(true);

    await playbackObject.playFromPositionAsync(newPosition)

    setIsLoading(false)
  }

  async function fowardsBySeconds(seconds) {
    if (!playbackObject) return;

    const newPosition = position + (seconds * 1000)

    LoggingService.log('Forward To TrackPosition: ', newPosition);

    setIsLoading(true);

    await playbackObject.playFromPositionAsync(newPosition)

    setIsLoading(false)
  }

  async function backwardsBySeconds(seconds) {
    if (!playbackObject) return;

    const newPosition = position - (seconds * 1000)

    LoggingService.log('Backwards To TrackPosition: ', newPosition);

    setIsLoading(true);

    await playbackObject.playFromPositionAsync(newPosition)

    setIsLoading(false)
  }

  async function setAudioRate(rate) {
    if (!playbackObject) return;

    setIsLoading(true);

    LoggingService.log('Set Track Playback Rate To: ', rate);

    await playbackObject.setRateAsync(rate)

    setIsLoading(false)
  }

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
    setAudioRate,
    fowardsBySeconds,
    goToTrackPosition,
    backwardsBySeconds,
    changeTrackPlayerVolume,
  };
}
