import { View } from 'react-native'

import { useFirebaseAuth } from '../../../infra/firebase/useFirebaseAuth';
import { useUserIsLoggedIn } from '../../../infra/firebase/useUserIsLoggedIn';

import { Input } from '../../commons/Input/Input';
import { Button } from '../../commons/Button/Button';
import { Layout } from '../../commons/Layout/Layout';
import { Loading } from '../../commons/Loading/Loading';

import * as S from './styles';

export function LoginPage({ navigation }) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    message,
    tryLogin,
  } = useFirebaseAuth(navigation);

  const { loginAsGuest } = useUserIsLoggedIn()

  return (
    <Layout>
      {isLoading && <Loading />}

      <S.Paragraph>Login</S.Paragraph>

      <View>
        <Input
          label="E-mail"
          placeholder="user@email.com"
          value={email}
          inputMode="email"
          autoComplete="email"
          onChangeText={setEmail}
        />

        <Input
          label="Senha"
          placeholder="******"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={tryLogin} variant="accent">
          Login
        </Button>


        <Button onPress={loginAsGuest} variant="primary">
          Entrar como Convidado
        </Button>
      </View>

      <S.Paragraph>{message}</S.Paragraph>
    </Layout>
  );
}
