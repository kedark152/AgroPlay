import axios from "axios";
import { toast } from "react-toastify";

export const addToLikes = async ({
  auth,
  activeVideo,
  dispatchVideoAction,
}) => {
  //Add Video to Liked list
  try {
    const response = await axios({
      url: `/api/user/likes`,
      method: "post",
      headers: {
        authorization: auth.token,
      },
      data: {
        video: activeVideo,
      },
    });
    const likedList = response.data.likes;

    dispatchVideoAction({
      type: "ADD-TO-LIKES",
      payload: likedList,
    });

    toast.success(`Added to Liked Videos`);
  } catch (error) {
    console.log("addToLikes.js", error);
    toast.error("Error to add to liked videos");
  }
};
