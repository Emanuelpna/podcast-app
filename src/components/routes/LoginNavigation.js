import { createStackNavigator } from '@react-navigation/stack';

import { useUserIsLoggedIn } from '../../infra/firebase/useUserIsLoggedIn';

import { BaseNavigation } from './BaseNavigation';

import { LoginPage } from '../views/LoginPage/LoginPage';
import { SingupPage } from '../views/SingupPage/SingupPage';

import { headerOptionsStyle } from './styles';

const Stack = createStackNavigator();

export function LoginNavigation() {
  const { userIsLoggedIn, loggedInAsGuest } = useUserIsLoggedIn();

  return (
    <Stack.Navigator initialRouteName="LoginPage" >
      {userIsLoggedIn || loggedInAsGuest ? (
        <Stack.Screen
          name="BaseNavigation"
          component={BaseNavigation}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SingupPage"
            component={SingupPage}
            options={{
              title: 'Criar Conta',
              ...headerOptionsStyle
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
