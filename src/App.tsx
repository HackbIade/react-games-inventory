import { ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledProvider } from "styled-components";

import { theme } from "./themes";
import { AppRouter } from "./router";
import { GlobalState, GamesState, ConsolesState } from "./context";

function App() {
  return (
    <GlobalState>
      <GamesState>
        <ConsolesState>
          <ThemeProvider theme={theme}>
            <StyledProvider theme={theme}>
              <AppRouter />
            </StyledProvider>
          </ThemeProvider>
        </ConsolesState>
      </GamesState>
    </GlobalState>
  );
}

export default App;
