import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import { updateAlbum } from "../services/album-services";

const Editalbum = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subtitle, setSubitle] = useState("");
  const [about, setAbout] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [validURL, setValidURL] = useState(false);

  const goBack = () => {
    navigate(-1);
  };
  let ID = id.replace(/[^\d]/g, "");
  useEffect(() => {
    fetch(`https://61e7eaede32cd90017acbe93.mockapi.io/albums/${ID}`).then(
      (res) =>
        res.json().then((album) => {
          // setAlbum(data);
          setTitle(album.title);
          setSubitle(album.subtitle);
          setAbout(album.about);
          setImgURL(album.img);
          setValidURL(true);
        })
    );
  }, [id]);

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
    if (subtitle && title && about && validImgURL(imgURL)) {
      e.preventDefault();
      const editAlbum = {
        title: title,
        subtitle: subtitle,
        about: about,
        img: imgURL,
      };
      updateAlbum(editAlbum, ID);
      // signIn(user, () => {
      //   navigate(fromPage, { replace: true });
      // });
      navigate({ pathname: `/albumspage` });
    } else {
      e.preventDefault();
      return false;
    }
  };

  return (
    <>
      <Box>
        <Button sx={{ m: 2 }} onClick={goBack} variant="contained" size="small">
          Go back
        </Button>
      </Box>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "100%", m: 1, height: "fit-content" },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        alignItems="center"
        flexDirection="column"
        onSubmit={handleSubmit}
      >
        <FormControl variant="standard">
          {/* <InputLabel htmlFor="component-helper">Title</InputLabel> */}
          <Input
            error={!title}
            value={title}
            onChange={handlerOnChange}
            name="title"
            multiline
            id="component-helper"
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">Title</FormHelperText>
        </FormControl>
        <FormControl variant="standard">
          {/* <InputLabel htmlFor="component-helper">Subtitle</InputLabel> */}
          <Input
            error={!subtitle}
            value={subtitle}
            onChange={handlerOnChange}
            name="subtitle"
            multiline
            id="component-helper"
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">Subtitle</FormHelperText>
        </FormControl>
        <FormControl variant="standard">
          {/* <InputLabel htmlFor="component-helper">About</InputLabel> */}
          <Input
            error={!about}
            value={about}
            onChange={handlerOnChange}
            name="about"
            // rows="3"
            multiline
            id="component-helper"
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">About</FormHelperText>
        </FormControl>
        <FormControl variant="standard">
          {/* <InputLabel htmlFor="component-helper">URL</InputLabel> */}
          <Input
            error={!validURL}
            value={imgURL}
            onChange={handlerOnChange}
            name="imgURL"
            multiline
            id="component-helper"
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            URL (https://---link---)
          </FormHelperText>
        </FormControl>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Editalbum;
