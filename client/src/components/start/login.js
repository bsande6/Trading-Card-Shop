import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

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

const Login = (props) => {
  const theme = useTheme();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const authenticate = useCallback(() => {
    console.log(user)
    axios
      .post("/api/users/auth", user)
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem('user', JSON.stringify(user))
          return navigate('/home', {replace : false}), [navigate]
        }
      })
      .catch((err) => alert(err.response["data"]));    
  })

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value,
    });
  };

  const HandleSubmit = (event) => {
    console.log(JSON.stringify(user));
    axios
      .post("http://localhost:5000/api/auth", user)
      .then((response) => console.log(response.status))
      .then(localStorage.setItem('user', JSON.stringify(user)))
      .catch((err) => console.log(err));
  };
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin : 10,
        padding : 2
      }}
    >
      <Typography align="center" variant="h3" marginBottom="10px">
        Trading Card Shop
      </Typography>
       <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Stack spacing={3} sx={{ width: "50vw" }}>
          <InputLabel>Email</InputLabel>
          <Input name="email" onChange={handleChange} />
          <InputLabel>Password</InputLabel>
          <Input type="password" name="password" onChange={handleChange} />
          <Button
            variant="contained"
            disableFocusRipple={true}
            sx={{ color: theme.palette.text.primary }}
            onClick={authenticate}
          >
            Login
          </Button>
          <Link to="/register">
            <Button variant="contained">
              Create Account
            </Button>
          </Link>
        </Stack>
      </Box> 
    </Stack>
  );
};

export default Login;
