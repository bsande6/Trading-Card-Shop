import React, { useState, useEffect } from "react";
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
import { useTheme } from "@mui/material";
import axios from "axios";
import PasswordChecklist from "react-password-checklist";
import { Link } from 'react-router-dom';
import UploadAndDisplayImage from "../uploadImage";

const Register = (props) => {


  const theme = useTheme()
  const [card, setCard] = useState({
    imagesrc: UploadAndDisplayImage,
    description: "",
    price: "",
  });

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setCard({
      ...card,
      [event.target.name]: value,
    });
  };

   const handleSubmit = (event) => {
     console.log(JSON.stringify(card));
    axios
      .post("/api/cards", card)
      .then((response) => console.log(response.status))
      .catch((err) => console.log(err));
   };

  return (
    <div>
      <Typography align="center" variant="h3">
        Create Card
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Stack spacing={2} sx={{ width: "50vw" }}>
          <UploadAndDisplayImage/>
          <InputLabel>Description</InputLabel>
          <Input name="description" onChange={event => setDescription(event.target.value)} />
          <InputLabel>Price</InputLabel>
          <Input name="price" onChange={event => setPrice(event.target.value)} />
          <Link to="/home">
            <Button variant="contained"  onClick={handleSubmit}>
              Submit
            </Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
};

export default Register;