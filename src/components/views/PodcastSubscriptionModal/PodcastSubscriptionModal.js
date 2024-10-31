import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';

import { Input } from '../../commons/Input/Input';
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
    podcastSearchResults,
    fetchFeedRSS,
    subscribeToChannel
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

    // do channel search on itunes API in the future
    // doChannelSearch(podcastSearch)
  }

  async function onChannelSubscribe(podcastChannel) {
    await subscribeToChannel(podcastChannel)

    return setPodcastSearch('')
  }

  return (
    // <Portal>
    //   <Modal
    //     visible={isVisible}
    //     onDismiss={onCloseModalCallback}
    //     contentContainerStyle={{
    //       height: '80%',
    //       flexDirection: 'column',
    //       justifyContent: 'space-between',
    //       padding: 16,
    //       marginHorizontal: 16,
    //       backgroundColor: colors.background[900],
    //     }}
    //   >
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
          icon={() => (
            <FontAwesome6
              name="magnifying-glass"
              size={14}
              color={colors.text[300]}
            />
          )}
        />
      </View>


      <Divider style={{ marginVertical: 12 }} />

      <FlatList
        data={podcastSearchResults.sort((a, b) =>
          a.title.localeCompare(b.title)
        )}
        keyExtractor={(item) => item.podcastChannel.website}
        renderItem={({ item }) => (
          <PodcastChannelItemList
            channel={item.podcastChannel}
            onChannelSubscribe={onChannelSubscribe}
          />
        )}
      />
    </>
    //   </Modal>
    // </Portal>
  )
}
