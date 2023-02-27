import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
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
            
                    <Link to="/">
                        Logout
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
export default MainAppBar;


