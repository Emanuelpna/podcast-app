const databasePrefix = "@podcast-app:"

export const DatabaseCollectionNames = {
  SYNC_QUEUE: `${databasePrefix}:sync_queue`,
  SUBSCRIBED_PODCASTS: `${databasePrefix}:subscribed_podcasts`,
  NEWEST_PODCAST_EPISODES: `${databasePrefix}:newest_podcast_episodes`,
  // SUBSCRIBED_PODCAST_EPISODES: `${databasePrefix}:subscribed_podcast_episodes`,
  DOWNLOADED_PODCAST_EPISODES: `${databasePrefix}:download_podcast_episodes`,
}
