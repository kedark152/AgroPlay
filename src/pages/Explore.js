import { CategoryContainer } from "../components/CategoryContainer";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { GetVideos } from "../services/getVideos";
import { PlaylistBox } from "../components/PlaylistBox";
import { useVideoAction } from "../context/video-action-context";
import { VideoCard } from "../components/VideoCard";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import "../styles/pages/explore.css";

export const Explore = () => {
  const { loader, videos } = GetVideos();
  const { videoActionState } = useVideoAction();
  const [activeCard, setActiveCard] = useState("");
  console.log(activeCard);

  let displayVideos = [];

  if (activeCard !== "") {
    displayVideos = videos.filter((video) => video.categoryName === activeCard);
  }

  return (
    <div className="Explore Pages">
      <Navbar />

      <div className="explore-page-container flex">
        <Sidebar />
        <CategoryContainer
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <div className="video-listing">
          {!loader &&
            displayVideos.map((video) => (
              <VideoCard key={uuid()} videoCardDetails={video} />
            ))}
          {videoActionState.setPlaylistBox && <PlaylistBox />}
        </div>
      </div>
    </div>
  );
};
