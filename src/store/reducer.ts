/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { State } from '../utils/types';

const initialState: State = {
  films: [],
  refresh: false,
  currentAnime: null,
  apiPagination: {
    current_page: 1,
    items: {
      count: 25,
    },
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updatePosts: (state, { payload }) => {
      state.films = payload;
    },
    updateCurrentAnime: (state, { payload }) => ({
      ...state,
      currentAnime: payload,
    }),
    toggleRefresh: (state, { payload }) => ({
      ...state,
      refresh: payload,
    }),
    updateApiPagination: (state, { payload }) => ({
      ...state,
      apiPagination: payload,
    }),
    updateCurrentPage: (state, { payload }) => ({
      ...state,
      apiPagination: {
        ...state.apiPagination,
        current_page: payload,
      },
    }),
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
  },
});

export const {
  updatePosts,
  updateCurrentAnime,
  toggleRefresh,
  updateApiPagination,
  updateCurrentPage,
  updateItemsCount,
} = postsSlice.actions;

export default postsSlice.reducer;
