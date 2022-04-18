import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from '../components/Heroes/heroesSlice';
import heroReducer from '../pages/detail/detailSlice';
import searchReducer from '../components/Search/searchSlice';
import filterReducer from '../components/Filter/filterSlice';

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
    hero: heroReducer,
    search: searchReducer,
    filter: filterReducer,
  },
});
