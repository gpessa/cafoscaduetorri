import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const PALETTE = {
  almond: "#f2f2f2",
  platinum: "#fafafa",
  davys_grey: "#464749",
  dim_gray: "#6a6e74",
  dark_gray: "#333438",
  castleton_green: "#1C875F"
}

export const BREAKPOINT = "md"

export const PRODUCT_GUTTER = 5


declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    highlight: true;
    small: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    warm1: Palette["primary"]
    warm2: Palette["primary"]
    darkGray: Palette["primary"]
    black: Palette["primary"]
  }
  interface PaletteOptions {
    warm1: PaletteOptions["primary"]
    warm2: PaletteOptions["primary"]
    darkGray: PaletteOptions["primary"]
    black: PaletteOptions["primary"]
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
      primary: "#FFFFFF"
    },
    primary: {
      main: PALETTE.castleton_green,
    },
    black: {
      main: "#000",
    },
    warm1: {
      main: PALETTE.platinum,
    },
    warm2: {
      main: PALETTE.almond,
    },
    darkGray: {
      main: PALETTE.dark_gray,
    }
  }
})


const theme = createTheme(themePalette, {
  shape: {
    borderRadius: 20,
  },
  spacing: (factor: number) => `${7 * factor}px `,
  typography: {
    highlight: {
      backgroundColor: PALETTE.castleton_green,
      fontWeight: "bold",
      paddingRight: 2,
      paddingLeft: 2,
      marginRight: 3,
      marginLeft: 3,
      color: '#FFF',
    },
    body1: {
      color: 'rgba(51,61,73,0.76)'
    },
    body2: {
      color: 'rgba(51,61,73,0.76)'
    },
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
      color: PALETTE.dark_gray
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
    // MuiTableRow: {
    //   styleOverrides: {
    //     root: {
    //       "&:nth-of-type(even)": {
    //         backgroundColor: themePalette.palette.common.white,
    //       },
    //       "&:nth-of-type(odd)": {
    //         backgroundColor: "#f7f7f7"//themePalette.palette.warm2.light,
    //       },
    //     },
    //   },
    // },
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
