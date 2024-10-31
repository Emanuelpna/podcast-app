const databasePrefix = "@podcast-app:"

export const DatabaseCollectionNames = {
  SYNC_QUEUE: `${databasePrefix}:sync_queue`,
  SUBSCRIBED_PODCASTS: `${databasePrefix}:subscribed_podcasts`,
  SUBSCRIBED_PODCAST_EPISODES: `${databasePrefix}:subscribed_podcast_episodes`,
}
