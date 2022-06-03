import React from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../hook/useAuth";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";

const Loginpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const fromPage = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;
    signIn(user, () => {
      navigate(fromPage, { replace: true });
    });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      display="flex"
      alignItems="center"
      flexDirection="column"
      mt="10%"
      onSubmit={handleSubmit}
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input
          name="username"
          id="component-helper"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Enter your name
        </FormHelperText>
      </FormControl>
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </Box>
  );
};

export { Loginpage };
