import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Loader } from "../components/Loader";
import { PlaylistBox } from "../components/PlaylistBox";
import { GetVideoById } from "../services/getVideoById";
import { toast } from "react-toastify";
import { useVideoAction } from "../context/video-action-context";
import { useAuth } from "../context/auth-context";
import { useParams } from "react-router-dom";
import { addToWatchLater } from "../utils/addToWatchLater";
import { removeFromWatchLater } from "../utils/removeFromWatchLater";
import { addToLikes } from "../utils/addToLikes";
import { removeFromLikes } from "../utils/removeFromLikes";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/pages/singlevideo.css";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { loader, video } = GetVideoById(videoId);
  const { videoActionState, dispatchVideoAction } = useVideoAction();
  const { pathname } = useLocation();

  const isInWatchLaterList = (videoId) => {
    const watchStatus = videoActionState.watchlater.some(
      (item) => item._id === videoId
    );
    let mainRes = watchStatus
      ? { result: "IN WATCH LATER", style: "active-option", status: true }
      : { result: "WATCH LATER", style: "", status: false };

    return mainRes;
  };

  const isInLikesList = (videoId) => {
    const likeStatus = videoActionState.likes.some(
      (item) => item._id === videoId
    );
    let mainRes = likeStatus
      ? { result: "LIKED", style: "active-option", status: true }
      : { result: " LIKE", style: "", status: false };

    return mainRes;
  };

  const onClickHandler = (id) => {
    if (auth.isLoggedIn) {
      onActionClickHandler(id);
    } else {
      navigate(
        "/login",
        { state: { from: { pathname: pathname } } },
        { replace: true }
      );
    }
  };

  const onActionClickHandler = (id) => {
    switch (id) {
      case "like-video":
        {
          isInLikesList(videoId).status
            ? removeFromLikes({
                auth,
                activeVideo: video,
                dispatchVideoAction,
              })
            : addToLikes({ auth, activeVideo: video, dispatchVideoAction });
        }
        break;
      case "playlist-video":
        {
          dispatchVideoAction({
            type: "TOGGLE-PLAYLIST-BOX",
            payload: video,
            token: auth.token,
          });
        }
        break;
      case "watch-later-video":
        {
          isInWatchLaterList(videoId).status
            ? removeFromWatchLater({
                auth,
                activeVideo: video,
                dispatchVideoAction,
              })
            : addToWatchLater({
                auth,
                activeVideo: video,
                dispatchVideoAction,
              });
        }
        break;
      case "copy-link-video":
        {
          navigator.clipboard.writeText(window.location.href);
          toast.success("Link Copied to Clipboard");
        }
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="SingleVideo Pages">
        <Navbar />
        <div className="single-video-page-container white-color">
          <Sidebar />
          {loader && <Loader />}
          {!loader && (
            <div className="single-video">
              <div className="video-responsive">
                <iframe
                  className="youTube-iframe"
                  src={`https://www.youtube.com/embed/${video._id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-action-buttons">
                <ul className="flex fw-bold ">
                  <li
                    id="like-video"
                    onClick={(e) => onClickHandler(e.target.id)}
                    className={`align-center mg-xsm ${
                      isInLikesList(videoId).style
                    }`}
                  >
                    <i className="material-icons mg-right-xsm">thumb_up</i>
                    {`${isInLikesList(videoId).result}`}
                  </li>
                  <li
                    id="playlist-video"
                    onClick={(e) => onClickHandler(e.target.id)}
                    className="align-center mg-xsm"
                  >
                    <i className="material-icons mg-right-xsm">playlist_add</i>
                    SAVE
                  </li>
                  <li
                    id="watch-later-video"
                    onClick={(e) => onClickHandler(e.target.id)}
                    className={`align-center mg-xsm ${
                      isInWatchLaterList(videoId).style
                    }`}
                  >
                    <i className="material-icons mg-right-xsm">schedule</i>
                    {`${isInWatchLaterList(videoId).result}`}
                  </li>
                  <li
                    id="copy-link-video"
                    className="align-center mg-xsm"
                    onClick={(e) => onClickHandler(e.target.id)}
                  >
                    <i className="material-icons mg-right-xsm">link</i>
                    COPY LINK
                  </li>
                </ul>
              </div>
              <div className="video-details mg-bottom-md">
                <h3 className="video-title">{video.title}</h3>
                <p className="views-date">
                  {video.views} views • {video.uploadDate}
                </p>
                <p className="video-description ">{video.description}</p>
              </div>
            </div>
          )}
          {videoActionState.setPlaylistBox && <PlaylistBox />}
        </div>
      </div>
    </>
  );
};
