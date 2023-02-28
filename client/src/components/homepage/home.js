import React, { useState, useEffect } from "react";
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

function CardData(){
    const [data, setData] = useState(
        []
    );
   
    useEffect(() => {
        let userDetails = JSON.parse(localStorage.getItem('user'));
        axios
            .get("/api/users/cards", {
                params: {
                    email: userDetails['email'],
                }
            }).then((res)=>{
                setData(res.data);
                console.log("res", res.data)
            }).catch(err=>console.log(err));
    }, []);
    // <div className = "col-3">
    //                         <div className = "adjust">
    //                             <div className="image">
    //                                 <img width="300" height="300" src={image}></img>
    //                             </div>
    //                             <div className="name">{name}</div>
    //                         </div>
    //                     </div>
    return data;
    // return [allCards];}
} 

const Home = (props) => {
    const theme = useTheme();
    
    let cards = CardData()
    console.log(cards)
    // try{const allCards = cards.map( function (data) {
    //     const name = data.name;

    //     const blob = new Blob([Int8Array.from(data.img.data.data)], {type: data.img.contentType });

    //     const image = window.URL.createObjectURL(blob);

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
    // })
    // return [allCards];}
    // catch(e){ return null;}
    };
export default Home;