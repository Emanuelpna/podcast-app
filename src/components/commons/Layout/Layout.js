import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../../styles/colors';

export const Layout = styled(SafeAreaView)`
  flex: 1;
  padding: 12px 16px 0 16px;
  justify-content: flex-start;
  background-color: ${colors.background.main};
`;
