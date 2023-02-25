import logo from './logo.svg';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';

import Login from "./components/start/login";
import Home from "./components/home";

function App() {
  const theme = createTheme({
    palette: {
      type: "dark",
      text: {
        primary: "#ffffff",
        secondary: "#000000",
      },
      primary: {
        main: "#5A8BC6",
      },
      secondary: {
        main: "#f48f32",
      },
      background: {
        default: "#81858A",
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
