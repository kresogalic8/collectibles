import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorderOutlined';
import highlightMatch from '../../utils/highlightMatch';

import PropTypes from 'prop-types';
import {
  DetailsButton,
  ImageWrapper,
  NoImageBox,
  ResultBox,
  RoundedStarIconButton,
  SearchResultWrapper,
  SuiteBox,
  SuiteContentBox,
} from './styles';
import { useDispatch } from 'react-redux';
import { toggleSuiteSelection } from '../../features/home/homeSlice';

function SearchResults({ data, searchTerm, loading }) {
  const dispatch = useDispatch();

  const handleToggleSelection = (suiteId) => {
    dispatch(toggleSuiteSelection(suiteId));
  };

  if (loading) {
    return (
      <Box py={5} justifyContent="center" display="flex">
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <>
      {data?.map((result) => (
        <SearchResultWrapper key={result.year}>
          <Typography variant="h5" fontWeight={600} color="#ABAEB3" mb={1}>
            {result.year}
          </Typography>
          <ResultBox>
            {result.seo_suites.map((suite, index) => (
              <SuiteBox
                sx={{
                  borderBottom: index !== result.seo_suites.length - 1 ? '1px solid #EAEAEB' : '',
                }}
                key={suite.id}
              >
                {suite.image ? (
                  <ImageWrapper>
                    <img src={suite.image} alt={suite.name} width={118} height={118} loading="lazy" />
                  </ImageWrapper>
                ) : (
                  <NoImageBox>
                    <Typography variant="p" color="#ABAEB3">
                      No Image
                    </Typography>
                  </NoImageBox>
                )}
                <SuiteContentBox>
                  <Stack alignItems="center" direction="row" justifyContent="space-between">
                    <Typography
                      variant="p"
                      dangerouslySetInnerHTML={{
                        __html: highlightMatch(suite.name, searchTerm),
                      }}
                    />
                    <RoundedStarIconButton
                      aria-label="favorite"
                      size="small"
                      onClick={() => handleToggleSelection(suite.id)}
                      isSelected={suite.is_selected}
                    >
                      <StarIcon />
                    </RoundedStarIconButton>
                  </Stack>

                  <DetailsButton
                    variant="contained"
                    color="inherit"
                    disableElevation
                    sx={{
                      alignSelf: 'flex-start',
                    }}
                  >
                    Details
                  </DetailsButton>
                </SuiteContentBox>
              </SuiteBox>
            ))}
          </ResultBox>
        </SearchResultWrapper>
      ))}
    </>
  );
}

SearchResults.propTypes = {
  data: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
};

export default SearchResults;
