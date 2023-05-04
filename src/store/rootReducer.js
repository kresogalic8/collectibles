import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import searchReducer from '../features/search/searchSlice';

const rootReducer = combineReducers({
  home: homeReducer,
  search: searchReducer,
});

export default rootReducer;
