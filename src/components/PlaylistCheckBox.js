import { useVideoAction } from "../context/video-action-context";
import { useAuth } from "../context/auth-context";
import { addVideoToPlaylist } from "../services/addVideoToPlaylist";
import { removeVideoFromPlaylist } from "../services/removeVideofromPlaylist";

export const PlaylistCheckBox = ({ activeVideo, playlistId, playlistName }) => {
  const { videoActionState, dispatchVideoAction } = useVideoAction();
  const { auth } = useAuth();

  const isCheckedPlaylist = (playlistId, videoId) => {
    return videoActionState.playlist
      .filter((item) => item._id === playlistId)[0]
      .videos.some((item) => item._id === videoId);
  };

  return (
    <>
      <div className="checkbox-field align-center mg-y-xsm">
        <input
          type="checkbox"
          key={playlistId}
          id={playlistId}
          onChange={(e) => {
            let playlistCheckedStatus = e.target.checked;
            const params = {
              auth,
              activeVideo,
              playlistId,
              playlistName,
              dispatchVideoAction,
            };

            playlistCheckedStatus
              ? addVideoToPlaylist(params)
              : removeVideoFromPlaylist(params);
          }}
          checked={isCheckedPlaylist(playlistId, activeVideo._id)}
        />
        <label htmlFor={playlistId}>{playlistName}</label>
      </div>
    </>
  );
};
