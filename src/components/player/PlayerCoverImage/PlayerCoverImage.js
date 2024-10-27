import { Pressable } from 'react-native';

import * as S from './styles';

export function PlayerCoverImage({ cover, onCoverPress }) {
  return (
    <Pressable onPress={onCoverPress} style={{ flex: 1 }}>
      <S.CoverContainer elevation={4}>
        <S.CoverImage source={{ uri: cover }} />
      </S.CoverContainer>
    </Pressable>
  );
}
