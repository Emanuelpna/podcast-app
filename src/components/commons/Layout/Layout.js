import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../../styles/colors';

export const Layout = styled(SafeAreaView)`
  padding: 16px;
  padding-bottom: 0;
  flex: 1;
  justify-content: flex-start;
  background-color: ${colors.background.main};
`;
