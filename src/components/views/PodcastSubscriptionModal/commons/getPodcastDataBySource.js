import { PODCAST_SEARCH_SOURCE } from "../../../../data/hooks/podcast/usePodcastSearch";

export function getPodcastDataBySource(source) {
  const keys = {
    [PODCAST_SEARCH_SOURCE.ITUNES]: {
      id: 'id',
      logo: 'logo',
      title: 'title',
      source: 'source',
      lastUpdate: 'lastUpdate',
      totalEpisodesQuantity: 'totalEpisodesQuantity',
    },
    [PODCAST_SEARCH_SOURCE.RSS]: {
      id: 'id',
      logo: 'logo',
      title: 'title',
      source: 'source',
      lastUpdate: 'lastUpdate',
      totalEpisodesQuantity: 'totalEpisodesQuantity',
    }
  }
}
