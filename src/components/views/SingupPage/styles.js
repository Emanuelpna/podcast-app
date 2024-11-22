import styled from 'styled-components/native';
import { TextInput as PaperTextInput } from 'react-native-paper';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #080809;
  padding: 8px;
`;

export const Paragraph = styled.Text`
  margin: 24px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ecf0f1;
`;

export const Input = styled(PaperTextInput)`
  margin: 6px;
`;
