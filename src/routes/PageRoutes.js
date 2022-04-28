import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Explore } from "../pages/Explore";
import { History } from "../pages/History";
import { Home } from "../pages/Home";
import { LikedVideos } from "../pages/LikedVideos";
import { MyProfile } from "../pages/MyProfile";
import { Playlist } from "../pages/Playlist";
import { WatchLater } from "../pages/WatchLater";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/likedvideos" element={<LikedVideos />} />
      <Route path="/history" element={<History />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};
