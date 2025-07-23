import type { Components } from '@mui/material/styles';
import palettes from './palettes';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    buttonOne: true;
    buttonTwo: true;
  }
};

const components: Components = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        '&.Mui-expanded': {
          margin: '0px !important',
        },
        '&$expanded': {
        margin: '0px', 
        }
      },
      expanded: {
        margin: '0px',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    variants: [
      {
        props: { variant: 'buttonOne' },
        style: {
          backgroundColor: 'white',
          color: 'black',
          '&:hover': {
            backgroundColor: palettes.lightGray.main,
          },
          border: `1px solid ${palettes.lightGray.main}`,
          borderRadius: '.4rem',
        },
      },
      {
        props: { variant: 'buttonTwo' },
        style: {
          backgroundColor: palettes.purple.main,
          color: 'white',
          '&:hover': {
            backgroundColor: palettes.darkPurple.main,
          },
          borderRadius: '.4rem',
        },
      },
    ],
  },
};

export default components;
