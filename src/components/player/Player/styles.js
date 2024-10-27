import styled from 'styled-components/native';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

export const Header = styled.View` 
  width: 100%;
  height: 480px;
  padding: 12px;
  aspect-ratio: 1 / 1;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 12px;
`;
