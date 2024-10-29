import styled from 'styled-components/native';
import { TextInput as PaperTextInput } from 'react-native-paper';

import { colors } from '../../../styles/colors'

export const Input = styled(PaperTextInput)`
  flex: 1;
  margin: 6px;

  background-color: ${colors.background[800]};
`;
