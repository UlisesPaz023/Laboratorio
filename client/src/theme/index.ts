import { createTheme } from '@mui/material/styles';
import palettes from './palettes';
import components from './components';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    primary: {
      main: palettes.primary.main,
    },
    secondary: {
      main: palettes.secondary.main,
    },
  },
  components,
});

export default theme;