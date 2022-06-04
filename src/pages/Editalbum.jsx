import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import useAlbums from "../hook/useAlbums";

const Editalbum = () => {
  const {
    handlerOnChangeInpitEdit,
    handleSubmitEdit,
    getAlbumItem,
    title,
    subtitle,
    about,
    imgURL,
    validURL,
    album,
  } = useAlbums();
  // const [album, setAlbum] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goToAlbumsPage = () => {
    navigate(`/albumspage`);
  };
  let ID = id.replace(/[^\d]/g, "");
  useEffect(() => {
    getAlbumItem(ID);
  }, [id]);

  const handlerOnChange = (e) => {
    handlerOnChangeInpitEdit(e);
  };
  const handleSubmit = (e) => {
    handleSubmitEdit(e, goToAlbumsPage, ID);
  };

  return (
    <>
      <Box>
        <Button sx={{ m: 2 }} onClick={goBack} variant="contained" size="small">
          Go back
        </Button>
      </Box>
      {album && (
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
      )}
    </>
  );
};

export default Editalbum;
