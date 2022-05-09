import axios from "axios";
import { toast } from "react-toastify";

export const removeFromLikes = async ({
  auth,
  activeVideo,
  dispatchVideoAction,
}) => {
  //Remove Video from likes
  try {
    const response = await axios({
      url: `/api/user/likes/${activeVideo._id}`,
      method: "delete",
      headers: {
        authorization: auth.token,
      },
    });
    const likedList = response.data.likes;
    dispatchVideoAction({
      type: "REMOVE-FROM-LIKES",
      payload: likedList,
    });

    toast.success(`Removed from Liked Videos`);
  } catch (error) {
    console.log("removeFromLikes.js", error);
    toast.error("Error to remove video from liked list");
  }
};
