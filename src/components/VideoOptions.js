import "../styles/components/videoOptions.css";
import { RequiresAuth } from "../routes/RequiresAuth";
import { useSingleVideoBtns } from "../custom-hooks/useSingleVideoBtns";
import { useVideoOnClickHandler } from "../custom-hooks/useVideoOnClickHandler";

export const VideoOptions = ({ activeVideo }) => {
  const inHistoryPage = () => {
    let currentPathname = window.location.pathname;
    return currentPathname === "/history" ? true : false;
  };

  const { watchListBtnState, likeBtnState } = useSingleVideoBtns(
    activeVideo._id
  ); //custom-hook
  const { setOnClickAction } = useVideoOnClickHandler(activeVideo); //custom hook

  return (
    <div className="video-options-box flex-column">
      <RequiresAuth>
        <ul>
          <li onClick={() => setOnClickAction("watch-later-video")}>
            <i className="material-icons">watch_later</i>
            {watchListBtnState.status
              ? `Remove from watch later`
              : `Save to watch later`}
          </li>
          <li onClick={() => setOnClickAction("playlist-video")}>
            <i className="material-icons">playlist_add</i>
            Save to playlist
          </li>
          <li onClick={() => setOnClickAction("like-video")}>
            <i className="material-icons">thumb_up</i>
            {likeBtnState.status
              ? `Remove from liked videos`
              : `Add to liked videos`}
          </li>
          {inHistoryPage() && (
            <li onClick={() => setOnClickAction("remove-from-history")}>
              <i className="material-icons">delete</i>
              Remove from History
            </li>
          )}
        </ul>
      </RequiresAuth>
    </div>
  );
};
