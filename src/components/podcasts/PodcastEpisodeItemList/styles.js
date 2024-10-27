import styled from 'styled-components/native';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Container = styled.Pressable`
  padding: 6px 0;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;  
`;

export const CoverImage = styled.Image`
  width: 100%;  
  aspect-ratio: 1 / 1;
`;

export const EpisodeTitle = styled.Text`
  color: ${colors.text.main};
  font-size: ${fonts.fontSize.sm};
  font-weight: ${fonts.fontWeight.bold};
  font-family: ${fonts.fontFamily.heading};
`;

export const EpisodeSubtitle = styled.Text`
  color: ${colors.text[300]};
  font-size: ${fonts.fontSize.xsm};
  font-weight: ${fonts.fontWeight.normal};
  font-family: ${fonts.fontFamily.body};
`;
