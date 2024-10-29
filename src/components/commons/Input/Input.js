import { colors } from '../../../styles/colors';
import * as S from './styles';

export function Input({
  label,
  value,
  inputMode,
  placeholder,
  autoComplete,
  onChangeText,
}) {
  return (
    <S.Input
      label={label}
      value={value}
      inputMode={inputMode}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChangeText={onChangeText}
      textColor={colors.text.main}
    />
  );
}
