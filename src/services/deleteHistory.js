import axios from "axios";
import { toast } from "react-toastify";

export const deleteHistory = async ({ auth, dispatchVideoAction }) => {
  //Remove all Videos from history
  try {
    const response = await axios({
      url: `/api/user/history/all`,
      method: "delete",
      headers: {
        authorization: auth.token,
      },
    });
    const history = response.data.history;
    dispatchVideoAction({
      type: "DELETE-HISTORY",
      payload: history,
    });

    toast.success(`All History Cleared`);
  } catch (error) {
    console.log("deleteHistory.js", error);
    toast.error("Error to clear all history");
  }
};
