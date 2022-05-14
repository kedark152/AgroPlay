import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Explore } from "../pages/Explore";
import { History } from "../pages/History";
import { Home } from "../pages/Home";
import { LikedVideos } from "../pages/LikedVideos";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { MyProfile } from "../pages/MyProfile";
import { Playlist } from "../pages/Playlist";
import { RequiresAuth } from "./RequiresAuth";
import { WatchLater } from "../pages/WatchLater";
import { SingleVideo } from "../pages/SingleVideo";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route
        path="/playlist"
        element={
          <RequiresAuth>
            <Playlist />
          </RequiresAuth>
        }
      />
      <Route
        path="/watchlater"
        element={
          <RequiresAuth>
            <WatchLater />
          </RequiresAuth>
        }
      />
      <Route
        path="/likedvideos"
        element={
          <RequiresAuth>
            <LikedVideos />
          </RequiresAuth>
        }
      />
      <Route
        path="/history"
        element={
          <RequiresAuth>
            <History />
          </RequiresAuth>
        }
      />

      <Route path="/profile" element={<MyProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/watch/:videoId" element={<SingleVideo />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};
