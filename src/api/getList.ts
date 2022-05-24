import { Anime, AnimePagination, GetParams } from '../utils/types';

import axios from './axios';

export default (params?: GetParams) => {
  return axios.get<{ data: Anime[], pagination: AnimePagination }>('/anime', { params });
};
