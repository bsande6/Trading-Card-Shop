import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from '@emotion/react';
import {
    Stack,
    Button,
    Typography,
    ImageList,
    ImageListItem,
    Box
} from "@mui/material";
import MainAppBar from '../homepage/mainmenu';

const Listings = (props) => {
    const [items, setItems] = useState(
        []
    );
    
    function CardData(){
        useEffect(() => {
            axios
                .get("/api/cards/all_cards", {
                }).then((res)=>{
                    setItems(res.data);
                    console.log("res", res.data)    
                }).catch(err=>console.log(err));
        }, []);
    } 

    CardData()

    const handleSubmit = (image) => {
        let userDetails = JSON.parse(localStorage.getItem('user'));
        console.log(image)
        let body = {
                email: userDetails["email"],
                card: image
               }
        axios
        .post("/api/cart", body)
        .then((response) => {
          console.log(response)
          if (response.status == 200) {
          }
        })
        .catch((err) => alert(err.response["data"]));    
      };
    
    function MyList() {
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
                <Button onClick={(item) => handleSubmit(item)}> 
                    Add to Cart
                </Button>
              </ImageListItem>
            ))}
          </ImageList>
       );
    }
    
        return (
            <div style={{ height: 400, width: '100%' }}>
                <MainAppBar/>
                <Stack direction="column" alignItems="center" sx={{ padding: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                        {" "}
                        Card Listings
                    </Typography>
                    <MyList/>
                </Stack>
            </div>
        );
    };
export default Listings;