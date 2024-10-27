import { Tooltip } from 'react-native-paper';

import * as S from './styles';

export function PodcastChannelCard({
  title,
  cover,
  totalEpisodes,
  onCardPress,
  hasUnseenEpisodes = false,
}) {
  return (
    <S.Container onPress={onCardPress}>
      <S.CoverContainer elevation={4}>
        <S.CoverImage source={{ uri: cover }} />
      </S.CoverContainer>

      <Tooltip title={title}>
        <S.PodcastTitle numberOfLines={1} leaveTouchDelay={150}>
          {title}
        </S.PodcastTitle>
      </Tooltip>

      <S.PodcastQuantity>{totalEpisodes} Episódios</S.PodcastQuantity>

      <S.UnseedEpisodesBadge
        size={12}
        visible={hasUnseenEpisodes}
      />
    </S.Container>
  );
}
