import styled from 'styled-components/native';
import { Badge, Surface } from 'react-native-paper';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Container = styled.Pressable`
  position: realtive;
  gap: 4px;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const CoverContainer = styled(Surface)`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  margin-bottom: 4px;
`;

export const UnseedEpisodesBadge = styled(Badge)`
  position: abolsute;
  top: 0;
  right: 0;
  background-color: ${colors.primary.main};
`;

export const CoverImage = styled.Image`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
`;

export const PodcastTitle = styled.Text`
  width: 100%;
  color: ${colors.text.main};
  font-size:  ${fonts.fontSize.sm};
  font-weight: ${fonts.fontWeight.bold};
  font-family: ${fonts.fontFamily.heading};
  padding: 0 6px;
`;

export const PodcastQuantity = styled.Text`
  width: 100%;
  color: ${colors.text[400]};
  font-size:  ${fonts.fontSize.xsm};
  font-weight: ${fonts.fontWeight.normal};
  font-family: ${fonts.fontFamily.body};
  padding: 0 6px;
`;
