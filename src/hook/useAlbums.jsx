import React, { useEffect, useState } from "react";
import {
  addNewAlbum,
  deletAlbum,
  getAlbumItemget,
  getAlbumsData,
  updateAlbum,
} from "../services/album-services";

const useAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState({});
  const [title, setTitle] = useState("");
  const [subtitle, setSubitle] = useState("");
  const [about, setAbout] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [validURL, setValidURL] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const albumQuery = searchParams.get("album") || ``;
  useEffect(() => {
    getAlbumsData().then(({ data }) => setAlbums(data.reverse()));
  }, []);

  ///!create album page
  const handlerOnChangeInput = (e) => {
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
  const validImgURLInput = (imgURL) => {
    if (imgURL.includes("https://", 0)) {
      setValidURL(true);
      return true;
    }
    return false;
  };
  const handleSubmitEvent = (e, goBack) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const subtitle = form.subtitle.value;
    const about = form.about.value;
    const imgURL = form.imgURL.value;
    if (form && title && about && validImgURLInput(imgURL)) {
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
      addNewAlbum(newAlbum).then(({ data }) => {
        setAlbums([...albums, data]);
        goBack();
      });
    } else {
      return false;
    }
  };

  ///!create album page
  ///////////////////////////////////////////////
  //!   edit album page
  const getAlbumItem = (id) => {
    getAlbumItemget(id).then(({ data }) => {
      setAlbum(data);
      setTitle(data.title);
      setSubitle(data.subtitle);
      setAbout(data.about);
      setImgURL(data.img);
      setValidURL(true);
    });
  };

  const handlerOnChangeInpitEdit = (e) => {
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
  const handleSubmitEdit = (e, goToAlbumsPage, ID) => {
    if (subtitle && title && about && validImgURLInput(imgURL)) {
      e.preventDefault();
      const editAlbum = {
        title: title,
        subtitle: subtitle,
        about: about,
        img: imgURL,
      };
      updateAlbum(editAlbum, ID).then((data) => {
        setAlbums([...albums, data]);
        goToAlbumsPage();
      });
    } else {
      e.preventDefault();
      return false;
    }
  };
  //!   edit album page
  ////////////////////////////////////////
  //! delet album
  const handleDeletAlbum = (id, goAlbumspage) => {
    deletAlbum(id);
    const newAlbumsData = albums.filter((album) => album.id !== id);
    setAlbums(newAlbumsData);
    setInterval(() => {
      goAlbumspage();
    }, 500);
  };
  //! delet album

  return {
    albums,
    album,
    handlerOnChangeInput,
    validImgURLInput,
    handleSubmitEvent,
    title,
    subtitle,
    about,
    imgURL,
    validURL,
    handlerOnChangeInpitEdit,
    handleSubmitEdit,
    getAlbumItem,
    handleDeletAlbum,
  };
};

export default useAlbums;
