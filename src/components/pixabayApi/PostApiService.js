import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38855360-cf284d31c2faf9da0308ab4d1';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalHits = 0;
  }

  async fetchPost() {
    const OPTIONS = new URLSearchParams({
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: 12,
    });

    try {
      const response = await axios.get(`${BASE_URL}?${OPTIONS.toString()}`);
      this.incrementPage();
      return response.data;
    } catch (error) {
      console.error(error.toJSON());
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get hits() {
    return this.totalHits;
  }

  set hits(newTotalHits) {
    this.totalHits = newTotalHits;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
