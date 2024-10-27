import * as S from './styles';

export function Button({ children, onPress, variant, icon }) {
  return (
    <S.Container icon={icon} onPress={onPress} variant={variant}>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
}
