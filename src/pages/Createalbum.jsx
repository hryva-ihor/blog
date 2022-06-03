import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { addNewAlbum } from "../services/album-services";

const Createalbum = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubitle] = useState("");
  const [about, setAbout] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [validURL, setValidURL] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handlerOnChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "subtitle":
        setSubitle(e.target.value);
        break;
      case "about":
        setAbout(e.target.value);
        break;
      case "imgURL":
        setImgURL(e.target.value);
        setValidURL(
          e.target.value.split("/")[0] === "https:" &&
            e.target.value.includes("https://", 0)
        );
        break;
      default:
        alert("something wrong");
    }
  };
  const validImgURL = (imgURL) => {
    if (imgURL.includes("https://", 0)) {
      setValidURL(true);
      return true;
    }
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const subtitle = form.subtitle.value;
    const about = form.about.value;
    const imgURL = form.imgURL.value;
    if (form && title && about && validImgURL(imgURL)) {
      setTitle("");
      setSubitle("");
      setAbout("");
      setImgURL("");
      setValidURL(true);
      const newAlbum = {
        title: title,
        subtitle: subtitle,
        about: about,
        img: imgURL,
      };
      addNewAlbum(newAlbum);
      goBack();
    } else {
      return false;
    }
  };

  return (
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
        {/* <FormHelperText id="component-helper-text">(album name)</FormHelperText> */}
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
        {/* <FormHelperText id="component-helper-text">()</FormHelperText> */}
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
        {/* <FormHelperText id="component-helper-text">
          Enter text about album
        </FormHelperText> */}
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
  );
};

export { Createalbum };
