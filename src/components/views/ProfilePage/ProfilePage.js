import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Icon } from 'react-native-paper';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Card } from '../../commons/Card/Card';
import { Button } from '../../commons/Button/Button';
import { Layout } from '../../commons/Layout/Layout';

import { syncDBRepository } from '../../../data/repositories';

import { useFirebaseAuth } from '../../../infra/firebase/useFirebaseAuth';

import * as S from './styles';
import { colors } from '../../../styles/colors';

export function ProfilePage({ navigation }) {
  const { doLogout } = useFirebaseAuth(navigation)

  return (
    <Layout>
      <S.UserContainer>
        <Avatar.Text size={74} label="EA" />

        <S.UserName>Emanuel Andrade</S.UserName>
      </S.UserContainer>

      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ gap: 12 }}>
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

          <Card onPress={() => navigation.navigate('DebugPage')}>
            <S.PlaylistCardContainer>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Icon
                  size={24}
                  source={() => (
                    <FontAwesome6
                      name="database"
                      size={22}
                      color={colors.primary.main}
                    />
                  )}
                />

                <S.PlaylistCardTitle>Open Debug</S.PlaylistCardTitle>
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
        </View>

        <View style={{ marginBottom: 16 }}>
          <Button
            icon={
              <Icon
                size={18}
                source={() => (
                  <MaterialCommunityIcons
                    name="sync"
                    size={22}
                    color={colors.text[800]}
                  />
                )}
              />
            }
            onPress={() => syncDBRepository.bulkSyncData()}>
            <Text>Sincronizar dados com a Cloud</Text>
          </Button>

          <Button
            icon={
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
            }
            onPress={doLogout}>
            <Text>Sair da conta</Text>
          </Button>
        </View>
      </View>
    </Layout>
  );
}
