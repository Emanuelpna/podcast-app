import { View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import { IconButton } from "../../commons/IconButton/IconButton";

import * as S from './styles'
import { colors } from "../../../styles/colors";

export function PodcastChannelItemList({ channel, onChannelSubscribe }) {
  return (
    <S.Container>
      <View>
        <S.CoverImage source={{ uri: channel.logo }} />
      </View>

      <S.ContentWrapper>
        <S.EpisodeTitle>{channel.title}</S.EpisodeTitle>

        <S.EpisodeSubtitle>{channel.totalEpisodesQuantity} Episódios</S.EpisodeSubtitle>
      </S.ContentWrapper>

      <S.ButtonWrapper>
        <IconButton
          size={48}
          onButtonPress={() => onChannelSubscribe(channel)}
          icon={() => (
            <FontAwesome6
              name="plus"
              size={24}
              color={colors.text[300]}
            />
          )}
        />
      </S.ButtonWrapper>
    </S.Container>
  )
}
