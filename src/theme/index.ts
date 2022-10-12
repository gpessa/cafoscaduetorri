import {
  createTheme,
  responsiveFontSizes,
  Breakpoint,
} from '@mui/material/styles';

const PALETTE = {
  MetallicSunburst: '#998D5B',
  Ecru: '#B8A973',
  Alabaster: '#E5E7D8',
  Kobe: '#832E10',
  Xiketic: '#131121',
  Artichoke: '#868960',
  DarkOliveGreen: '#607045',
  Bone: '#D7D1BA',
};

export const BREAKPOINT: Breakpoint = 'md';

export const PRODUCT_GUTTER = 5;

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    small: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    artichoke: PaletteColor;
    ecru: PaletteColor;
    metallicSunburst: PaletteColor;
    alabaster: PaletteColor;
    kobe: PaletteColor;
    bone: PaletteColor;
  }
  interface PaletteOptions {
    artichoke: PaletteColorOptions;
    ecru: PaletteColorOptions;
    metallicSunburst: PaletteColorOptions;
    alabaster: PaletteColorOptions;
    kobe: PaletteColorOptions;
    bone: PaletteColorOptions;
  }
}

const FONT_BASE = 'Raleway';
const FONT_TITLE = 'Lora';

const themePalette = createTheme({
  typography: {
    fontFamily: FONT_BASE,
  },
  palette: {
    text: {
      primary: PALETTE.Xiketic,
    },
    bone: {
      main: PALETTE.Bone,
    },
    primary: {
      main: PALETTE.DarkOliveGreen,
    },
    secondary: {
      main: PALETTE.Kobe,
    },
    artichoke: {
      main: PALETTE.Artichoke,
    },
    ecru: {
      main: PALETTE.Ecru,
    },
    metallicSunburst: {
      main: PALETTE.MetallicSunburst,
    },
    alabaster: {
      main: PALETTE.Alabaster,
    },
    kobe: {
      main: PALETTE.Kobe,
    },
  },
});

const theme = createTheme(themePalette, {
  shape: {
    borderRadius: false,
  },
  spacing: (factor: number) => `${7 * factor}px `,
  typography: {
    small: {
      fontSize: '0.85rem',
    },
    h1: {
      fontFamily: FONT_TITLE,
      fontWeight: 600,
      fontSize: 78,
      lineHeight: 74 / 91,
    },
    h2: {
      fontFamily: FONT_TITLE,
      fontWeight: 600,
      fontSize: 57,
      lineHeight: 56 / 57,
    },
    h3: {
      fontFamily: FONT_TITLE,
      fontWeight: 600,
      lineHeight: 1,
      fontSize: 35,
    },
    h4: {
      // fontFamily: FONT_TITLE,
      fontWeight: 600,
      lineHeight: 1.1,
      fontSize: 28,
    },
    h5: {
      fontFamily: FONT_TITLE,
      fontWeight: 600,
      lineHeight: 1.1,
      fontSize: 23,
    },
    h6: {
      fontFamily: FONT_TITLE,
      fontWeight: 600,
      lineHeight: 1.1,
      fontSize: 18,
    },
    caption: {
      fontWeight: 600,
      color: PALETTE.Alabaster,
    },
    body2: {
      fontSize: 24,
    },
  },
  components: {
    MuiTableCell: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          fontSize: '1rem',
          color: 'inherit',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: '0.5em',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
