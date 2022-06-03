import axios from "axios";
const ALBUMS_URL = `https://61e7eaede32cd90017acbe93.mockapi.io/`;
const ALBUMS_URI = `albums`;
const Axios = axios.create({
  baseURL: ALBUMS_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAlbumsData = () => {
  return Axios.get(ALBUMS_URI);
};

// export const  = (id) => {
//   return Axios.getAlbumItemget(ALBUMS_URI, id);
// };

export const updateAlbum = (editAlbum, id) => {
  return Axios.put(`${ALBUMS_URI}/${id}`, editAlbum);
};

export const deletAlbum = (id) => {
  return Axios.delete(`${ALBUMS_URI}/${id}`);
};

export const addNewAlbum = (album) => {
  return Axios.post(ALBUMS_URI, album);
};
