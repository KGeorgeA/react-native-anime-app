import { Anime, GetParams } from '../utils/types';

import axios from './axios';

export default (params?: GetParams) => {
  return axios.get<{ data: Anime[], pagination: any }>('/anime', { params });
};
