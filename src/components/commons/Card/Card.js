import * as S from './styles';

export function Card({ children, onPress }) {
  return (
    <S.Container elevation={2} onPress={onPress}>
      {children}
    </S.Container>
  );
}
