import styled, { css } from 'styled-components/native';
import Slider from '@react-native-community/slider';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Button, IconButton as PaperIconButton } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
`;

export const PodcastProgressBar = styled(Slider)`
  width: 100%;
  height: 12px;
`;

export const PodcastDurationRow = styled.View`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PodcastDurationText = styled.Text`
  color: ${colors.text[200]};
  font-size: ${fonts.fontSize.sm};
  font-family: ${fonts.fontFamily.body};
`;

export const ControlsButtonsRow = styled.View`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 12px;
  margin-top: 16px;
`;

export const IconButton = styled(PaperIconButton)`
  width: 56px;
  height: 56px;
  background-color: ${colors.accent.main};
  transition: 100ms ease-in-out;

  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isHollowed &&
    css`
        width: 32px;
        height: 32px;
        background-color: none;
      `}
`;

export const Icon = styled(FontAwesome6)`
  color: ${colors.text[200]};
`;

export const IconMaterial = styled(MaterialCommunityIcons)`
  color: ${colors.text[200]};
`;
