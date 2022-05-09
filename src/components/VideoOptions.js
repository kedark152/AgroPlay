import "../styles/components/videoOptions.css";
import { useVideoAction } from "../context/video-action-context";
import { RequiresAuth } from "../routes/RequiresAuth";
import { useAuth } from "../context/auth-context";
import { addToWatchLater } from "../utils/addToWatchLater";
import { removeFromWatchLater } from "../utils/removeFromWatchLater";
import { addToLikes } from "../utils/addToLikes";
import { removeFromLikes } from "../utils/removeFromLikes";

export const VideoOptions = ({ activeVideo }) => {
  const { videoActionState, dispatchVideoAction } = useVideoAction();
  const { auth } = useAuth();
  const isInWatchLaterList = (videoId) => {
    return videoActionState.watchlater.some((item) => item._id === videoId);
  };
  const isInLikesList = (videoId) => {
    return videoActionState.likes.some((item) => item._id === videoId);
  };

  const watchLaterOnClickHandler = () => {
    isInWatchLaterList(activeVideo._id)
      ? removeFromWatchLater({
          auth,
          activeVideo,
          dispatchVideoAction,
        })
      : addToWatchLater({ auth, activeVideo, dispatchVideoAction });
  };

  const likeVideoOnClickHandler = () => {
    isInLikesList(activeVideo._id)
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
            {isInWatchLaterList(activeVideo._id)
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
            {isInLikesList(activeVideo._id)
              ? `Remove from liked videos`
              : `Add to liked videos`}
          </li>
        </ul>
      </RequiresAuth>
    </div>
  );
};
