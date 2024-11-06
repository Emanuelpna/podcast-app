import { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import { Divider } from 'react-native-paper';

import * as S from './styles';

export function PlaylistListItem({ playlist }) {
  const firstCovers = useMemo(
    () =>
      playlist.episodes
        .filter((episode) => episode.banner)
        .slice(0, 3)
        .map((episode) => episode.banner),
    [playlist]
  );

  return (
    <>
      <S.Container>
        <S.Title>{playlist.title}</S.Title>

        <View style={{ width: 100, height: 72 }}>
          {firstCovers.map((cover, index) => (
            <S.Cover index={index} source={{ uri: cover }} />
          ))}
        </View>
      </S.Container>

      <Divider />
    </>
  );
}
