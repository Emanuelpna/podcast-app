import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { useTimeToToPrettySecondsString } from '../../../data/hooks/commons/useTimeToToPrettySecondsString';

import { IconButton } from '../../commons/IconButton/IconButton';

import { colors } from '../../../styles/colors';

import * as S from './styles';

export function PlayerControls({
  duration,
  elapsedTime,
  currentTrackProgress,
  isPlaying,
  isLoading,
  onTogglePlayPause,
  onTrackProgressChange,
  onBackwardsBySeconds,
  onForwardsBySeconds,
  onCyclePlaybackRate
}) {
  const formatDurationTime = useTimeToToPrettySecondsString(duration);
  const formatElapsedTime = useTimeToToPrettySecondsString(elapsedTime / 1000);

  return (
    <S.Container>
      <View>
        <S.PodcastProgressBar
          value={currentTrackProgress}
          minimumValue={0}
          maximumValue={1}
          thumbStyle={styles.thumb}
          thumbTintColor={colors.accent.main}
          minimumTrackTintColor={colors.accent.main}
          maximumTrackTintColor={colors.background[800]}
          onValueChange={onTrackProgressChange}
        />

        <S.PodcastDurationRow>
          <S.PodcastDurationText>{formatElapsedTime}</S.PodcastDurationText>

          <S.PodcastDurationText>{formatDurationTime}</S.PodcastDurationText>
        </S.PodcastDurationRow>
      </View>

      <S.ControlsButtonsRow>
        <IconButton
          isHollowed
          mode="default"
          icon={
            <S.Icon name="backward-step" size={22} color={colors.text.main} />
          }
          onButtonPress={() => console.log('Pressed')}
        />

        <IconButton
          isHollowed
          mode="default"
          icon={
            <S.IconMaterial name="rewind-15" size={22} color={colors.text.main} />
          }
          onButtonPress={onBackwardsBySeconds}
        />

        <IconButton
          size={56}
          mode="contained"
          isDisabled={isLoading}
          onButtonPress={onTogglePlayPause}
          icon={
            isLoading ? (
              <ActivityIndicator animating={true} color={colors.text.main} />
            ) : (
              <S.Icon
                size={32}
                color={colors.text.main}
                name={isPlaying ? 'pause' : 'play'}
                style={{ marginLeft: isPlaying ? 0 : 4 }}
              />
            )
          }
        />

        <IconButton
          isHollowed
          mode="default"
          icon={
            <S.IconMaterial name="fast-forward-30" size={22} color={colors.text.main} />
          }
          onButtonPress={onForwardsBySeconds}
        />

        <IconButton
          isHollowed
          mode="default"
          icon={
            <S.Icon name="forward-step" size={22} color={colors.text.main} />
          }
          onButtonPress={() => console.log('Pressed')}
        />
      </S.ControlsButtonsRow>

      <View style={{ height: 16 }} />

      <S.ControlsButtonsRow>
        <IconButton
          isHollowed
          mode="default"
          icon={
            <S.Icon name="shuffle" size={22} color={colors.text.main} />
          }
          onButtonPress={() => console.log('Pressed')}
        />

        <IconButton
          isHollowed
          mode="default"
          icon={<S.Icon name="list" size={22} color={colors.text.main} />}
          onButtonPress={() => console.log('Pressed')}
        />

        <IconButton
          isHollowed
          mode="default"
          icon={
            <S.Icon name="gauge-high" size={22} color={colors.text.main} />
          }
          onButtonPress={onCyclePlaybackRate}
        />

        <IconButton
          isHollowed
          mode="default"
          icon={
            <S.Icon name="heart" solid={false} size={22} color={colors.text.main} />
          }
          onButtonPress={() => console.log('Pressed')}
        />
      </S.ControlsButtonsRow>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  thumb: {
    width: 12,
    height: 12,
    backgroundColor: colors.accent.main,
  },
});
