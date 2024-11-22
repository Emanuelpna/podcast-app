import { Image } from 'expo-image';
import styled from 'styled-components/native';
import { Surface, TextInput as PaperTextInput } from 'react-native-paper';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  padding: 48px 8px;
`;

export const LogoWrapper = styled(Surface)`
  align-self: center;
  width: 150px;
  height: 150px;
  border-radius: 48px;
`;

export const Logo = styled(Image)`
  align-self: center;
  width: 150px;
  height: 150px;
`;


export const Paragraph = styled.Text`
  margin: 24px;
  font-weight: bold;
  text-align: center;
  color: ${colors.text.main};
  font-size: ${fonts.fontSize.base};
  font-weight: ${fonts.fontWeight.bold};
`;

export const Input = styled(PaperTextInput)`
  margin: 6px;
`;
