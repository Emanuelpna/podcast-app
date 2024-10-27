import styled from 'styled-components/native';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Container = styled.View`
  padding: 8px;
  gap: 8px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${colors.text.main};
  font-size: ${fonts.fontSize.xl};
  line-height: ${fonts.fontSize.xl};
  font-weight: ${fonts.fontWeight.bold};
`;

export const Artist = styled.Text`
  text-align: center;
  color: ${colors.accent.main};
  font-size: ${fonts.fontSize.base};
  line-height: ${fonts.fontSize.base};
  font-weight: ${fonts.fontWeight.bold};
`;
