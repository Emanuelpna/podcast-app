import { View } from 'react-native'

import { useFirebaseAuth } from '../../../infra/firebase/useFirebaseAuth';
import { useUserIsLoggedIn } from '../../../infra/firebase/useUserIsLoggedIn';

import { Input } from '../../commons/Input/Input';
import { Button } from '../../commons/Button/Button';
import { Layout } from '../../commons/Layout/Layout';
import { Loading } from '../../commons/Loading/Loading';

import * as S from './styles';

export function SingupPage({ navigation }) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    message,
    createAccount,
  } = useFirebaseAuth(navigation);

  return (
    <Layout>
      {isLoading && <Loading />}

      <S.Paragraph>Criar Nova Conta</S.Paragraph>

      <View>
        <Input
          label="Escolha um E-mail"
          placeholder="user@email.com"
          value={email}
          inputMode="email"
          autoComplete="email"
          onChangeText={setEmail}
        />

        <Input
          label="Escolha uma senha"
          placeholder="******"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={createAccount} variant="accent">
          Login
        </Button>
      </View>

      <S.Paragraph>{message}</S.Paragraph>
    </Layout>
  );
}
