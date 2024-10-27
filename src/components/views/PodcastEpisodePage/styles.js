import styled from 'styled-components/native';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Content = styled.View`

`;

export const Title = styled.Text`
  color: ${colors.text.main};
  font-size: ${fonts.fontSize.xl};
  font-weight: ${fonts.fontWeight.bold};
  font-family: ${fonts.fontFamily.heading};
`;

export const Date = styled.Text`
  color: ${colors.text[300]};
  font-size: ${fonts.fontSize.sm};
  font-weight: ${fonts.fontWeight.normal};
  font-family: ${fonts.fontFamily.body};
`;

export const Description = styled.Text`
  color: ${colors.text[400]};
  font-size: ${fonts.fontSize.sm};
  font-weight: ${fonts.fontWeight.normal};
  font-family: ${fonts.fontFamily.body};
`;
