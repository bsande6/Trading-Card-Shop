import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/start/login";
import Register from "./components/start/register.js";
import Home from "./components/homepage/home.js";
import NewCard from "./components/cards/newcard.js";
import Listings from "./components/cards/cardlistings.js";
import Cart from "./components/cards/cart.js"


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
            <Route path="/register" element={<Register/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/newcard" element={<NewCard/>} />
            <Route path="/listings" element={<Listings/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;