import { Container } from '@mui/material';
import AppBar from './AppBar';

const AppContainer = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container
        maxWidth="sm"
        sx={{
          marginTop: '-28px',
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default AppContainer;
