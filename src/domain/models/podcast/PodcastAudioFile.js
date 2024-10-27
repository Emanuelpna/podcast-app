export class PodcastAudioFile {
  constructor(url, fileType, length) {
    /** @type {string} */
    this.url = url;
    /** @type {string} */
    this.length = length;
    /** @type {string} */
    this.fileType = fileType;
  }
}
