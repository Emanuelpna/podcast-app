import { fonts } from '../../styles/fonts';
import { colors } from '../../styles/colors';

export const headerOptionsStyle = {
  headerStyle: {
    elevation: 4,
    backgroundColor: colors.background[900],
    borderBottomColor: colors.background[800],
  },
  headerTintColor: colors.text.main,
  headerTitleStyle: {
    fontFamily: fonts.fontFamily.heading,
  },
};

export const tabOptionsStyle = {
  headerShown: false,
  tabBarActiveTintColor: colors.primary[400],
  tabBarInactiveTintColor: colors.text[400],
  tabBarStyle: {
    height: 68,
    paddingBottom: 8,
    elevation: 4,
    backgroundColor: colors.background[900]
  },
  tabBarLabelStyle: {
    fontFamily: fonts.fontFamily.heading,
  },
};
