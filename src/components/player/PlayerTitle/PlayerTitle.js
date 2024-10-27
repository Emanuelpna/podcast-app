import * as S from './styles';

export function PlayerTitle({ title, artist }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      
      <S.Artist>{artist}</S.Artist>
    </S.Container>
  );
}
