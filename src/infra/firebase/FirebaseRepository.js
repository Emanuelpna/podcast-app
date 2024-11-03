import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

import { app } from './config/firebaseConfig';

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

export class FirebaseRepository {
  static getUser() {
    return auth.currentUser;
  }

  static userIsLoggedIn() {
    return auth.currentUser !== null;
  }

  static addUserStateChangeEventListener(onUserStateChange) {
    auth.onAuthStateChanged(function (user) {
      onUserStateChange(!!user);
    });
  }

  static async logout() {
    try {

      signOut(auth)

      return true
    } catch (error) {
      console.error('Unable to logout from account');
      return false
    }
  }

  static async signIn(email, password) {
    try {
      console.log(email, password);

      const user = await signInWithEmailAndPassword(auth, email, password);

      console.log('Usuário autenticado', user);

      return user;
    } catch (error) {
      console.log('Não foi possível cadastrar o usuário', error);

      throw this.#getMessageByErrorCode(error);
    }
  }

  static async createUser(email, password) {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      console.log('Usuário autenticado', user);

      return user;
    } catch (error) {
      console.log('Não foi possível cadastrar o usuário', error);

      throw this.#getMessageByErrorCode(error);
    }
  }

  static #getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
      default:
        return 'Erro na autenticação';
    }
  }
}
