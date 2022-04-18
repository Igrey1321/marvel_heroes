import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface filterState {
  gender: string;
}

const initialState: filterState = { gender: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilterString: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
  },
});

export const { addFilterString } = filterSlice.actions;

export default filterSlice.reducer;
