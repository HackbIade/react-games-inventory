import { ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledProvider } from "styled-components";

import { theme } from "./themes";
import { AppRouter } from "./router";
import { GlobalState, GamesState, ConsolesState } from "./context";
import { AuthProvider } from "./context/AuthContext/AuthState";

function App() {
  return (
    <GlobalState>
      <AuthProvider>
        <GamesState>
          <ConsolesState>
            <ThemeProvider theme={theme}>
              <StyledProvider theme={theme}>
                <AppRouter />
              </StyledProvider>
            </ThemeProvider>
          </ConsolesState>
        </GamesState>
      </AuthProvider>
    </GlobalState>
  );
}

export default App;
