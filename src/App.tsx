import { ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledProvider } from "styled-components";
import { AppRouter } from "./router/AppRouter";

import { theme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledProvider theme={theme}>
        <AppRouter />
      </StyledProvider>
    </ThemeProvider>
  );
}

export default App;
