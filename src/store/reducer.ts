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
  animeSafeForWifeFilter: true,
  animerRatingFilter: 'g',
  animeSortFilter: 'title',
  // animeStatusFilter: null,
  // animeStartDateFilter: '',
  // animeEndDateFilter: '',
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

    updateSearchString: (state, { payload }) => {
      state.animeSearchString = payload;
    },
    updateAnimeGenresFilter: (state, { payload }) => {
      state.animeGenresFilter = payload;
    },
    updateAnimeTypesFilter: (state, { payload }) => {
      state.animeTypesFilter = payload;
    },
    updateAnimeMinScoreFilter: (state, { payload }) => {
      state.animeMinScoreFilter = payload;
    },
    updateAnimeMaxScoreFilter: (state, { payload }) => {
      state.animeMaxScoreFilter = payload;
    },
    updateAnimeSortDirection: (state, { payload }) => {
      state.animeSortDirection = payload;
    },
    updateAnimeSafeForWifeFilter: (state, { payload }) => {
      state.animeSafeForWifeFilter = payload;
    },
    updateAnimerRatingFilter: (state, { payload }) => {
      state.animerRatingFilter = payload;
    },
    updateAnimeSortFilter: (state, { payload }) => {
      state.animeSortFilter = payload;
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
  updateSearchString,
  updateAnimeGenresFilter,
  updateAnimeTypesFilter,
  updateAnimeMinScoreFilter,
  updateAnimeMaxScoreFilter,
  updateAnimeSortDirection,
  updateAnimeSafeForWifeFilter,
  updateAnimerRatingFilter,
  updateAnimeSortFilter,
} = postsSlice.actions;

export default postsSlice.reducer;
