import styled, { css } from 'styled-components/native';
import { IconButton as PaperIconButton } from 'react-native-paper';

import { colors } from '../../../styles/colors';

export const IconButton = styled(PaperIconButton)` 
  background-color: ${colors.accent.main};
  transition: 100ms ease-in-out;

  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isHollowed &&
    css`
        background-color: none;
      `}
`;
