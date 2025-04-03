import { EXPO_API_Read_Access_Token } from '@env';
import axios, { AxiosError } from 'axios';

export const API_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  ACCESS_TOKEN: EXPO_API_Read_Access_Token,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${EXPO_API_Read_Access_Token}`,
  },
};

export const fetchLatestMovies = async ({
  query,
  page = 1,
}: {
  query: string;
  page?: number;
}) => {
  const endpoint = query
    ? `${API_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(
        query,
      )}&page=${page}`
    : `${API_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&page=${page}`;

  try {
    const response = await axios.get(endpoint, {
      headers: API_CONFIG.headers,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(
      `Failed to fetch movies: ${
        axiosError.response?.statusText || axiosError.message
      }`,
    );
  }
};

export const fetchTopRatesMovies = async ({
  query,
  page = 1,
}: {
  query: string;
  page?: number;
}) => {
  const endpoint = query
    ? `${API_CONFIG.BASE_URL}/movie/top_rated?query=${encodeURIComponent(
        query,
      )}&page=${page}`
    : `${API_CONFIG.BASE_URL}/movie/top_rated?sort_by=popularity.desc&page=${page}`;

  try {
    const response = await axios.get(endpoint, {
      headers: API_CONFIG.headers,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(
      `Failed to fetch movies: ${
        axiosError.response?.statusText || axiosError.message
      }`,
    );
  }
};
