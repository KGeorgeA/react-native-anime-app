/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { State } from '../utils/types';

const initialState: State = {
  films: [],
  refresh: false,
  currentAnime: null,
  genres: [],
  apiPagination: {
    current_page: 1,
    items: {
      count: 25,
    },
  },
  isFilterDrawerShown: false,
  // filters
  animeSearchString: '',
  animeGenresFilter: undefined,
  animeTypesFilter: undefined,
  animeMinScoreFilter: 0,
  animeMaxScoreFilter: 0,
  animeSortDirection: 'asc',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updatePosts: (state, { payload }) => {
      state.films = payload;
    },
    updateCurrentAnime: (state, { payload }) => {
      state.currentAnime = payload;
    },
    toggleRefresh: (state, { payload }) => {
      state.refresh = payload;
    },
    updateApiPagination: (state, { payload }) => {
      state.apiPagination = payload;
    },
    updateCurrentPage: (state, { payload }) => {
      state.apiPagination.current_page = payload;
    },
    updateItemsCount: (state, { payload }) => ({
      ...state,
      apiPagination: {
        ...state.apiPagination,
        items: {
          ...state.apiPagination.items,
          count: payload,
        },
      },
    }),
    updateGenres: (state, { payload }) => {
      state.genres = payload;
    },
    toggleFilterDrawerView: (state) => {
      state.isFilterDrawerShown = !state.isFilterDrawerShown;
    },
  },
});

export const {
  updatePosts,
  updateCurrentAnime,
  toggleRefresh,
  updateApiPagination,
  updateCurrentPage,
  updateItemsCount,
  updateGenres,
  toggleFilterDrawerView,
} = postsSlice.actions;

export default postsSlice.reducer;
