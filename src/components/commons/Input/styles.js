import styled from 'styled-components/native';
import { TextInput as PaperTextInput } from 'react-native-paper';

import {colors} from '../../../styles/colors'

export const Input = styled(PaperTextInput)`
  margin: 6px;
  color: #fff;
  background-color: ${colors.background[800]};
`;
