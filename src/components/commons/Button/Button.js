import * as S from './styles';

export function Button({ children, onPress, variant, icon }) {
  return (
    <S.Wrapper onPress={onPress} variant={variant}>
      <S.Container>
        {icon && (
          <S.IconWrapper>
            {icon}
          </S.IconWrapper>
        )}

        <S.Text>{children}</S.Text>
      </S.Container>
    </S.Wrapper>
  );
}
