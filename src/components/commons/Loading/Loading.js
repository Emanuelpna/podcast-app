import { ActivityIndicator } from 'react-native-paper';

import * as S from './styles'

export function Loading() {
  return (
    <S.Container>
      <ActivityIndicator animating={true} color="#ccc" size={100} />
    </S.Container>
  );
}
