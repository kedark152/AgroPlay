import axios from "axios";
import { toast } from "react-toastify";

export const createNewPlaylist = async (
  playlistName,
  dispatchVideoAction,
  auth
) => {
  try {
    const response = await axios.post(
      "/api/user/playlists",
      { playlist: { title: playlistName } },
      {
        headers: {
          authorization: auth.token, // passing token as an authorization header
        },
      }
    );
    const playlists = response.data.playlists;
    dispatchVideoAction({
      type: "CREATE-NEW-PLAYLIST",
      payload: playlists,
    });
    toast.success(`Created New Playlist: ${playlistName}`);
  } catch (error) {
    console.log("createNewPlaylist.js", error);
    toast.error("Error to create new playlist");
  }
};
