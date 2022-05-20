import axios from './axios';

import { Anime } from '../utils/types';

export default (id: number) => {
  return axios.get<{ data: Anime }>(`/anime/${id}`);
};
