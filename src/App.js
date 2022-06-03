import { Route, Routes } from "react-router";

import Albumspage from "./pages/Albumspage";
import Homepage from "./pages/Homepage";
import Notfoundpage from "./pages/Notfoundpage";
import { Box } from "@mui/system";
import { Layout } from "./components/Layout";
import { Abautpage } from "./pages/Abautpage";
import { AlbumSinglepage } from "./pages/AlbumSinglepage";
import { Createalbum } from "./pages/Createalbum";
import Editalbum from "./pages/Editalbum";
import { Loginpage } from "./pages/Loginpage";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  return (
    <Box
      width="1800px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route
              path="albumspage"
              element={
                <RequireAuth>
                  <Albumspage />
                </RequireAuth>
              }
            />
            <Route
              path="albumspage/:id"
              element={
                <RequireAuth>
                  <AlbumSinglepage />
                </RequireAuth>
              }
            />
            <Route
              path="albumspage/:id/edit"
              element={
                <RequireAuth>
                  <Editalbum />
                </RequireAuth>
              }
            />
            <Route
              path="albumspage/new"
              element={
                <RequireAuth>
                  <Createalbum />
                </RequireAuth>
              }
            />
            <Route path="aboutpage" element={<Abautpage />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Box>
  );
}

export default App;
