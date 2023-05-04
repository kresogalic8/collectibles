import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:term" element={<Search />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
