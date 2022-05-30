/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from './store';
import {
  updatePosts,
  toggleRefresh,
  updateCurrentAnime,
  updateApiPagination,
  updateCurrentPage,
  updateItemsCount,
  updateGenres,
} from './reducer';
import getList from '../api/getList';
import getOne from '../api/getOne';
import getGenres from '../api/getGenres';
import type { GetParams } from '../utils/types';

export const getAnimes = createAsyncThunk<
  void,
  GetParams | undefined,
  { dispatch: AppDispatch }
>('posts/getAnimes', async (params = { limit: 25, page: 1 }, { dispatch }) => {
  try {
    dispatch(toggleRefresh(true));

    const { data: { data, pagination } } = await getList(params);

    dispatch(updateApiPagination(pagination));
    dispatch(updatePosts(data));
  } catch (error) {
    dispatch(toggleRefresh(false));
    console.log(error);
  } finally {
    dispatch(toggleRefresh(false));
  }
});

export const getMoreAnimes = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch,
    state: RootState,
  }
>('posts/getMoreAnimes', async (params, { dispatch, getState }) => {
  try {
    const { apiPagination, films } = getState().posts;

    if (apiPagination.has_next_page) {
      const {
        data: {
          data,
          pagination,
        },
      } = await getList({page: apiPagination.current_page + 1, limit: 25});

      dispatch(updateCurrentPage(pagination.current_page));
      dispatch(updateItemsCount(pagination.items.count + apiPagination.items.count));
      dispatch(updatePosts(films.concat(data)));
    }
  } catch (error) {
    console.log(error);
  }
});

export const getAnime = createAsyncThunk(
  'posts/getOneAnime',
  async (id: number, { dispatch }) => {
    try {
      const { data: { data } } = await getOne(id);
      dispatch(updateCurrentAnime(data));
    } catch (error) {
      console.log(error);
    }
  },
);

export const getAllGenres = createAsyncThunk(
  'posts/getAllGenres',
 async (_, { dispatch }) => {
   try {
      const { data: { data } } = await getGenres();
      const filteredData = data.filter((genre, genrePosition, genresArray) => {
        return genresArray.findIndex((g) => g.mal_id === genre.mal_id) === genrePosition;
      });
      dispatch(updateGenres(filteredData));
   } catch (error) {
     console.log(error);
   }
 },
);

export default {
  getAnimes,
  getMoreAnimes,
  getAnime,
  getAllGenres,
};
