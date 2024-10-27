import { useState } from 'react';
import { Text, Linking, Image, View, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';

import { Card } from '../../commons/Card/Card';

import * as S from './styles';

export function PodcastChannelBio({ channel }) {
  const [isDescriptionTruncated, setIsDescriptionTruncated] = useState(true);
  const [isDescriptionOverflowing, setIsDescriptionOverflowing] =
    useState(false);

  return (
    <Card>
      <View
        style={{
          padding: 12,
          flexWrap: 'nowrap',
          flexDirection: 'row',
          gap: 12,
        }}>
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
            style={{ borderRadius: 6, alignSelf: 'center' }}
          />
        )}

        <View
          style={{
            paddingTop: 4,
            paddingRight: 12,
            width: '80%',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            gap: 4,
          }}>
          <S.Title>{channel.title}</S.Title>

          <Pressable onPress={() => Linking.openURL(channel.website)}>
            <S.Author>{channel.author.name}</S.Author>
          </Pressable>

          <S.EpisodeCount>{channel.totalEpisodesQuantity} Episódios</S.EpisodeCount>
        </View>
      </View>

      <View style={{ padding: 12, paddingTop: 0 }}>
        <S.Description
          ellipsizeMode="tail"
          numberOfLines={isDescriptionTruncated ? 4 : Number.MAX_SAFE_INTEGER}
          onTextLayout={(event) => {
            console.log(event.nativeEvent.lines.length);
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
    </Card>
  );
}
