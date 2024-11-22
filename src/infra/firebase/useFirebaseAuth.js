import { useState } from 'react';
import { Alert } from 'react-native';

import { useUserIsLoggedIn } from './useUserIsLoggedIn';
import { FirebaseRepository } from './FirebaseRepository';

export function useFirebaseAuth(navigation) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const { setUserIsLoggedIn, loggedInAsGuest, doGuestLogout } = useUserIsLoggedIn();

  async function login() {
    try {
      await FirebaseRepository.signIn(email, password);

      setMessage('Sucesso');
      setUserIsLoggedIn(true);

      navigation.navigate('BaseNavigation');
    } catch (error) {
      setMessage(error);

      setUserIsLoggedIn(false);

      throw error;
    }
  }

  async function createAccount() {
    try {
      await FirebaseRepository.createUser(email, password);

      await login()
    } catch (error) {
      setMessage(error);
    }
  }

  async function tryLogin() {
    setMessage('');
    setLoading(true);

    try {
      await login()
    } catch (error) {
      if (error === 'Erro na autenticação') {
        Alert.alert('Usuário não encontrado', 'Email ou senha estão incorretos');
      }
    }

    setLoading(false);
  }

  async function doLogout() {
    if (loggedInAsGuest) {
      return doGuestLogout()
    }

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
    createAccount,
    doLogout
  };
}
