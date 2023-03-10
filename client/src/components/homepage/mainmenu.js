import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Button,
    Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const MainAppBar = () => {
    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Stack direction="row" spacing={4} align="right">
                    <Link to="/home">
                        Home
                    </Link>
                    <Link to="/newcard">
                        Create Card
                    </Link>
                    <Link to="/listings">
                        Card Listings
                    </Link>
                    <Link to="/cart">
                        Cart
                    </Link>
                    <Link to="/" onClick={() => localStorage.clear()}>
                      Logout
                    </Link>
                    
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
export default MainAppBar;


