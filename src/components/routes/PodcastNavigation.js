import { createStackNavigator } from '@react-navigation/stack';

import { PodcastFeedPage } from '../views/PodcastFeedPage/PodcastFeedPage';
import { PodcastEpisodePage } from '../views/PodcastEpisodePage/PodcastEpisodePage';

import { headerOptionsStyle } from './styles';

const Stack = createStackNavigator();

export function PodcastNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="PodcastFeedPage"
      screenOptions={headerOptionsStyle}>
      <Stack.Screen
        name="PodcastEpisodePage"
        component={PodcastEpisodePage}
        options={({ route }) => ({
          title: route.params.title ? route.params.title : 'Episódio',
        })}
      />
      <Stack.Screen
        name="PodcastFeedPage"
        component={PodcastFeedPage}
        options={({ route }) => ({
          title: route.params.title ? route.params.title : 'Podcast',
        })}
      />
    </Stack.Navigator>
  );
}
