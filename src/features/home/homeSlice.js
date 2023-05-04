import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  suites: [],
  loading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchSuitesRequest: (state) => {
      state.loading = true;
    },
    fetchSuitesSuccess: (state, action) => {
      state.suites = action.payload;
      state.loading = false;
    },
    fetchSuitesFailure: (state) => {
      state.loading = false;
    },
    toggleSuiteSelection: (state, action) => {
      const suiteId = action.payload;
      const suite = state.suites.find((suite) => suite.seo_suites.some((seoSuite) => seoSuite.id === suiteId));

      if (suite) {
        const seoSuite = suite.seo_suites.find((seoSuite) => seoSuite.id === suiteId);
        if (seoSuite) {
          seoSuite.is_selected = !seoSuite.is_selected;
        }
      }
    },
  },
});

export const { fetchSuitesRequest, fetchSuitesSuccess, fetchSuitesFailure, toggleSuiteSelection } = homeSlice.actions;
export const fetchSuites = () => (dispatch) => {
  dispatch(fetchSuitesRequest());
};

export default homeSlice.reducer;
