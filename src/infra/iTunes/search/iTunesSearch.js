export class iTunesSearch {
  #BASE_URL = 'https://itunes.apple.com/search'

  async searchPodcastByChannelName(searchTerm) {
    const encodedSearchTerm = encodeURIComponent(searchTerm)

    const response = await fetch(`${this.#BASE_URL}?term=${encodedSearchTerm}&media=podcast&country=BR`)

    if (!response.ok) return null

    const data = await response.json()

    return data;
  }
}
