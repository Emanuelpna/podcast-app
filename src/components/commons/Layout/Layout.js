import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../../styles/colors';

export const Layout = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-start;
  background-color: ${colors.background.main};
  padding: 32px 16px;
  padding-bottom: 0;
`;
