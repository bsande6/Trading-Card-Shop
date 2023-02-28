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
import { useNavigate } from "react-router-dom";

const Register = (props) => {

  const theme = useTheme()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const config = {
    headers: {
      "Authorization": `Key key=123456789`,
      "Content-Type": "application/json",
      "Cache-Control": 'no-cache',
      "Pragma": 'no-cache',
      "Expires": '0'
    }
  }

  const navigate = useNavigate()

  // useEffect(() => {
  //   axios
  //     .get("/api/", config)
  //     .then((response) => {
  //       console.log(response.data)
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    setUser({
      ...user,
      "password": password
    })
    console.log(user)
    let res = axios.post("/api/users", user)

    if (res.status == 200) {
      return navigate('/home', {replace : false}), [navigate]
    }
  };

  return (
    <div>
      <Typography align="center" variant="h3">
        Register Account
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Stack spacing={2} sx={{ width: "50vw" }}>
          <InputLabel>Email</InputLabel>
          <Input name="email" onChange={handleChange} />
          <InputLabel>Password</InputLabel>
          <Input type="password" name="password" onChange={event => setPassword(event.target.value)} />
          <InputLabel>Confirm Password</InputLabel>
          <Input type="password" name="confirmPass" onChange={event => setConfirmPass(event.target.value)} />
          <PasswordChecklist
            rules={["minLength", "number", "match"]}
            minLength={5}
            value={password}
            valueAgain={confirmPass}
            onChange={(isValid) => { }}
          />
          <Button variant="contained" disableFocusRipple={true} sx={{ color: theme.palette.text.primary }} onClick={handleSubmit}>
            Register
          </Button>
          <Link to="/">
            <Button variant="contained">
              Have an account?
            </Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
};

export default Register;