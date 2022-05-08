import { ChipsContainer } from "../components/ChipsContainer";
import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { VideoCard } from "../components/VideoCard";
import { GetVideos } from "../services/getVideos";
import "../styles/pages/home.css";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { PlaylistBox } from "../components/PlaylistBox";
import { useVideoAction } from "../context/video-action-context";

export const Home = () => {
  const { loader, videos } = GetVideos();
  const { videoActionState } = useVideoAction();
  const [activeChip, setActiveChip] = useState("All");

  const getActiveChip = (chipName) => {
    setActiveChip(chipName);
  };

  let displayVideos;

  if (activeChip !== "All") {
    displayVideos = videos.filter((video) =>
      video.keywords.includes(activeChip)
    );
  } else {
    displayVideos = videos;
  }

  return (
    <>
      <div className="Home Pages">
        <Navbar />

        <div className="home-page-container">
          <Sidebar />
          <ChipsContainer getActiveChip={getActiveChip} />
          {loader && <Loader />}
          <div className="fs-md info-message">
            {!loader && displayVideos.length == 0 && "No Videos Found"}
          </div>
          <div className="video-listing">
            {!loader &&
              displayVideos.map((video) => (
                <VideoCard key={uuid()} videoCardDetails={video} />
              ))}
            {videoActionState.setPlaylistBox && <PlaylistBox />}
          </div>
        </div>
      </div>
    </>
  );
};
