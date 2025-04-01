import { EXPO_API_Read_Access_Token } from '@env';

export const API_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  ACCESS_TOKEN: EXPO_API_Read_Access_Token,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${EXPO_API_Read_Access_Token}`,
  },
};
