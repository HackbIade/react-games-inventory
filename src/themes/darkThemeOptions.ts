import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
  },
};

export const theme = createTheme(darkThemeOptions);
