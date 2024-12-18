import { useState } from 'react';
import { View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Menu, Divider } from 'react-native-paper';

import { useTimeToToPrettySecondsString } from '../../../data/hooks/commons/useTimeToToPrettySecondsString';

import { IconButton } from '../../commons/IconButton/IconButton';

import * as S from './styles';
import { colors } from '../../../styles/colors';

export function PodcastEpisodeItemList({
  channel,
  episode,
  onOpenEpisodePage,
  onEpisodePlay,
  onDeleteDownloadedEpisode
}) {
  const [menuIsVisible, setMenuisVisible] = useState(false);

  const duration = useTimeToToPrettySecondsString(episode.duration);

  const openMenu = () => setMenuisVisible(true);

  const closeMenu = () => setMenuisVisible(false);

  return (
    <S.Container onPress={onOpenEpisodePage}>
      <View
        style={{
          width: '15%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <S.CoverImage source={{ uri: episode.banner }} />
      </View>

      <View
        style={{
          width: '58%',
          justifyContent: 'center',
        }}>
        <S.EpisodeTitle numberOfLines={2}>
          {episode.title}
        </S.EpisodeTitle>

        <S.EpisodeSubtitle>
          {channel.title} &#x2022; {duration}
        </S.EpisodeSubtitle>
      </View>

      <View
        style={{
          width: '20%',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 12
        }}>

        <IconButton
          size={32}
          onButtonPress={() => onEpisodePlay(episode.id)}
          icon={
            <FontAwesome6
              name="play"
              size={14}
              color={colors.text[300]}
              style={{ marginLeft: 2 }}
            />
          }
        />

        <Menu
          visible={menuIsVisible}
          onDismiss={closeMenu}
          anchorPosition="bottom"
          anchor={
            <IconButton
              size={14}
              isHollowed
              onButtonPress={openMenu}
              icon={
                <FontAwesome6
                  name="ellipsis-vertical"
                  size={14}
                  color={colors.text.main}
                  style={{
                    marginLeft: 3,
                  }}
                />
              }
            />
          }>
          <Menu.Item
            leadingIcon="arrow-top-right-thin"
            onPress={() => { }}
            title="Abrir Canal"
          />
          <Divider />
          <Menu.Item
            leadingIcon="trash-can-outline"
            onPress={() => onDeleteDownloadedEpisode()}
            title="Apagar"
          />
        </Menu>
      </View>
    </S.Container>
  );
}
