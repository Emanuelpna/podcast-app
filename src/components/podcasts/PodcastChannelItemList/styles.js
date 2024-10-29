import styled from "styled-components/native";

import { fonts } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";

export const Container = styled.View`
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const CoverImage = styled.Image`
  width: 86px;
  height: 86px;
  border-radius: 6px;
`

export const ContentWrapper = styled.View`
  flex: 1;
  padding: 12px 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const EpisodeTitle = styled.Text`
  color: ${colors.text.main};
  font-size: ${fonts.fontSize.base};
  font-weight: ${fonts.fontWeight.bold};
`

export const EpisodeSubtitle = styled.Text`
  color: ${colors.text[400]};
  font-size: ${fonts.fontSize.sm};
  font-weight: ${fonts.fontWeight.bold};
`

export const ButtonWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
