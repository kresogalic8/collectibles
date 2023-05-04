import { styled } from '@mui/system';
import { Paper, InputBase } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid #EAEAEB',
  padding: 0,

  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
  height: '58px',
  transition: theme.transitions.create('width'),
  width: '100%',
  '&:focus': {
    width: { md: '25ch' },
    borderColor: theme.palette.primary.main,
  },
}));
