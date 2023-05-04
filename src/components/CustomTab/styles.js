import { Button, Box } from '@mui/material';
import { styled } from '@mui/system';

export const TabButton = styled(Button)(({ theme, active }) => ({
  textTransform: 'none',
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  marginRight: 2,
  minWidth: 0,
  fontWeight: active ? 'bold' : 'normal',
  position: 'relative',
}));

export const CircleBadge = styled(Box)(() => ({
  marginLeft: 5,
  width: 22,
  height: 22,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 12,
  fontWeight: 'bold',
  backgroundColor: '#F2F2F2',
}));
