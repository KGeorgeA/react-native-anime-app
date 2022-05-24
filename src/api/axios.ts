import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
});

customAxios.interceptors.response.use(
  (data) => data,
  (err) => {
    // eslint-disable-next-line no-console
    console.log('OSHIBKA', err);
    throw err;
  },
);

export default customAxios;
