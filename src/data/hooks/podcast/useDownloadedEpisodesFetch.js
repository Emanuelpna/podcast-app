import { useEffect, useState } from "react";
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

      console.log({ episodeId });

      /** @type {PodcastEpisode | null} episode */
      const episode = await podcastEpisodeRepository.getEpisodeDetaislById(episodeId)

      console.log({ episode });

      if (!episode) continue

      /** @type {PodcastChannel | null} episode */
      const channel = await podcastChannelRepository.getChannelById(episode.channelId)

      console.log({ channel });

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
