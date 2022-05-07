import axios from "axios";
import { toast } from "react-toastify";

export const removeVideoFromPlaylist = async ({
  auth,
  activeVideo,
  playlistId,
  playlistName,
  dispatchPlaylist,
}) => {
  //Remove Video from Playlist
  try {
    const response = await axios({
      url: `/api/user/playlists/${playlistId}/${activeVideo._id}`,
      method: "delete",
      headers: {
        authorization: auth.token,
      },
    });
    const playlist = response.data.playlist;
    dispatchPlaylist({
      type: "TOGGLE-TICK-PLAYLIST",
      payload: playlist,
    });

    toast.success(`Removed Video from Playlist: ${playlistName}`);
  } catch (error) {
    console.log("toggleTickPlaylist.js", error);
    toast.error("Error to remove video to playlist", playlistName);
  }
};
