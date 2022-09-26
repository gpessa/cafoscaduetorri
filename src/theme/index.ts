import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const PALETTE = {
  MetallicSunburst: "#998D5B",
  Ecru: "#B8A973",
  Alabaster: "#E5E7D8",
  Kobe: "#832E10",
  Xiketic: "#131121",
  Artichoke: "#868960",
  DarkOliveGreen: "#607045"
}


export const BREAKPOINT = "md"

export const PRODUCT_GUTTER = 5


declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    small: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    artichoke: Palette["primary"]
    ecru: Palette["primary"]
    metallicSunburst: Palette["primary"]
    alabaster: Palette["primary"]
    kobe: Palette["primary"]

  }
  interface PaletteOptions {
    artichoke: PaletteOptions["primary"]
    ecru: PaletteOptions["primary"]
    metallicSunburst: PaletteOptions["primary"]
    alabaster: PaletteOptions["primary"]
    kobe: PaletteOptions["primary"]

  }
}

const FONT_BASE = "Poppins";
const FONT_TITLE = "Inter"

const themePalette = createTheme({
  typography: {
    fontFamily: FONT_BASE,
  },
  palette: {
    text: {
      primary: PALETTE.Xiketic
    },
    primary: {
      main: PALETTE.DarkOliveGreen,
    },
    secondary: {
      main: PALETTE.Kobe
    },
    artichoke: {
      main: PALETTE.Artichoke
    },
    ecru: {
      main: PALETTE.Ecru
    },
    metallicSunburst: {
      main: PALETTE.MetallicSunburst
    },
    alabaster: {
      main: PALETTE.Alabaster
    },
    kobe: {
      main: PALETTE.Kobe
    }
  }
})


const theme = createTheme(themePalette, {
  shape: {
    borderRadius: 20,
  },
  spacing: (factor: number) => `${7 * factor}px `,
  typography: {
    small: {
      fontSize: "0.85rem",
    },
    h1: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: FONT_TITLE,
      fontSize: 78,
      lineHeight: 74 / 91,
    },
    h2: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: FONT_TITLE,
      fontSize: 57,
      lineHeight: 56 / 57,
    },
    h3: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: FONT_TITLE,
      lineHeight: 1,
      fontSize: 35,
    },
    h4: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: FONT_TITLE,
      lineHeight: 1.1,
      fontSize: 28,
    },
    h5: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: FONT_TITLE,
      lineHeight: 1.1,
      fontSize: 23,
    },
    h6: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: FONT_TITLE,
      lineHeight: 1.1,
      fontSize: 18,
    },
    caption: {
      fontWeight: 600,
      color: PALETTE.Alabaster
    }
  },
  components: {
    MuiTableCell: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          fontSize: "1rem",
          color: 'inherit'
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: "0.5em",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
      defaultProps: {
        variant: "contained",
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          fontWeight: 600
        },
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 'bold'
        }
      }
    }
  },
})

export default responsiveFontSizes(theme)
