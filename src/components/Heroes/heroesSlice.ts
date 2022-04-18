import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hero } from '../CardHero/types';

interface heroesListState {
  heroesList: Hero[];
}

const initialState: heroesListState = { heroesList: [] };

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    addHeroesList: (state, action: PayloadAction<Hero[]>) => {
      state.heroesList = action.payload;
    },
  },
});

export const { addHeroesList } = heroesSlice.actions;

export default heroesSlice.reducer;
