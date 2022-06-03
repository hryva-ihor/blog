import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
// import InfoIcon from "@mui/icons-material/Info";
import { Link as RouterLink } from "react-router-dom";

const Albumsitem = (props) => {
  const album = props.album;
  // console.log(album);
  return (
    <ImageListItem key={album.img}>
      <img src={`${album.img}`} alt={album.title} loading="lazy" />
      <RouterLink to={`/albumspage/:${album.id}`}>
        <ImageListItemBar title={album.title} subtitle={album.subtitle} />
      </RouterLink>
    </ImageListItem>
  );
};

export { Albumsitem };
