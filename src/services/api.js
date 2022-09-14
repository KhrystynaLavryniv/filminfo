import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '958a441e98a3a2e7212356a4dfcbfc32';

export async function fetchTrandingMovies() {
  return await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}
export async function fetchTrandingTVEpisodes() {
  return await axios.get(`${BASE_URL}/trending/tv/day?api_key=${API_KEY}`);
}
export async function fetchMovies() {
  return await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
}

export async function fetchMovieById(movieId) {
  return await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export async function fetchSimilarMovie(movieId) {
  return await axios.get(
    `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
  );
}

export async function fetchMovieByQuery(value) {
  return await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}&include_adult=false`
  );
}
export async function fetchTVByQuery(value) {
  return await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}&include_adult=false`
  );
}
export async function fetchMovieCredits(movieId) {
  return await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export async function fetchMovieReviews(movieId) {
  return await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
}

export async function fetchGenres() {
  return await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
}

export async function fetchTrailer(movieId) {
  return await axios.get(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
  );
}

export async function fetchMovieBySort(sortOption) {
  return await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sortOption}&page=1`
  );
}
export async function fetchTVBySort(sortOption) {
  return await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=${sortOption}&page=1`
  );
}
