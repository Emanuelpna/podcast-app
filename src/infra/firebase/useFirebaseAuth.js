import { useState } from 'react';
import { Alert } from 'react-native';

import { useUserIsLoggedIn } from './useUserIsLoggedIn';
import { FirebaseRepository } from './FirebaseRepository';

export function useFirebaseAuth(navigation) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const { setUserIsLoggedIn } = useUserIsLoggedIn();

  async function tryLogin() {
    setMessage('');
    setLoading(true);

    try {
      await FirebaseRepository.signIn(email, password);

      setMessage('Sucesso');
      setUserIsLoggedIn(true);
      navigation.navigate('BaseNavigation');
    } catch (error) {
      console.log(error, error === 'Erro na autenticação');
      setMessage(error);
      setUserIsLoggedIn(false);

      if (error === 'Erro na autenticação') {
        Alert.alert('Não cadastrado', 'Deseja cadastrar um novo usuário?', [
          {
            text: 'Sim',
            onPress: async () => {
              try {
                await FirebaseRepository.createUser(email, password);

                setMessage('Sucesso');
                setUserIsLoggedIn(true);
                navigation.navigate('BaseNavigation');
              } catch (error) {
                setMessage(error);
              }
            },
          },
          {
            text: 'Não',
            onPress: () => {
              console.log('Usuário não quer criar conta');
            },
          },
        ]);
      }
    }

    setLoading(false);
  }

  async function doLogout() {
    const isLoggedOut = await FirebaseRepository.logout()

    return isLoggedOut
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    message,
    tryLogin,
    doLogout
  };
}
