import styled from 'styled-components/native';

import { colors } from '../../../styles/colors';

export const Container = styled.Pressable`
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 12px;
  padding-right: 12px;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
`;

export const CoverImage = styled.Image`
  height: 90px;
  border-radius: 12px;
  aspect-ratio: 1 / 1;
`;

export const EpisodeTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.text[100]};
  padding-right: 4px;
`;

export const EpisodeDuration = styled.Text`
  font-size: 10px;
  color: ${colors.text[300]};
`;
