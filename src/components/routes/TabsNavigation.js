import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProfileNavigation } from './ProfileNavigation';

import { SubscribesPage } from '../views/SubscribesPage/SubscribesPage';
import { DiscoveryPage } from '../views/DiscoveryPage/DiscoveryPage';
import { DownloadsPage } from '../views/DownloadsPage/DownloadsPage';

import { tabOptionsStyle } from './styles';

const Tab = createBottomTabNavigator();

export function TabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="SubscribesPage"
      screenOptions={tabOptionsStyle}>
      <Tab.Screen
        name="SubscribesPage"
        component={SubscribesPage}
        options={{
          title: 'Inscrições',
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="inbox" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DiscoveryPage"
        component={DiscoveryPage}
        options={{
          title: 'Descobertas',
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="compass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DownloadsPage"
        component={DownloadsPage}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="download-cloud" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigation"
        component={ProfileNavigation}
        options={{
          title: 'Meu Perfil',
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
