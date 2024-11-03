import { useState } from 'react';
import { View, Image, ScrollView, useWindowDimensions } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { useTrackPlayer } from '../../../infra/trackPlayer/useTrackPlayer';

import { Layout } from '../../commons/Layout/Layout';
import { IconButton } from '../../commons/IconButton/IconButton';

import * as S from './styles';
import { colors } from '../../../styles/colors';
import { Navigations } from '../../../data/Navigations';

export function PodcastEpisodePage({ route, navigation }) {
  const { channel, episode } = route.params;

  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const { width } = useWindowDimensions();
  const { loadTrackIntoPlayer } = useTrackPlayer();

  function playPodcastEpisode() {
    Navigations.navigateToPlayerPage(navigation, loadTrackIntoPlayer, channel, episode)
  }

  return (
    <Layout>
      <Image
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: width,
          aspectRatio: '1 / 1',
        }}
        source={{
          uri: episode.banner,
        }}
        onLayout={(event) => {
          setImageSize({
            width: event.nativeEvent.layout.width,
            height: event.nativeEvent.layout.height,
          });
        }}
      />

      <S.Content style={{ marginTop: imageSize.width }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: 16,
          }}>
          <View style={{ flex: 1, flexDirection: 'column', gap: 3 }}>
            <S.Title>{episode.title}</S.Title>

            <S.Date>{episode.publishDate}</S.Date>
          </View>

          <IconButton
            size={56}
            onButtonPress={playPodcastEpisode}
            icon={
              <FontAwesome6
                name="play"
                size={24}
                color={colors.text[300]}
                style={{ marginLeft: 3 }}
              />
            }
          />
        </View>

        <View style={{ marginVertical: 12 }} />

        <ScrollView style={{ maxHeight: 320 }}>
          <S.Description>{episode.description}</S.Description>
        </ScrollView>
      </S.Content>
    </Layout>
  );
}
