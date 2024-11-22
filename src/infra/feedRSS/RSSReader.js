import { randomUUID } from 'expo-crypto';
import { XMLParser } from 'fast-xml-parser';

import { PodcastAuthor } from '../../domain/models/podcast/PodcastAuthor';
import { PodcastChannel } from '../../domain/models/podcast/PodcastChannel';
import { PodcastEpisode } from '../../domain/models/podcast/PodcastEpisode';
import { PodcastAudioFile } from '../../domain/models/podcast/PodcastAudioFile';

import { usePrettyStringToSeconds } from '../../data/hooks/commons/usePrettyStringToSeconds';

export class RSSReader {
  async fetchRSSFeed(feedUrl) {
    const response = await fetch(feedUrl);

    if (!response.ok) throw new Error('HTTP status ' + response.status);

    return await response.text();
  }

  async parseXmlString(xmlString) {
    const parser = new XMLParser({ ignoreAttributes: false });

    return parser.parse(xmlString);
  }

  async mapXMLDataToModel(xmdData, feedUrl) {
    const channel = xmdData?.rss?.channel;
    const episodes = channel?.item;

    if (!channel && !episodes) return null;

    const podcastChannel = new PodcastChannel(
      randomUUID(),
      channel.title,
      channel.link,
      new PodcastAuthor(
        channel['itunes:owner']['itunes:name'],
        channel['itunes:owner']['itunes:email'],
      ),
      channel.description,
      channel.lastBuildDate,
      channel['itunes:image']?.['@_href'],
      feedUrl,
      episodes.length
    );

    const podcastEpisodes = Array.from(episodes)
      .map((episode) => {
        const episodeDuration = episode['itunes:duration'];

        return new PodcastEpisode(
          randomUUID(),
          podcastChannel.id,
          episode.title,
          episode.link,
          episode.description,
          episode.pubDate,
          episode['itunes:image']?.['@_href'],
          typeof episodeDuration === 'string' && episodeDuration.includes(':')
            ? usePrettyStringToSeconds(episodeDuration)
            : episodeDuration,
          new PodcastAudioFile(
            episode.enclosure['@_url'],
            episode.enclosure['@_type'],
            episode.enclosure['@_length']
          )
        );
      });

    return { podcastChannel, podcastEpisodes };
  }
}
