import styled from 'styled-components/native';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const UserContainer = styled.View`
  margin-bottom: 78px;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;  
  gap: 12px;
`

export const UserName = styled.Text`
  color: ${colors.text.main};
  font-size: ${fonts.fontSize['2xl']};
  font-weight: ${fonts.fontWeight.bold};
  font-family: ${fonts.fontFamily.heading};
`

export const PlaylistCardContainer = styled.View`
  padding: 12px;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PlaylistCardTitle = styled.Text`
  color: ${colors.primary.main};
  font-size: ${fonts.fontSize.base};
  font-family: ${fonts.fontFamily.heading};
`