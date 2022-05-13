import "../styles/components/videoOptions.css";
import { useVideoAction } from "../context/video-action-context";
import { RequiresAuth } from "../routes/RequiresAuth";
import { useAuth } from "../context/auth-context";
import { addToWatchLater } from "../services/addToWatchLater";
import { removeFromWatchLater } from "../services/removeFromWatchLater";
import { addToLikes } from "../services/addToLikes";
import { removeFromLikes } from "../services/removeFromLikes";
import { removeFromHistory } from "../services/removeFromHistory";

export const VideoOptions = ({ activeVideo }) => {
  const { videoActionState, dispatchVideoAction } = useVideoAction();
  const { auth } = useAuth();

  const inHistoryPage = () => {
    let currentPathname = window.location.pathname;
    return currentPathname === "/history" ? true : false;
  };

  const inWatchLaterList = (videoId) => {
    return videoActionState.watchlater.some((item) => item._id === videoId);
  };
  const inLikesList = (videoId) => {
    return videoActionState.likes.some((item) => item._id === videoId);
  };

  const watchLaterOnClickHandler = () => {
    inWatchLaterList(activeVideo._id)
      ? removeFromWatchLater({
          auth,
          activeVideo,
          dispatchVideoAction,
        })
      : addToWatchLater({ auth, activeVideo, dispatchVideoAction });
  };

  const likeVideoOnClickHandler = () => {
    inLikesList(activeVideo._id)
      ? removeFromLikes({
          auth,
          activeVideo,
          dispatchVideoAction,
        })
      : addToLikes({ auth, activeVideo, dispatchVideoAction });
  };

  return (
    <div className="video-options-box flex-column">
      <RequiresAuth>
        <ul>
          <li onClick={watchLaterOnClickHandler}>
            <i className="material-icons">watch_later</i>
            {inWatchLaterList(activeVideo._id)
              ? `Remove from watch later`
              : `Save to watch later`}
          </li>
          <li
            onClick={() =>
              dispatchVideoAction({
                type: "TOGGLE-PLAYLIST-BOX",
                payload: activeVideo,
                token: auth.token,
              })
            }
          >
            <i className="material-icons">playlist_add</i>
            Save to playlist
          </li>
          <li onClick={likeVideoOnClickHandler}>
            <i className="material-icons">thumb_up</i>
            {inLikesList(activeVideo._id)
              ? `Remove from liked videos`
              : `Add to liked videos`}
          </li>
          {inHistoryPage() && (
            <li
              onClick={() =>
                removeFromHistory({
                  auth,
                  activeVideo,
                  dispatchVideoAction,
                })
              }
            >
              <i className="material-icons">delete</i>
              Remove from History
            </li>
          )}
        </ul>
      </RequiresAuth>
    </div>
  );
};
