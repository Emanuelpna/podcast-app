import styled, { css } from 'styled-components/native';

import { colors } from '../../../styles/colors';

export const IconButton = styled.Pressable`
  background-color: ${colors.accent.main};
  align-items: center;
  justify-content: center;
  transition: 100ms ease-in-out;
  border-radius: 10000px;

  ${(props) => props.size && css`
    width: ${props.size}px;
    height: ${props.size}px;
  `}

  ${(props) => props.isHollowed && 'background-color: none;'}
`;
