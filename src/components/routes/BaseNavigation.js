import { createStackNavigator } from '@react-navigation/stack';

import { TabsNavigation } from './TabsNavigation';
import { PodcastNavigation } from './PodcastNavigation';

import { PlayerPage } from '../views/PlayerPage/PlayerPage';
import { PodcastSubscriptionModal } from '../views/PodcastSubscriptionModal/PodcastSubscriptionModal';

import { headerOptionsStyle } from './styles';
import { colors } from '../../styles/colors';

const Stack = createStackNavigator();

export function BaseNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="TabsNavigation"

    >
      <Stack.Screen
        name="PlayerPage"
        component={PlayerPage}
        options={{
          title: 'Tocando Agora',
          ...headerOptionsStyle
        }}
      />

      <Stack.Screen
        name="PodcastNavigation"
        component={PodcastNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PodcastSubscriptionModal"
        component={PodcastSubscriptionModal}
        options={{
          presentation: 'modal',
          headerTintColor: colors.text.main,
          title: 'Busque ou insira um Feed RSS'
        }}
      />

      <Stack.Screen
        name="TabsNavigation"
        component={TabsNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
