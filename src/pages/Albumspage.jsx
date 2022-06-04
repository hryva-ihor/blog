import { Box } from "@mui/system";
import React from "react";
import { Button, ImageList } from "@mui/material";
import { Albumsitem } from "../components/Albumsitem";
import { Link } from "react-router-dom";
import useAlbums from "../hook/useAlbums";

const Blogpage = () => {
  const { albums } = useAlbums();

  return (
    <Box>
      <Button sx={{ mt: 2 }} variant="contained">
        <Link className="nav-link nav-link__dark" to={"/albumspage/new"}>
          Add album
        </Link>
      </Button>
      <ImageList sx={{ width: "100%", height: "auto" }}>
        {albums.map((album) => {
          return <Albumsitem key={album.id} album={album} />;
        })}
      </ImageList>
    </Box>
  );
};

export default Blogpage;
