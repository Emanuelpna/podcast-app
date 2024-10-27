import { useFirebaseAuth } from '../../../infra/firebase/useFirebaseAuth';

import { Card } from '../../commons/Card/Card';
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

  return (
    <Layout>
      {isLoading && <Loading />}

      <S.Paragraph>Login</S.Paragraph>

      <Card>
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
      </Card>

      <S.Paragraph>{message}</S.Paragraph>
    </Layout>
  );
}
