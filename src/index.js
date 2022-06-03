import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/system";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Box maxWidth="100%" display="flex" justifyContent="center">
        <App />
      </Box>
    </BrowserRouter>
  </React.StrictMode>
);
