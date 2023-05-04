import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledInputBase, StyledPaper } from './styles';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../features/search/searchSlice';

function SearchInput({ value, onSearch }) {
  const [searchTerm, setSearchTerm] = useState(value);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      dispatch(setSearchValue(event.target.value));
      onSearch(event.target.value);
    }
  };

  return (
    <StyledPaper component="form" elevation={0}>
      <StyledInputBase
        placeholder="What do you want to find?"
        inputProps={{
          'aria-label': 'search',
          style: {
            textAlign: 'center',
          },
        }}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSubmit(event);
          }
        }}
      />
    </StyledPaper>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func,
};

export default SearchInput;
