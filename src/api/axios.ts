import { ANIME_API_URL } from 'react-native-dotenv';

import axios from 'axios';

const customAxios = axios.create({
  baseURL: ANIME_API_URL,
});

customAxios.interceptors.response.use(
  (data) => data,
  (error) => {
    // eslint-disable-next-line no-console
    console.log('OSHIBKA', error);
    throw error;
  },
);

export default customAxios;
