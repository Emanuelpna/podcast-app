export class Navigations {
  static navigateToPodcastSubscriptionModal(navigation) {
    navigation.navigate('BaseNavigation', {
      title: 'PodcastSubscriptionModal',
    });
  }

  static navigateToSubscribePage(navigation) {
    navigation.navigate('TabsNavigation', {
      screen: 'SubscribesPage'
    });
  }

  static navigateToDownloadsPage(navigation) {
    navigation.navigate('TabsNavigation', {
      screen: 'DownloadsPage'
    });
  }

  static navigateToPodcastFeedPage(navigation, channel) {
    navigation.navigate('PodcastNavigation', {
      screen: 'PodcastFeedPage',
      params: {
        title: channel.title,
        podcastChannelUrl: channel.feedRSSUrl,
      },
    });
  }

  static navigateToPodcastEpisodePage(navigation, channel, episode) {
    return navigation.navigate('PodcastNavigation', {
      screen: 'PodcastEpisodePage',
      params: {
        title: episode.title,
        channel: channel,
        episode: episode,
      },
    });
  }

  static navigateToPlayerPage(
    navigation,
    loadTrackIntoPlayer,
    channel,
    episode
  ) {
    loadTrackIntoPlayer(channel, episode)
    return navigation.navigate('PlayerPage')
  }

  static navigateToPlaylistsPage(navigation) {
    return navigation.navigate('ProfileNavigation', {
      screen: 'PlaylistsPage',
      params: {
        title: 'Minhas Playlists',
      },
    });
  }
}
