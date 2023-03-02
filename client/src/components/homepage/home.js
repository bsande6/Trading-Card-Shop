import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from '@emotion/react';
import {
    Stack,
    Typography,
    ImageList,
    ImageListItem
} from "@mui/material";
import MainAppBar from '../homepage/mainmenu';


// function refreshPage(){ 
//     window.location.reload(); 
// }



const Home = (props) => {
    //const theme = useTheme();

    const [items, setItems] = useState(
        []
    );
    
    function CardData(){
        useEffect(() => {
            console.log(localStorage.getItem('user'))
            let userDetails = JSON.parse(localStorage.getItem('user'));
            axios
                .get("/api/users/cards", {
                    params: {
                        email: userDetails['email'],
                    }
                }).then((res)=>{
                    setItems(res.data["cards"]);
                   
                }).catch(err=>console.log(err));
        }, []);
    } 

   
    function MyList() {
        console.log(items)
        return (
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {items.map((item) => (
              <ImageListItem key={item.image}>
                <figure>
                    <img
                    src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                    <figcaption>{"$" + item.price + " " + item.description}</figcaption>
                </figure>
              </ImageListItem>
            ))}
          </ImageList>
       );
    }
    
    CardData()

        return (
            <div style={{ height: 400, width: '100%' }}>
                <MainAppBar/>
                <Stack direction="column" alignItems="center" sx={{ padding: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                        {" "}
                        Your Cards
                    </Typography>
                    <MyList/>
                </Stack>
            </div>
        );
    };
export default Home;