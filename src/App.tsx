import { ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledProvider } from "styled-components";

import { theme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledProvider theme={theme}></StyledProvider>
    </ThemeProvider>
  );
}

export default App;
