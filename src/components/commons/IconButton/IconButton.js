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
      icon={icon}
      disabled={isDisabled}
      isHollowed={isHollowed}
      onPress={onButtonPress}
    />
  );
}
