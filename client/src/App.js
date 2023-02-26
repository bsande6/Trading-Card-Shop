import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import Login from "./components/start/login";


function App() {
  const theme = createTheme({
    palette: {
      type: "dark",
      text: {
        primary: "#ffffff",
        secondary: "#000000",
      },
      primary: {
        main: "#98AFC7",
      },
      secondary: {
        main: "#f48fb1",
      },
      background: {
        default: "#404040",
        paper: "#8c8c8c",
      },
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
  });
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;