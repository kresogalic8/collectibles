import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults, setSearchValue } from '../features/search/searchSlice';
import AppContainer from '../components/AppContainer';

export default function Search() {
  const { term } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = React.useState(term || '');

  const data = useSelector((state) => state.home.suites);
  const searchResults = useSelector((state) => state.search.searchResults);

  React.useEffect(() => {
    setSearchTerm(term || '');
    dispatch(setSearchValue(term || ''));
  }, [term, dispatch]);

  React.useEffect(() => {
    const filteredData = data
      .map((item) => ({
        ...item,
        seo_suites: item.seo_suites.filter((suite) => suite.name.toLowerCase().includes(searchTerm.toLowerCase())),
      }))
      .filter((item) => item.seo_suites.length > 0);

    dispatch(setSearchResults(filteredData));
  }, [searchTerm, data, dispatch]);

  const handleSearch = (term) => (term ? navigate(`/search/${term}`) : navigate('/'));

  return (
    <AppContainer>
      <SearchInput value={searchTerm} onSearch={handleSearch} />

      <SearchResults searchTerm={searchTerm} data={searchResults} />
    </AppContainer>
  );
}
