import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { query: '' },
  reducers: {
    getQuery(state, { payload }) {
      state.query = payload.toLowerCase();
    },
  },
});

export const { getQuery } = filterSlice.actions;
