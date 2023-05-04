import SearchResults from '../components/SearchResults';
import SearchInput from '../components/SearchInput';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuites } from '../features/home/homeSlice';
import AppContainer from '../components/AppContainer';
import { Box } from '@mui/material';
import CustomTab from '../components/CustomTab';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tabValue, setTabValue] = React.useState(0);

  const { suites, loading } = useSelector((state) => state.home);

  const selectedSuites = React.useMemo(() => {
    return suites
      .map((suite) => {
        return {
          ...suite,
          seo_suites: suite.seo_suites.filter((seoSuite) => seoSuite.is_selected),
        };
      })
      .filter((suite) => suite.seo_suites.length > 0);
  }, [suites]);

  const selectedSuitesCount = React.useMemo(() => {
    return selectedSuites.reduce((acc, suite) => acc + suite.seo_suites.length, 0);
  }, [selectedSuites]);

  const handleTabChange = React.useCallback((newValue) => {
    setTabValue(newValue);
  }, []);

  const handleSearch = (term) => (term ? navigate(`/search/${term}`) : navigate('/'));

  React.useEffect(() => {
    if (!loading && suites.length === 0) {
      dispatch(fetchSuites());
    }
  }, [dispatch, loading, suites]);

  return (
    <AppContainer>
      <SearchInput onSearch={handleSearch} />

      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <CustomTab label="All" active={tabValue === 0} onClick={() => handleTabChange(0)} />
        <CustomTab
          label="Selected"
          active={tabValue === 1}
          onClick={() => handleTabChange(1)}
          count={selectedSuitesCount}
        />
      </Box>

      {tabValue === 0 && <SearchResults data={suites} loading={loading} />}
      {tabValue === 1 && <SearchResults data={selectedSuites} />}
    </AppContainer>
  );
}
