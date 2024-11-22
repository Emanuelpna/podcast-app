import { View } from 'react-native'

import { useFirebaseAuth } from '../../../infra/firebase/useFirebaseAuth';
import { useUserIsLoggedIn } from '../../../infra/firebase/useUserIsLoggedIn';

import { Input } from '../../commons/Input/Input';
import { Button } from '../../commons/Button/Button';
import { Layout } from '../../commons/Layout/Layout';
import { Loading } from '../../commons/Loading/Loading';

import * as S from './styles';
import { Navigations } from '../../../data/Navigations';

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
      <S.Container>
        {isLoading && <Loading />}

        <S.LogoWrapper elevation={5}>
          <S.Logo
            source={require('../../../../assets/icon.png')}
            placeholder={{ blurhash: '8D 07 8A 0D 00 1E 07 67 78 88 70 8C 58 F8 87 7F 80 07 07 27 87 87 70 71 28' }}
            contentFit="cover"
            transition={250}
          />
        </S.LogoWrapper>

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

        <Button onPress={() => navigation.navigate('SingupPage')} variant="primary">
          Criar uma nova conta
        </Button>
      </S.Container>
    </Layout>
  );
}
