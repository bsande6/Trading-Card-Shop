import * as React from 'react';
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@emotion/react';
import {
    Box,
    Stack,
    Button,
    Input,
    InputLabel,
    Typography,
    Tab,
    Tabs,
    Select,
    MenuItem,
} from "@mui/material";
import MainAppBar from '../homepage/mainmenu';
// import { Link } from 'react-router-dom';
// import FriendCalendar from '../status/viewcalendar';
// import GiveActivity from './activity';
// import ViewCal from '../status/viewcalendar';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function refreshPage(){ 
    window.location.reload(); 
}

const Home = (props) => {
    const theme = useTheme();

    return (
        <div style={{ height: 400, width: '100%' }}>
            <MainAppBar/>
            <Stack direction="column" alignItems="center" sx={{ padding: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                    {" "}
                    Your Cards
                </Typography>
            </Stack>
        </div>
    );
};
export default Home;