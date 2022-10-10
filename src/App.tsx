import { ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledProvider } from "styled-components";

import { AppRouter } from "./router/AppRouter";
import { GlobalState } from "./context/GlobalState";

import { theme } from "./themes";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <StyledProvider theme={theme}>
          <AppRouter />
        </StyledProvider>
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
