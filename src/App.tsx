import { CssBaseline, Switch, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { Home } from "./Home";
import { darkTheme, mainTheme } from "./style/theme";

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
      <CssBaseline />
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Home />
      </Container>
    </ThemeProvider>
  );
};
