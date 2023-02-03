import React from "react";

import { useSelector } from "react-redux";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Image from "./pages/Image";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: useSelector((state) => state.theme).theme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<Image />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
