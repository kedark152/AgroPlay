import axios from "axios";
import { toast } from "react-toastify";

export const removeFromHistory = async ({
  auth,
  activeVideo,
  dispatchVideoAction,
}) => {
  //Remove Video from history
  try {
    const response = await axios({
      url: `/api/user/history/${activeVideo._id}`,
      method: "delete",
      headers: {
        authorization: auth.token,
      },
    });
    const history = response.data.history;
    dispatchVideoAction({
      type: "REMOVE-FROM-HISTORY",
      payload: history,
    });

    toast.success(`Removed a video from History`);
  } catch (error) {
    console.log("removeFromHistory.js", error);
    toast.error("Error to remove video from history list");
  }
};
