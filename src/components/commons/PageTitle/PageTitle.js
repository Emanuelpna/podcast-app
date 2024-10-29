import { View } from 'react-native';

import * as S from './index';

export function PageTitle({ children, rightSideSlot }) {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Title>{children}</S.Title>

        <View>
          {rightSideSlot}
        </View>
      </S.ContentWrapper>

      <S.Divider />
    </S.Container>
  );
}
