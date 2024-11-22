import { createStackNavigator } from '@react-navigation/stack';

import { useUserIsLoggedIn } from '../../infra/firebase/useUserIsLoggedIn';

import { BaseNavigation } from './BaseNavigation';

import { LoginPage } from '../views/LoginPage/LoginPage';

const Stack = createStackNavigator();

export function LoginNavigation() {
  const { userIsLoggedIn, loggedInAsGuest } = useUserIsLoggedIn();

  return (
    <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
      {userIsLoggedIn || loggedInAsGuest ? (
        <Stack.Screen name="BaseNavigation" component={BaseNavigation} />
      ) : (
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
