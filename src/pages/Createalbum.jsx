import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import useAlbums from "../hook/useAlbums";

const Createalbum = () => {
  const {
    handlerOnChangeInput,
    handleSubmitEvent,
    title,
    subtitle,
    about,
    imgURL,
    validURL,
  } = useAlbums();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handlerOnChange = (e) => {
    handlerOnChangeInput(e);
  };
  const handleSubmit = (e) => {
    handleSubmitEvent(e, goBack);
  };

  return (
    <>
      <Button sx={{ m: 2 }} onClick={goBack} variant="contained" size="small">
        Go back
      </Button>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "100%", m: 1 },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        alignItems="center"
        flexDirection="column"
        onSubmit={handleSubmit}
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Title</InputLabel>
          <Input
            onChange={handlerOnChange}
            error={!title}
            name="title"
            value={title}
            multiline
            id="component-helper"
            aria-describedby="component-helper-text"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Subtitle</InputLabel>
          <Input
            onChange={handlerOnChange}
            value={subtitle}
            error={!subtitle}
            name="subtitle"
            multiline
            id="component-helper"
            aria-describedby="component-helper-text"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">About album</InputLabel>
          <Input
            onChange={handlerOnChange}
            value={about}
            error={!about}
            name="about"
            multiline
            id="component-helper"
            aria-describedby="component-helper-text"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Img URL</InputLabel>
          <Input
            onChange={handlerOnChange}
            value={imgURL}
            error={!validURL}
            name="imgURL"
            multiline
            id="component-helper"
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            (https://---link---)
          </FormHelperText>
        </FormControl>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </Box>
    </>
  );
};

export { Createalbum };
