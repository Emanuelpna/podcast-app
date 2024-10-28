import { Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { useDateToPrettyString } from '../../../data/hooks/useDateToPrettyString';

import { Button } from '../../commons/Button/Button';
import { IconButton } from '../../commons/IconButton/IconButton';

import * as S from './styles';
import { colors } from '../../../styles/colors';

export function PodcastEpisodeCard({
  channel,
  episode,
  onOpenEpisodePage,
  onEpisodePlay,
}) {
  const publishDate = useDateToPrettyString(episode.publishDate);

  return (
    <S.Container onPress={onOpenEpisodePage}>
      <S.CoverImage
        source={{
          uri: episode.banner ? episode.banner : channel.logo,
        }}
      />

      <View style={{ flex: 1, flexWrap: 'nowrap', flexDirection: 'column' }}>
        <S.Header>
          <S.EpisodeTitle numberOfLines={2}>{episode.title}</S.EpisodeTitle>

          <S.EpisodeDuration>
            {channel.title} &#x2022; {publishDate}
          </S.EpisodeDuration>
        </S.Header>

        <View
          style={{
            flex: 1,
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Button
            onPress={() => onEpisodePlay(episode.id)}
            icon={() => (
              <FontAwesome6 name="play" size={14} color={colors.text[800]} />
            )}>
            <Text>Play</Text>
          </Button>

          <View
            style={{
              flexWrap: 'nowrap',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <IconButton
              size={20}
              isHollowed
              onButtonPress={() => onEpisodePlay(episode.id)}
              icon={({ color }) => (
                <Feather name="download-cloud" size={18} color={color} />
              )}
            />

            <IconButton
              size={20}
              isHollowed
              onButtonPress={() => onEpisodePlay(episode.id)}
              icon={({ color }) => (
                <FontAwesome6 name="heart" size={18} color={color} />
              )}
            />
          </View>
        </View>
      </View>
    </S.Container>
  );
}
