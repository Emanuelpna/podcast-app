import styled from 'styled-components/native';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Container = styled.Pressable`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${colors.accent.main};
  background-color: ${colors.background[900]};
`;

export const CoverImage = styled.Image`
  width: 50px;
  height: 50px;
  aspect-ratio: 1 / 1;
`;

export const EpisodeTitle = styled.Text`
  color: ${colors.text.main};
  font-size: ${fonts.fontSize.sm};
  font-weight: ${fonts.fontWeight.bold};
  font-family: ${fonts.fontFamily.heading};
`;

export const EpisodeSubtitle = styled.Text`
  color: ${colors.text[400]};
  font-size: ${fonts.fontSize.sm};
  font-family: ${fonts.fontFamily.body};
`;
