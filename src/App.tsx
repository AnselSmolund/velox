import { CssBaseline, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { Riders } from "./Riders";
import { darkTheme, mainTheme } from "./style/theme";
import { Routes, Route } from "react-router-dom";
import { Sponsors } from "./Sponsors";
import { Calendar } from "./Calendar";
import { Contact } from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/riders",
    element: <Riders />,
  },
]);

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/riders" element={<Riders />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
};
