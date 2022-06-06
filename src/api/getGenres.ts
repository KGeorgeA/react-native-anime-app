import axios from './axios';

export default () => {
  return axios.get<{
    data: Array<{
      mal_id: number;
      name: string;
      url: string;
      count: number;
    }>;
  }>('/genres/anime');
};
