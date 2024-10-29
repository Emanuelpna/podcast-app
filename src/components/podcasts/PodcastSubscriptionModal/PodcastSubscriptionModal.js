import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Divider, Modal, Portal, Text } from 'react-native-paper';

import { Input } from '../../commons/Input/Input';
import { IconButton } from '../../commons/IconButton/IconButton';

import { PodcastChannelItemList } from '../PodcastChannelItemList/PodcastChannelItemList';

import { colors } from '../../../styles/colors';

function isURL(value) {
  try {
    new URL(value)
    return true
  } catch (error) {
    return false
  }
}

// https://feed.podbean.com/mimimidias/feed.xml

export function PodcastSubscriptionModal({
  podcastSearchResults = [],
  isVisible,
  onCloseModal,
  onChannelSearch,
  onFeedRSSFetch,
  onChannelSubscribe,
}) {
  const [podcastSearch, setPodcastSearch] = useState('')

  function onCloseModalCallback() {
    onCloseModal()
    setPodcastSearch('')
  }

  function onSearchSubmit() {
    if (!podcastSearch) return

    const isPodcastSearchURL = isURL(podcastSearch)

    if (isPodcastSearchURL) {
      return onFeedRSSFetch(podcastSearch)
    }

    onChannelSearch(podcastSearch)
  }

  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={onCloseModalCallback}
        contentContainerStyle={{
          height: '80%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 16,
          marginHorizontal: 16,
          backgroundColor: colors.background[900],
        }}
      >
        <View>


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

          <Text
            style={{
              alignSelf: 'center',
              marginBottom: 8,
              color: colors.text.main
            }}
            variant="titleMedium"
          >
            Busque por nome ou insira um Feed RSS
          </Text>
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
      </Modal>
    </Portal>
  )
}
