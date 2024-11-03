import styled from 'styled-components/native';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const HeaderActionContainer = styled.View`
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const HeaderActionbarTitleContainer = styled.View`
  padding: 12px;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 12px;
`

export const HeaderTitleWrapper = styled.View`
  flex: 1;
  padding-top: 4px;
  padding-right: 12px;
  width: auto;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 4px;
`

export const HeaderActionsWrapper = styled.View`
  /* justify-content: flex-end;
  flex-direction: row; */
  padding-top: 8px 0;
  gap: 12px;
`

export const Title = styled.Text`
  line-height: 22;
  color: ${colors.text.main};
  font-size: ${fonts.fontSize.base};
  font-weight: ${fonts.fontWeight.bold};
  font-family: ${fonts.fontFamily.heading};
`;

export const Author = styled.Text`
  color: ${colors.accent.main};
  font-size: ${fonts.fontSize.sm};
  font-weight: ${fonts.fontWeight.bold};
  font-family: ${fonts.fontFamily.heading};
`;

export const EpisodeCount = styled.Text`
  color: ${colors.text[400]};
  font-size: ${fonts.fontSize.xsm};
  font-weight: ${fonts.fontWeight.normal};
  font-family: ${fonts.fontFamily.body};
`;

export const Description = styled.Text`
  color: ${colors.text.main};
  font-size: ${fonts.fontSize.xsm};
  font-family: ${fonts.fontFamily.body};
  font-weight: ${fonts.fontWeight.normal};
`;

export const DescriptionShowMoreLessButton = styled.Text`
  color: ${colors.accent.main};
  font-size: ${fonts.fontSize.xsm};
  font-family: ${fonts.fontFamily.body};
  font-weight: ${fonts.fontWeight.normal};
`;
