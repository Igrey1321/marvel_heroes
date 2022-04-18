import { createSlice } from '@reduxjs/toolkit';
import { HeroProps } from './types';

interface heroState {
  hero: HeroProps | null;
}

const initialState: heroState | null = { hero: null };

export const detailSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    addHero: (state, action) => {
      state.hero = action.payload;
    },
  },
});

export const { addHero } = detailSlice.actions;

export default detailSlice.reducer;
