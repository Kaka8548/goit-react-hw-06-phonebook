import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    add(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteItem(state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
  },
});

export const { add, deleteItem } = contactsSlice.actions;
