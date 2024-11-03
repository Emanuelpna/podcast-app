import { colors } from '../../../styles/colors';
import * as S from './styles';

export function IconButton({
  icon,
  mode,
  size,
  isHollowed,
  isDisabled,
  onButtonPress,
}) {
  return (
    <S.IconButton
      mode={mode}
      size={size}
      disabled={isDisabled}
      isHollowed={isHollowed}
      onPress={onButtonPress}
      containerColor={colors.accent.main}
    >
      <>
        {icon}
      </>
    </S.IconButton>
  );
}
