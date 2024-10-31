export class PodcastEpisode {
  /**
   * @typedef {import('./PodcastAudioFile').PodcastAudioFile} PodcastAudioFile
   * @param {PodcastAudioFile} audioFile
   */
  constructor(
    id,
    channelId,
    title,
    link,
    description,
    publishDate,
    banner,
    duration,
    audioFile
  ) {
    /** @type {string} */
    this.id = id;
    /** @type {string} */
    this.channelId = channelId;
    /** @type {string} */
    this.title = title;
    /** @type {string} */
    this.link = link;
    /** @type {string} */
    this.description = description;
    /** @type {string?} */
    this.publishDate = publishDate;
    /** @type {string?} */
    this.banner = banner;
    /** @type {string} */
    this.duration = duration;
    /** @type {PodcastAudioFile} */
    this.audioFile = audioFile;
  }

  toObject() {
    return {
      id: this.id,
      channelId: this.channelId,
      title: this.title,
      link: this.link,
      description: this.description,
      publishDate: this.publishDate,
      banner: this.banner,
      duration: this.duration,
      audioFile: {
        url: this.audioFile.url,
        length: this.audioFile.length,
        fileType: this.audioFile.fileType,
      },
    }
  }
}
