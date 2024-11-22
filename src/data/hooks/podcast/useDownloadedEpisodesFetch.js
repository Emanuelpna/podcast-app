import { useEffect, useState } from "react";

import { SubscriptionService } from "../../services/SubscriptionService";
import { EpisodeDownloadService } from "../../services/EpisodeDownloadService";

import { podcastChannelRepository, podcastEpisodeRepository } from "../../repositories";

/**
 * @typedef {import('../../../domain/models/podcast/PodcastChannel').PodcastChannel} PodcastChannel
 * @typedef {import('../../../domain/models/podcast/PodcastEpisode').PodcastEpisode} PodcastEpisode
 */
export function useDownloadedEpisodesFetch() {
  const [isFetching, setIsFetching] = useState(false)
  const [downloadedEpisodes, setDownloadedEpisodes] = useState([])

  async function fetchDownloadedEpisodes() {
    setIsFetching(true)

    const episodeDownloadService = new EpisodeDownloadService()

    const downloadedEpisodesFileNames = await episodeDownloadService.getDownloadedEpisodesList()

    const episodes = []

    for await (const episodeFileName of downloadedEpisodesFileNames) {
      const episodeId = episodeFileName.replace('podcast-app-', '').replace('.mp3', '')

      /** @type {PodcastEpisode | null} episode */
      const episode = await podcastEpisodeRepository.getDownloadedEpisodeByID(episodeId)

      if (!episode) continue

      /** @type {PodcastChannel | null} channel */
      const channel = await podcastChannelRepository.getChannelById(episode.channelId)

      if (!channel) continue

      episodes.push({ episode, channel })
    }

    setDownloadedEpisodes(episodes)

    setIsFetching(false)
  }

  useEffect(() => {
    fetchDownloadedEpisodes()
  }, [])

  return { isFetching, downloadedEpisodes, fetchDownloadedEpisodes }
}
