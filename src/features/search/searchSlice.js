import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchResults: [],
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchValue, setSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
