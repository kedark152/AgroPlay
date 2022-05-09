import axios from "axios";
import { toast } from "react-toastify";

export const deletePlaylist = async ({
  auth,
  playlistId,
  playlistName,
  dispatchVideoAction,
}) => {
  try {
    const response = await axios({
      url: `/api/user/playlists/${playlistId}`,
      method: "delete",
      headers: {
        authorization: auth.token,
      },
    });
    const playlist = response.data.playlists;

    dispatchVideoAction({
      type: "DELETE-PLAYLIST",
      payload: playlist,
    });

    toast.success(`Deleted Playlist: ${playlistName}`);
  } catch (error) {
    console.log("deletePlaylist.js", error);
    toast.error("Error to delete playlist", playlistName);
  }
};
