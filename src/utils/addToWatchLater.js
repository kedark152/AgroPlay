import axios from "axios";
import { toast } from "react-toastify";

export const addToWatchLater = async ({
  auth,
  activeVideo,
  dispatchVideoAction,
}) => {
  //Add Video to Watch Later
  try {
    const response = await axios({
      url: `/api/user/watchlater`,
      method: "post",
      headers: {
        authorization: auth.token,
      },
      data: {
        video: activeVideo,
      },
    });
    const watchLater = response.data.watchlater;
    dispatchVideoAction({
      type: "ADD-TO-WATCH-LATER",
      payload: watchLater,
    });

    toast.success(`Added Video to Watch Later`);
  } catch (error) {
    console.log("addToWatchLater.js", error);
    toast.error("Error to add video to watch later");
  }
};
