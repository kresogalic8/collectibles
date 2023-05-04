import { styled } from '@mui/system';
import { Box, Button, IconButton } from '@mui/material';

export const SearchResultWrapper = styled(Box)(() => ({
  marginTop: '20px',
}));

export const ResultBox = styled(Box)(() => ({
  border: '1px solid #EAEAEB',
  borderRadius: '16px',
}));

export const SuiteBox = styled(Box)(() => ({
  padding: '20px',
  display: 'flex',
  width: '100%',
}));

export const SuiteContentBox = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const SuiteSeparator = styled(Box)(() => ({
  borderBottom: '1px solid #EAEAEB',
}));

export const ImageWrapper = styled(Box)(() => ({
  marginRight: 20,
  width: 118,
  height: 118,

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

export const NoImageBox = styled(Box)(() => ({
  width: 118,
  height: 118,
  backgroundColor: '#EAEAEB',
  marginRight: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const DetailsButton = styled(Button)(() => ({
  borderRadius: 30,
  fontWeight: 700,
}));

export const RoundedStarIconButton = styled(IconButton)(({ isSelected, theme }) => ({
  borderRadius: '50%',
  color: isSelected ? '#fff' : '#ABAEB3',
  backgroundColor: isSelected ? theme.palette.primary.main : '#EAEAEB',
}));
