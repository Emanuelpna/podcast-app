import { createStackNavigator } from '@react-navigation/stack';

import { ProfilePage } from '../views/ProfilePage/ProfilePage';
import { PlaylistsPage } from '../views/PlaylistsPage/PlaylistsPage';

import { headerOptionsStyle } from './styles';

const Stack = createStackNavigator();

export function ProfileNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="ProfilePage"
      screenOptions={headerOptionsStyle}>
      <Stack.Screen
        name="PlaylistsPage"
        component={PlaylistsPage}
        options={({ route }) => ({
          title: route?.params?.title ? route.params.title : 'Playlists',
        })}
      />

      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
