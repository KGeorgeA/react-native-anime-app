import { ANIME_API_URL } from 'react-native-dotenv';

import axios from 'axios';

const customAxios = axios.create({
  baseURL: ANIME_API_URL,
});

customAxios.interceptors.response.use(
  (data) => data,
  (err) => {
    // eslint-disable-next-line no-console
    console.log('OSHIBKA', err);
    throw Error(err);
  },
);

export default customAxios;
