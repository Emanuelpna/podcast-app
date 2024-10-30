import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Sintony_400Regular,
  Sintony_700Bold,
} from '@expo-google-fonts/sintony';
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { TrackPlayerProvider } from './src/infra/trackPlayer/useTrackPlayer';
import { FirebaseAuthProvider } from './src/infra/firebase/useUserIsLoggedIn';

import { LoginNavigation } from './src/components/routes/LoginNavigation';

import { colors } from './src/styles/colors';

export default function App() {
  useFonts({
    Sintony_700Bold,
    Sintony_400Regular,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <FirebaseAuthProvider>
      <PaperProvider>
        <TrackPlayerProvider>
          <NavigationContainer theme={{
            colors: {
              background: colors.background[900],
            }
          }}
          >
            <LoginNavigation />
            <StatusBar style="light" />
          </NavigationContainer>
        </TrackPlayerProvider>
      </PaperProvider>
    </FirebaseAuthProvider>
  );
}
