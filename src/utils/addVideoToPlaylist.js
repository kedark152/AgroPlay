import axios from "axios";
import { toast } from "react-toastify";

export const addVideoToPlaylist = async ({
  auth,
  activeVideo,
  playlistId,
  playlistName,
  dispatchVideoAction,
}) => {
  //Add Video to Playlist
  try {
    const response = await axios({
      url: `/api/user/playlists/${playlistId}`,
      method: "post",
      headers: {
        authorization: auth.token,
      },
      data: {
        video: activeVideo,
      },
    });
    const playlist = response.data.playlist;

    dispatchVideoAction({
      type: "TOGGLE-TICK-PLAYLIST",
      payload: playlist,
    });

    toast.success(`Added Video to Playlist: ${playlistName}`);
  } catch (error) {
    console.log("addVideoToPlaylist.js", error);
    toast.error("Error to add video to playlist", playlistName);
  }
};
