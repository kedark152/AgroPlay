import axios from "axios";
import { toast } from "react-toastify";

export const addToHistory = async ({
  auth,
  activeVideo,
  dispatchVideoAction,
}) => {
  //Add Video to History
  try {
    const response = await axios({
      url: `/api/user/history`,
      method: "post",
      headers: {
        authorization: auth.token,
      },
      data: {
        video: activeVideo,
      },
    });
    const history = response.data.history;
    dispatchVideoAction({
      type: "ADD-TO-HISTORY",
      payload: history,
    });
  } catch (error) {
    console.log("addToHistory.js", error);
    toast.error("Error to add video to history");
  }
};
