import "../styles/components/playlistBox.css";
import { useVideoAction } from "../context/video-action-context";
import { useState } from "react";
import { PlaylistCheckBox } from "./PlaylistCheckBox";
import { createNewPlaylist } from "../utils/createNewPlaylist";
import { useAuth } from "../context/auth-context";

export const PlaylistBox = () => {
  const { videoActionState, dispatchVideoAction } = useVideoAction();
  const [playlistValue, setPlaylistValue] = useState("");
  const { auth } = useAuth();

  const TypeNewPlaylist = (e) => {
    let playlistName = e.target.value;
    if (e.keyCode === 13) {
      setPlaylistValue("");
      createNewPlaylist(playlistName, dispatchVideoAction, auth);
    }
  };

  return (
    <div className="playlist-box-background">
      <div className="playlist-box-container">
        <h3 className="align-center">
          Add to Playlist{" "}
          <i
            className="material-icons mg-left-lg"
            onClick={() => dispatchVideoAction({ type: "TOGGLE-PLAYLIST-BOX" })}
          >
            close
          </i>
        </h3>

        <div className="playlist-input-wrapper mg-top-xsm">
          <input
            type="text"
            name="typingPlaylist"
            id="typing-playlist"
            placeholder="Type & enter to add new playlist"
            value={playlistValue}
            onChange={(e) => setPlaylistValue(e.target.value)}
            onKeyUp={(e) => TypeNewPlaylist(e)}
            autoFocus={true}
          />
        </div>
        <div className="checkbox-input-wrapper mg-top-xsm">
          {videoActionState.playlist.map((playlist) => (
            <PlaylistCheckBox
              key={playlist._id}
              playlistId={playlist._id}
              playlistName={playlist.title}
              activeVideo={videoActionState.activeVideo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
