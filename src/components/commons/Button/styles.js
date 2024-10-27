import styled, { css } from 'styled-components/native';
import { Text as NativeText } from 'react-native';
import { Button } from 'react-native-paper';

import { colors } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export const Container = styled(Button)`
  padding: 0 6px;  
  margin: 12px 0;
  line-height: 1.2;
  border-radius: 12px;
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
`;

export const Text = styled(NativeText)`
  color: ${colors.text[900]};
  font-family: ${fonts.fontFamily.body};
  font-weight: ${fonts.fontWeight.normal};
`;
