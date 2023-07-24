import { createTheme, ThemeOptions } from "@mui/material/styles";

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
  },
};

export const theme = createTheme(darkThemeOptions, {
  palette: {
    primary: {
      main: '#FECE03',
      contrastText: '#121212',
    },
    secondary: {
      main: '#121212',
    },
  },
});
