import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { GetVideos } from "../services/getVideos";
import { PlaylistBox } from "../components/PlaylistBox";
import { useVideoAction } from "../context/video-action-context";
import { VideoCard } from "../components/VideoCard";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { Loader } from "../components/Loader";
import "../styles/pages/searchPage.css";

export const SearchPage = () => {
  const { loader, videos } = GetVideos();
  const { videoActionState } = useVideoAction();
  const [searchQuery, setSearchQuery] = useState("");
  let displayVideos = [];

  if (!loader && searchQuery.length > 1) {
    displayVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(searchQuery)
    );
  }
  return (
    <div className="Search Pages">
      <Navbar setSearchQuery={setSearchQuery} />

      <div className="search-page-container flex">
        <Sidebar />

        <div className="search-query-text white-color fs-sm-plus fw-bold mg-sm">
          <h2 className="text-center white-color mg-sm">{`Search Video Page`}</h2>
          {searchQuery.length > 1
            ? `Search Query: "${searchQuery}"`
            : `Please type in search field to find videos`}
        </div>
        {loader && <Loader />}
        <div className="fs-md info-message">
          {!loader &&
            displayVideos.length == 0 &&
            searchQuery.length > 1 &&
            "No Videos Found"}
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
  );
};
