import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
});

// customAxios.interceptors.request.use(request => request);
customAxios.interceptors.response.use(
  undefined,
  (err) => {
    // eslint-disable-next-line no-console
    console.log('ALLO OSHIBKA', err);
    throw err;
  },
);

export default customAxios;
