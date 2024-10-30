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
          icon={({ color }) => (
            <S.Icon name="backward-step" size={22} color={color} />
          )}
          onButtonPress={() => console.log('Pressed')}
        />

        <IconButton
          isHollowed
          mode="default"
          icon={({ color }) => (
            <S.Icon name="rotate-left" size={22} color={color} />
          )}
          onButtonPress={() => console.log('Pressed')}
        />

        <IconButton
          size={56}
          mode="contained"
          isDisabled={isLoading}
          onButtonPress={onTogglePlayPause}
          icon={({ color }) =>
            isLoading ? (
              <ActivityIndicator animating={true} color={color} />
            ) : (
              <S.Icon
                size={32}
                color={color}
                name={isPlaying ? 'pause' : 'play'}
                style={{ marginLeft: isPlaying ? 0 : 4 }}
              />
            )
          }
        />

        <IconButton
          isHollowed
          mode="default"
          icon={({ color }) => (
            <S.Icon name="rotate-right" size={22} color={color} />
          )}
          onButtonPress={() => console.log('Pressed')}
        />

        <IconButton
          isHollowed
          mode="default"
          icon={({ color }) => (
            <S.Icon name="forward-step" size={22} color={color} />
          )}
          onButtonPress={() => console.log('Pressed')}
        />
      </S.ControlsButtonsRow>

      <S.ControlsButtonsRow>
        <IconButton
          isHollowed
          mode="default"
          icon={({ color }) => (
            <S.Icon name="shuffle" size={22} color={color} />
          )}
          onButtonPress={() => console.log('Pressed')}
        />

        <IconButton
          isHollowed
          mode="default"
          icon={({ color }) => <S.Icon name="list" size={22} color={color} />}
          onButtonPress={() => console.log('Pressed')}
        />

        <IconButton
          isHollowed
          mode="default"
          icon={({ color }) => (
            <S.Icon name="gauge-high" size={22} color={color} />
          )}
          onButtonPress={() => console.log('Pressed')}
        />

        <IconButton
          isHollowed
          mode="default"
          icon={({ color }) => (
            <S.Icon name="heart" solid={false} size={22} color={color} />
          )}
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
