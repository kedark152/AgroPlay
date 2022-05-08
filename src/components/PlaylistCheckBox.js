import { usePlaylist } from "../context/playlist-context";
import { useAuth } from "../context/auth-context";
import { addVideoToPlaylist } from "../utils/addVideoToPlaylist";
import { removeVideoFromPlaylist } from "../utils/removeVideofromPlaylist";
import { GetVideos } from "../services/getVideos";

export const PlaylistCheckBox = ({ videoId, playlistId, playlistName }) => {
  const { playlistState, dispatchPlaylist } = usePlaylist();
  const { auth } = useAuth();
  const { videos } = GetVideos();

  const getVideoById = () => {
    let videoObject;
    videos.map((videoObj) => {
      if (videoObj._id == videoId) {
        videoObject = videoObj;
      }
    });
    return videoObject;
  };

  const activeVideo = getVideoById();

  const isCheckedPlaylist = (playlistId, videoId) => {
    return playlistState.playlist
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
            // e.stopImmediatePropagation;
            let playlistCheckedStatus = e.target.checked;
            const params = {
              auth,
              activeVideo,
              playlistId,
              playlistName,
              dispatchPlaylist,
            };

            playlistCheckedStatus
              ? addVideoToPlaylist(params)
              : removeVideoFromPlaylist(params);
          }}
          // checked="true"
          checked={isCheckedPlaylist(playlistId, videoId)}
        />
        <label htmlFor={playlistId}>{playlistName}</label>
      </div>
    </>
  );
};
