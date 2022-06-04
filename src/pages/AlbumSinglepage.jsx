import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { deletAlbum } from "../services/album-services";
import useAlbums from "../hook/useAlbums";

const AlbumSinglepage = () => {
  const { handleDeletAlbum } = useAlbums();
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goAlbumspage = () => {
    navigate({ pathname: `/albumspage` });
  };
  let ID = id.replace(/[^\d]/g, "");
  const [album, setAlbum] = useState(null);
  useEffect(() => {
    fetch(`https://61e7eaede32cd90017acbe93.mockapi.io/albums/${ID}`).then(
      (res) => res.json().then((data) => setAlbum(data))
    );
  }, [id]);

  const handleDelet = () => {
    handleDeletAlbum(ID);
    goAlbumspage();
  };

  return (
    <Box p={{ md: 2, sm: 0 }}>
      <Button sx={{ m: 2 }} onClick={goBack} variant="contained" size="small">
        Go back
      </Button>
      {album && (
        <Card sx={{ maxWidth: { md: "80%", sm: "100%" }, maxHeight: "auto" }}>
          <CardMedia
            component="img"
            height="100%"
            image={album.img}
            alt={album.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {album.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {album.about}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                style={{ color: "#1976d2" }}
                className="nav-link nav-link__dark"
                to={`/albumspage/:${id}/edit`}
              >
                Edit album
              </Link>
            </Button>
            <Button onClick={handleDelet} size="small">
              Delet album
            </Button>
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export { AlbumSinglepage };
