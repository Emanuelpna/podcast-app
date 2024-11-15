import { View, Text } from 'react-native';

import { PlayerTitle } from '../PlayerTitle/PlayerTitle';
import { PlayerControls } from '../PlayerControls/PlayerControls';
import { PlayerCoverImage } from '../PlayerCoverImage/PlayerCoverImage';

import * as S from './styles';

export function Player({
  title,
  artist,
  cover,
  duration,
  elapsedTime,
  currentTrackProgress,
  isPlaying,
  isLoading,
  onCoverPress,
  onTogglePlayPause,
  onTrackProgressChange,
  onBackwardsBySeconds,
  onForwardsBySeconds,
  onCyclePlaybackRate
}) {
  return (
    <S.Container>
      <S.Header>
        <PlayerCoverImage cover={cover} onCoverPress={onCoverPress} />

        <PlayerTitle title={title} artist={artist} />
      </S.Header>

      <PlayerControls
        duration={duration}
        elapsedTime={elapsedTime}
        currentTrackProgress={currentTrackProgress}
        isPlaying={isPlaying}
        isLoading={isLoading}
        onTogglePlayPause={onTogglePlayPause}
        onForwardsBySeconds={onForwardsBySeconds}
        onBackwardsBySeconds={onBackwardsBySeconds}
        onTrackProgressChange={onTrackProgressChange}
        onCyclePlaybackRate={onCyclePlaybackRate}
      />
    </S.Container>
  );
}
