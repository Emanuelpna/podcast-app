import { View } from 'react-native';
import { Divider } from 'react-native-paper';

import * as S from './index';

export function PageTitle({ children }) {
  return (
    <S.Container>
      <S.Title>{children}</S.Title>

      <S.Divider />
    </S.Container>
  );
}
