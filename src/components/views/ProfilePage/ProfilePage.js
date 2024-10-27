import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Icon } from 'react-native-paper';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { Card } from '../../commons/Card/Card';
import { Button } from '../../commons/Button/Button';
import { Layout } from '../../commons/Layout/Layout';

import { colors } from '../../../styles/colors';

import * as S from './styles';

export function ProfilePage({ navigation }) {
  return (
    <Layout>
      <S.UserContainer>
        <Avatar.Text size={74} label="EA" />

        <S.UserName>Emanuel Andrade</S.UserName>
      </S.UserContainer>

      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Card onPress={() => navigation.navigate('PlaylistsPage')}>
          <S.PlaylistCardContainer>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Icon
                size={24}
                source={() => (
                  <FontAwesome6
                    name="list-ul"
                    size={22}
                    color={colors.primary.main}
                  />
                )}
              />

              <S.PlaylistCardTitle>Minhas Playlists</S.PlaylistCardTitle>
            </View>

            <Icon
              size={20}
              source={() => (
                <FontAwesome6
                  size={18}
                  name="arrow-right"
                  style={{ marginTop: 4 }}
                  color={colors.primary.main}
                />
              )}
            />
          </S.PlaylistCardContainer>
        </Card>

        <Button
          icon={() => (
            <Icon
              size={18}
              source={() => (
                <FontAwesome6
                  name="arrow-right-from-bracket"
                  size={16}
                  color={colors.text[800]}
                />
              )}
            />
          )}
          onPress={() => navigation.navigate('PlaylistsPage')}>
          <Text>Sair</Text>
        </Button>
      </View>
    </Layout>
  );
}
