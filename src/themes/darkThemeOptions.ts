import { createTheme, ThemeOptions } from "@mui/material/styles";

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
  },
};

export const theme = createTheme(darkThemeOptions, {
  palette: {
    primary: {
      main: "#FECE03",
    },
    secondary: {
      main: "#121212",
    },
  },
});
