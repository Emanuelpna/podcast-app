import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';

import { Input } from '../../commons/Input/Input';
import { Loading } from '../../commons/Loading/Loading';
import { IconButton } from '../../commons/IconButton/IconButton';

import { PodcastChannelItemList } from '../../podcasts/PodcastChannelItemList/PodcastChannelItemList';

import { Navigations } from '../../../data/Navigations';
import { usePodcastSearch } from '../../../data/hooks/podcast/usePodcastSearch';
import { useSubscribedPodcastsFetch } from '../../../data/hooks/podcast/useSubscribedPodcastsFetch';

import { colors } from '../../../styles/colors';

function isURL(value) {
  try {
    new URL(value)
    return true
  } catch (error) {
    return false
  }
}

export function PodcastSubscriptionModal({ navigation }) {
  const [podcastSearch, setPodcastSearch] = useState('')

  const {
    fetchSubscribedChannels
  } = useSubscribedPodcastsFetch()

  const {
    isSearching,
    podcastSearchResults,
    fetchFeedRSS,
    subscribeToChannel,
    doChannelSearch
  } = usePodcastSearch(() => {
    fetchSubscribedChannels()

    Navigations.navigateToSubscribePage(navigation)
  })

  function onSearchSubmit() {
    if (!podcastSearch) return

    const isPodcastSearchURL = isURL(podcastSearch)

    if (isPodcastSearchURL) {
      return fetchFeedRSS(podcastSearch)
    }

    doChannelSearch(podcastSearch)
  }

  async function onChannelSubscribe(podcastData) {
    await subscribeToChannel(podcastData)

    return setPodcastSearch('')
  }

  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }}>
        <Input
          label="Pesquisar"
          value={podcastSearch}
          onChangeText={setPodcastSearch}
        />

        <IconButton
          size={48}
          onButtonPress={onSearchSubmit}
          icon={
            <FontAwesome6
              name="magnifying-glass"
              size={14}
              color={colors.text[300]}
            />
          }
        />
      </View>

      <Divider style={{ marginVertical: 12 }} />

      {isSearching ?
        <Loading /> : (
          <FlatList
            data={podcastSearchResults}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            keyExtractor={(item) => item?.id ? item.id : item.podcastChannel.website}
            renderItem={({ item: podcastData }) => {
              return (
                <PodcastChannelItemList
                  logo={podcastData?.logo ? podcastData.logo : podcastData.podcastChannel.logo}
                  title={podcastData?.title ? podcastData.title : podcastData.podcastChannel.title}
                  totalEpisodesQuantity={podcastData?.totalEpisodesQuantity ? podcastData.totalEpisodesQuantity : podcastData.podcastChannel.totalEpisodesQuantity}
                  onChannelSubscribe={() => onChannelSubscribe(podcastData)}
                />
              )
            }}
          />
        )
      }
    </>
  )
}
