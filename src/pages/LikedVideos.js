import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { VideoCard } from "../components/VideoCard";
import { GetLikesList } from "../services/getLikesList";
import { PlaylistBox } from "../components/PlaylistBox";
import { useVideoAction } from "../context/video-action-context";
import { v4 as uuid } from "uuid";
import "../styles/pages/likedvideos.css";

export const LikedVideos = () => {
  const { videoActionState } = useVideoAction();
  const { loader, likesList } = GetLikesList(videoActionState);
  const displayLikesList = likesList;

  return (
    <div className="LikedVideos Pages">
      <Navbar />
      <div className="liked-videos-page-container">
        <Sidebar />
        {loader && <Loader />}

        <div className="fs-md info-message">
          {!loader && displayLikesList.length == 0 && "No Videos Found..."}
        </div>
        <div>
          <h2 className="text-center white-color mg-sm">{`Liked Videos Page`}</h2>
          {!loader && (
            <div key={uuid()} className="video-listing">
              {displayLikesList.map((video) => (
                <VideoCard key={video._id} videoCardDetails={video} />
              ))}
            </div>
          )}
          {videoActionState.setPlaylistBox && <PlaylistBox />}
        </div>
      </div>
    </div>
  );
};
