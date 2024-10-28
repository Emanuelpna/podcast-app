import { View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { Navigations } from '../../../data/Navigations';
import { useTimeToToPrettySecondsString } from '../../../data/hooks/useTimeToToPrettySecondsString';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { IconButton } from '../../commons/IconButton/IconButton';

import * as S from './styles';
import { colors } from '../../../styles/colors';

// const currentTrack = {
//   id: 'e5226e8a-b4f3-4f47-aed8-b2060140714a',
//   url: 'https://chtbl.com/track/BC6GF7//pdst.fm/e/traffic.omny.fm/d/clips/651a251e-06e1-47e0-9336-ac5a00f41628/fc243b66-f34c-4656-9042-acd400edcca5/e5226e8a-b4f3-4f47-aed8-b2060140714a/audio.mp3?utm_source=Podcast&amp;in_playlist=d4c8e398-446c-447a-ad41-acd400edccc1',
//   title:
//     'Demolição Digital: O apagamento da memória cultural na Era do Streaming',
//   artist: 'Braincast',
//   duration: 5291,
//   contentType: 'audio/mpeg',
//   artwork:
//     'https://www.omnycontent.com/d/clips/651a251e-06e1-47e0-9336-ac5a00f41628/fc243b66-f34c-4656-9042-acd400edcca5/e5226e8a-b4f3-4f47-aed8-b2060140714a/image.jpg?t=1728674808&amp;size=Large',
//   channel: {},
//   episode: {},
// };

export function MiniPlayer({
  isPlaying,
  currentTrack,
  onOpenPlayerPage,
  onTogglePlayPause,
}) {
  const duration = useTimeToToPrettySecondsString(currentTrack?.duration);

  if (!currentTrack) return null;

  return (
    <S.Container onPress={onOpenPlayerPage}>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <S.CoverImage source={{ uri: currentTrack.artwork }} />
      </View>

      <View
        style={{
          width: '60%',
          justifyContent: 'center',
        }}>
        <S.EpisodeTitle numberOfLines={1} ellipsizeMode="tail">
          {currentTrack.title}
        </S.EpisodeTitle>

        <S.EpisodeSubtitle>
          {currentTrack.artist} &#x2022; {duration}
        </S.EpisodeSubtitle>
      </View>

      <View
        style={{
          width: '20%',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconButton
          size={14}
          onButtonPress={onTogglePlayPause}
          icon={() => (
            <FontAwesome6
              size={14}
              color={colors.text[300]}
              name={isPlaying ? 'pause' : 'play'}
              style={{ marginLeft: isPlaying ? 0 : 2 }}
            />
          )}
        />
      </View>
    </S.Container>
  );
}
