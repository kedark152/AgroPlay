import axios from "axios";
import { toast } from "react-toastify";

export const removeFromWatchLater = async ({
  auth,
  activeVideo,
  dispatchVideoAction,
}) => {
  //Remove Video from watch later
  try {
    const response = await axios({
      url: `/api/user/watchlater/${activeVideo._id}`,
      method: "delete",
      headers: {
        authorization: auth.token,
      },
    });
    const watchLater = response.data.watchlater;
    dispatchVideoAction({
      type: "REMOVE-FROM-WATCH-LATER",
      payload: watchLater,
    });

    toast.success(`Removed Video from Watch later`);
  } catch (error) {
    console.log("removeVideoFromWatchLater.js", error);
    toast.error("Error to remove video from watch later");
  }
};
