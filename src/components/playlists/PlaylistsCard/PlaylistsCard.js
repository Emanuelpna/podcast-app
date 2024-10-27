import { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import { Chip } from 'react-native-paper';

import { Card } from '../../commons/Card/Card';

import * as S from './styles';

export function PlaylistsCard({ playlist }) {
  const firstCovers = useMemo(
    () =>
      playlist.episodes
        .filter((episode) => episode.banner)
        .slice(0, 3)
        .map((episode) => episode.banner),
    [playlist]
  );

  return (
    <Card>
      <S.Container>
        <View style={{ flex: 1, gap: 8 }}>
          {playlist.category && (
            <Chip
              icon="shimmer"
              style={{ width: 128, padding: 0 }}
              textStyle={{ fontSize: 10, marginVertical: 0 }}>
              {playlist.category}
            </Chip>
          )}

          <S.Title>{playlist.title}</S.Title>
        </View>

        <View style={{ width: 100, height: 72 }}>
          {firstCovers.map((cover, index) => (
            <S.Cover index={index} source={{ uri: cover }} />
          ))}
        </View>
      </S.Container>
    </Card>
  );
}
