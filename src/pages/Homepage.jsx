import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Homepage = () => {
  return (
    <Box p={2}>
      <Typography variant="h3" component="div" gutterBottom>
        Hello )))
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        About me:
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        <Link target="_blank" href="https://www.linkedin.com/in/ihor-hryva/">
          Linkedin
        </Link>
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        <Link target="_blank" href="https://www.instagram.com/griva.igor/">
          Instagram
        </Link>
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1Hz9arekh0PYpa8RepHJEC4CT-I6APF7t/view?usp=sharing"
        >
          CV
        </Link>
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        Contacts:
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        <Link href="tel:+380973362537">+380973362537</Link>
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        <Link target="_blank" href="mailto:griva.igor422@gmail.com">
          griva.igor422@gmail.com
        </Link>
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        Telegram @hriva_ihor
      </Typography>
    </Box>
  );
};

export default Homepage;
