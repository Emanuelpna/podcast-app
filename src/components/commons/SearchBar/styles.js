import styled from 'styled-components/native';
import { Searchbar as SearchbarPaper } from 'react-native-paper';

import { fonts } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

export const Searchbar = styled(SearchbarPaper)`
  margin-bottom: 32px;
  border: 1px solid ${colors.background[800]};
  background-color: ${colors.background[900]};
`;

export const inputStyles = {
  fontSize: 12,
  color: colors.text.main,
  fontFamily: fonts.fontFamily.body,
};


export const searchbarThemeStyles = {
  colors: {
    onSurface: colors.text[400],
    onSurfaceVariant: colors.text.main
  }
}
