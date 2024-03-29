import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Loader } from "../components/Loader";
import { PlaylistBox } from "../components/PlaylistBox";
import { GetVideoById } from "../services/getVideoById";
import { useVideoAction } from "../context/video-action-context";
import { useAuth } from "../context/auth-context";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/pages/singlevideo.css";
import { useSingleVideoBtns } from "../custom-hooks/useSingleVideoBtns";
import { useVideoOnClickHandler } from "../custom-hooks/useVideoOnClickHandler";
import { useEffect } from "react";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { loader, video } = GetVideoById(videoId);
  const { videoActionState } = useVideoAction();
  const { pathname } = useLocation();
  const { watchListBtnState, likeBtnState } = useSingleVideoBtns(videoId); //custom hook
  const { setOnClickAction } = useVideoOnClickHandler(video); //custom hook

  const onClickHandler = (action) => {
    if (auth.isLoggedIn) {
      setOnClickAction(action);
    } else {
      navigate(
        "/login",
        { state: { from: { pathname: pathname } } },
        { replace: true }
      );
    }
  };

  //add video to history on page render
  useEffect(() => {
    if (!loader && auth.isLoggedIn) {
      setOnClickAction("add-to-history");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, loader]);

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
                  src={`https://youtube.com/embed/${video._id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-action-buttons">
                <ul className="flex fw-bold mg-top-xsm ">
                  <li
                    // id="like-video"
                    onClick={() => onClickHandler("like-video")}
                    className={`align-center mg-left-xsm ${likeBtnState.style}`}
                  >
                    <i className="material-icons mg-right-xsm">thumb_up</i>
                    <span className="action-btns-text">
                      {`${likeBtnState.text}`}
                    </span>
                  </li>
                  <li
                    // id="playlist-video"
                    onClick={() => onClickHandler("playlist-video")}
                    className="align-center mg-left-xsm"
                  >
                    <i className="material-icons mg-right-xsm">playlist_add</i>
                    <span className="action-btns-text">SAVE</span>
                  </li>
                  <li
                    // id="watch-later-video"
                    onClick={() => onClickHandler("watch-later-video")}
                    className={`align-center mg-left-xsm ${watchListBtnState.style}`}
                  >
                    <i className="material-icons mg-right-xsm">schedule</i>
                    <span className="action-btns-text">{`${watchListBtnState.text}`}</span>
                  </li>
                  <li
                    // id="copy-link-video"
                    className="align-center mg-right-xsm"
                    onClick={() => onClickHandler("copy-link-video")}
                  >
                    <i className="material-icons mg-right-xsm">link</i>
                    <span className="action-btns-text">COPY</span>
                  </li>
                </ul>
              </div>
              <div className="video-details">
                <h3 className="video-title-txt">{video.title}</h3>
                <p className="views-date">
                  {video.views} views • {video.uploadDate}
                </p>
                <p className="video-description mg-y-sm">{video.description}</p>
              </div>
            </div>
          )}
          {videoActionState.setPlaylistBox && <PlaylistBox />}
        </div>
      </div>
    </>
  );
};
