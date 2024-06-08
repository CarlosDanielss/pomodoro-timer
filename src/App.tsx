import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { CyclesContextProvier } from "./contexts/cyclesContext";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvier>
          <Router />
        </CyclesContextProvier>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
