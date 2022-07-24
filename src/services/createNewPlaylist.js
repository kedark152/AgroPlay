import axios from "axios";
import { toast } from "react-toastify";
import { addVideoToPlaylist } from "./addVideoToPlaylist";

export const createNewPlaylist = async (
  playlistName,
  dispatchVideoAction,
  auth,
  activeVideo
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
    const newlyCreatedPlaylist = playlists[playlists.length - 1];
    dispatchVideoAction({
      type: "CREATE-NEW-PLAYLIST",
      payload: playlists,
    });

    addVideoToPlaylist({
      auth,
      activeVideo,
      playlistId: newlyCreatedPlaylist._id,
      playlistName,
      dispatchVideoAction,
    });
  } catch (error) {
    console.log("createNewPlaylist.js", error);
    toast.error("Error to create new playlist");
  }
};
