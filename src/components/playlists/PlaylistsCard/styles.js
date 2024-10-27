import styled from 'styled-components/native';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Container = styled.View`
  height: 100px;
  padding: 12px;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
`;

export const Title = styled.Text`
  color: ${colors.primary.main};
  font-size: ${fonts.fontSize['xl']};
  font-weight: ${fonts.fontWeight.bold};
  font-family: ${fonts.fontFamily.heading};
`;

export const CoverContainer = styled.View`
  width: 72px;
  height: 72px;
  border-radius: 12px;  
`;

export const Cover = styled.Image`
  border-radius: 12px;
  position: absolute;
  width: ${(props) => props?.index >= 0 && `${72 - (props.index * 8)}px`};
  height: ${(props) => props?.index >= 0 && `${72 - (props.index * 8)}px`};
  top: ${(props) => props?.index >= 0 && `${5 * props.index}px`};
  left: ${(props) => props?.index >= 0 && `${16 * props.index}px`};
  z-index: ${(props) => props?.index >= 0 && `${100 - props.index * 2}`};
`;
