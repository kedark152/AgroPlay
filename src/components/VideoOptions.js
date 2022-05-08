import "../styles/components/videoOptions.css";
import { usePlaylist } from "../context/playlist-context";
import { RequiresAuth } from "../routes/RequiresAuth";
import { useAuth } from "../context/auth-context";
export const VideoOptions = ({ videoId }) => {
  const { dispatchPlaylist } = usePlaylist();
  const { auth } = useAuth();
  return (
    <div className="video-options-box flex-column">
      <RequiresAuth>
        <ul>
          <li>
            <i className="material-icons">watch_later</i>Save to watch later
          </li>
          <li
            onClick={() =>
              dispatchPlaylist({
                type: "TOGGLE-PLAYLIST-BOX",
                payload: videoId,
                token: auth.token,
              })
            }
          >
            <i className="material-icons">playlist_add</i>
            Save to playlist
          </li>
          <li>
            <i className="material-icons">thumb_up</i>Add to liked videos
          </li>
        </ul>
      </RequiresAuth>
    </div>
  );
};
