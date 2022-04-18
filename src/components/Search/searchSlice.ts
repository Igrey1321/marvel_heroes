import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface searchState {
  search: string;
}

const initialState: searchState = { search: '' };

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchString: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { addSearchString } = searchSlice.actions;

export default searchSlice.reducer;
