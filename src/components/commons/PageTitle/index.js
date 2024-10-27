import styled from 'styled-components/native';
import { Divider as PaperDivider } from 'react-native-paper';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Container = styled.View`
  margin-bottom: 28px;
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  color: ${colors.text.main};
  font-size: ${fonts.fontSize['2xl']};
  font-weight: ${fonts.fontWeight.bold};
`;

export const Divider = styled(PaperDivider)`
  height: 1px;
  background-color: ${colors.background[700]};
`;
