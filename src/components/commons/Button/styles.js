import styled, { css } from 'styled-components/native';
import { Text as NativeText } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import { colors } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export const Wrapper = styled(TouchableRipple)`
  margin-top: 12px;
  padding: 10px 18px;
  border-radius: 16px;
  text-transform: initial;
  background-color: ${colors.primary.main};

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${colors.secondary.main};
    `
  }

  ${({ variant }) =>
    variant === 'accent' &&
    css`
      background-color: ${colors.accent.main};
    `
  }

  ${({ variant }) =>
    variant === 'hollow' &&
    css`
      background-color: none;
    `
  }
`;

export const Container = styled.View`
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const IconWrapper = styled.View`
  margin-bottom: 2px;
`

export const Text = styled(NativeText)`
  flex: 1;
  text-align: center;
  color: ${colors.text[900]};
  font-size: ${fonts.fontSize.base};
  line-height: ${fonts.fontSize.xl};
  font-family: ${fonts.fontFamily.body};
  font-weight: ${fonts.fontWeight.normal};

  ${({ variant }) =>
    variant === 'hollow' &&
    css`
      color: ${colors.text.main};
      font-weight: ${fonts.fontWeight.bold};
    `
  }
`;
