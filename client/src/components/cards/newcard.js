import React, { useState} from "react";
import {
  Box,
  Stack,
  Button,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import axios from "axios";
import { Link } from 'react-router-dom';
import UploadAndDisplayImage from "../uploadImage";

const Register = (props) => {
  const theme = useTheme()
  //const cardRef = useRef();
  const [card, setCard] = useState({
    image: null,
    description: "",
    price: 0,
  });

  const [image, setImage] = useState(undefined);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [filename, setFileName] = useState(0);
  const formData = new FormData();

  const handleSubmit = (event) => {
    let userDetails = JSON.parse(localStorage.getItem('user'));
    formData.append("price", price)
    formData.append("description", description)
    formData.append('file', image);
    formData.append('filename', image["selectedImage"]["name"]);
    formData.append("email", userDetails['email'])
    
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }
    
    axios
      .post("/api/cards", formData, config)
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
          <UploadAndDisplayImage name="myImage" type="file" onChange={event => setImage(event)}/>
          <InputLabel>Description</InputLabel>
          <Input type="text" name="description" onChange={event => setDescription(event.target.value)} />
          <InputLabel>Price</InputLabel>
          <Input name="price" placeholder="$" onChange={event => setPrice(event.target.value)} />
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