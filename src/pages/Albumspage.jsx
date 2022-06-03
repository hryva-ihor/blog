import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Button, ImageList } from "@mui/material";
import { Albumsitem } from "../components/Albumsitem";
import { Link } from "react-router-dom";
import { getAlbumsData } from "../services/album-services";

const Blogpage = () => {
  const [albums, setAlbums] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const albumQuery = searchParams.get("album") || ``;
  useEffect(() => {
    getAlbumsData().then(({ data }) => setAlbums(data.reverse()));
  }, []);

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
