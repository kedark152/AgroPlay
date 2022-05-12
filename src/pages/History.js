import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { VideoCard } from "../components/VideoCard";
import { GetHistoryList } from "../services/getHistoryList";
import { PlaylistBox } from "../components/PlaylistBox";
import { useVideoAction } from "../context/video-action-context";
import { deleteHistory } from "../utils/deleteHistory";
import { v4 as uuid } from "uuid";
import "../styles/pages/history.css";
import { useAuth } from "../context/auth-context";

export const History = () => {
  const { videoActionState, dispatchVideoAction } = useVideoAction();
  const { auth } = useAuth();
  const { loader, historyList } = GetHistoryList(videoActionState);
  const displayHistoryList = historyList;
  return (
    <div className="History Pages">
      <Navbar />
      <div className="history-videos-page-container">
        <Sidebar />
        {loader && <Loader />}

        <div className="fs-md info-message">
          {!loader && displayHistoryList.length == 0 && "No Videos Found..."}
        </div>
        <div>
          <h2 className="text-center white-color mg-sm">{`History`}</h2>
          {!loader && displayHistoryList.length > 0 && (
            <>
              <div
                className="clear-history white-color align-center fw-bold"
                onClick={() => deleteHistory({ auth, dispatchVideoAction })}
              >
                <i className="material-icons mg-right-xsm">delete</i> Clear all
                watch History
              </div>
              <div key={uuid()} className="video-listing">
                {displayHistoryList.map((video) => (
                  <VideoCard key={video._id} videoCardDetails={video} />
                ))}
              </div>
            </>
          )}
          {videoActionState.setPlaylistBox && <PlaylistBox />}
        </div>
      </div>
    </div>
  );
};
