import { useState } from 'react';
import { Linking, Image, View, Pressable } from 'react-native';
import { Avatar, Button as PaperButton, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';

import { Card } from '../../commons/Card/Card';
import { Button } from '../../commons/Button/Button';

import * as S from './styles';
import { colors } from '../../../styles/colors';

export function PodcastChannelBio({ channel, onUnsubscribeFromChannel }) {
  const [isDescriptionTruncated, setIsDescriptionTruncated] = useState(true);
  const [isDescriptionOverflowing, setIsDescriptionOverflowing] =
    useState(false);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Card>

      <S.HeaderActionbarTitleContainer>
        {channel?.logo ? (
          <Image
            source={{ uri: channel.logo }}
            style={{
              width: 72,
              height: 72,
              borderRadius: 6,
              alignSelf: 'center',
            }}
          />
        ) : (
          <Avatar.Text
            size={72}
            label={channel.title}
            style={{ borderRadius: 6, alignSelf: 'flex-start' }}
          />
        )}

        <S.HeaderTitleWrapper>
          <S.Title>{channel.title}</S.Title>

          <Pressable onPress={() => Linking.openURL(channel.website)}>
            <S.Author>{channel.author.name}</S.Author>
          </Pressable>

          <S.EpisodeCount>{channel.totalEpisodesQuantity} Episódios</S.EpisodeCount>
        </S.HeaderTitleWrapper>
      </S.HeaderActionbarTitleContainer>

      <View style={{ padding: 4, paddingTop: 0 }}>
        <S.Description
          ellipsizeMode="tail"
          numberOfLines={isDescriptionTruncated ? 4 : Number.MAX_SAFE_INTEGER}
          onTextLayout={(event) => {
            setIsDescriptionOverflowing(event.nativeEvent.lines.length > 4);
          }}>
          {channel.description}

          {!isDescriptionTruncated && isDescriptionOverflowing && (
            <S.DescriptionShowMoreLessButton
              style={{ paddingLeft: 4 }}
              onPress={() => setIsDescriptionTruncated((old) => !old)}>
              <Text>Ver menos</Text>
            </S.DescriptionShowMoreLessButton>
          )}
        </S.Description>

        {isDescriptionTruncated && isDescriptionOverflowing && (
          <Pressable
            style={{ paddingLeft: 4, paddingTop: 2 }}
            onPress={() => setIsDescriptionTruncated((old) => !old)}>
            <S.DescriptionShowMoreLessButton>
              Ver mais
            </S.DescriptionShowMoreLessButton>
          </Pressable>
        )}
      </View>

      <S.HeaderActionsWrapper>
        <Button onPress={showDialog}>
          <Text>Inscrito</Text>
        </Button>
      </S.HeaderActionsWrapper>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Cancelar inscrição no canal?</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Você irá remover a inscrição no canal {channel.title}</Text>
          </Dialog.Content>

          <Dialog.Actions>
            <PaperButton onPress={hideDialog}>Cancelar</PaperButton>
            <PaperButton onPress={() => onUnsubscribeFromChannel(channel.id)}>Desinscrever</PaperButton>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Card>
  );
}
