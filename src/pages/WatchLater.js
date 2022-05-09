import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { VideoCard } from "../components/VideoCard";
import { GetWatchLaterList } from "../services/getWatchLaterList";
import { PlaylistBox } from "../components/PlaylistBox";
import { useVideoAction } from "../context/video-action-context";
import { v4 as uuid } from "uuid";
import "../styles/pages/watchlater.css";

export const WatchLater = () => {
  const { videoActionState } = useVideoAction();
  const { loader, watchLaterList } = GetWatchLaterList(videoActionState);
  const displayWatchLaterList = watchLaterList;

  return (
    <div className="WatchLater Pages">
      <Navbar />
      <div className="watchlater-page-container">
        <Sidebar />
        {loader && <Loader />}

        <div className="fs-md info-message">
          {!loader && displayWatchLaterList.length == 0 && "No Videos Found..."}
        </div>
        <div>
          <h2 className="text-center white-color mg-sm">{`Watch Later Page`}</h2>
          {!loader && (
            <div key={uuid()} className="video-listing">
              {displayWatchLaterList.map((video) => (
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
