import * as S from './styles';

export function SearchBar({ placeholder }) {
  return (
    <>
      <S.Searchbar
        elevation={2}
        placeholder={placeholder}
        inputStyle={S.inputStyles}
      />
    </>
  );
}
