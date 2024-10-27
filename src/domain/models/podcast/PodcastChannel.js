export class PodcastChannel {
  /**
   * @typedef {import('./PodcastAuthor').PodcastAuthor} PodcastAuthor
   * @param {PodcastAuthor} audioFile
   */
  constructor(title, website, author, description, lastPublishDate, logo, feedRSSUrl, totalEpisodesQuantity) {
    /** @type {string} */
    this.title = title;
    /** @type {string} */
    this.website = website;
    /** @type {PodcastAuthor} */
    this.author = author;
    /** @type {string} */
    this.description = description;
    /** @type {string?} */
    this.lastPublishDate = lastPublishDate;
    /** @type {string?} */
    this.logo = logo;
    /** @type {string} */
    this.feedRSSUrl = feedRSSUrl;
    /** @type {number} */
    this.totalEpisodesQuantity = totalEpisodesQuantity;
  }
}
