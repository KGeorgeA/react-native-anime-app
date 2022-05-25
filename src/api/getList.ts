import type { Anime, APIPagination, GetParams } from '../utils/types';

import axios from './axios';

export default (params?: GetParams) => {
  return axios.get<{ data: Anime[], pagination: APIPagination }>('/anime', { params });
};
