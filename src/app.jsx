/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
import { createTheme ,ThemeProvider } from '@mui/material/styles';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import Router from 'src/routes/sections';


// ----------------------------------------------------------------------
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider theme={theme} >
      <Router />
    </ThemeProvider>
  );
}
