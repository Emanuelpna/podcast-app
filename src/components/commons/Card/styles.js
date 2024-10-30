import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

import { colors } from '../../../styles/colors';

export const Container = styled(Card)`
  padding: 6px;
  height: fit-content;
  border: 1px solid ${colors.background[700]};
  background-color: ${colors.background[800]};
`;
