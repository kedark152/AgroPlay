import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/auth-context";
import { toast } from "react-toastify";

export const GetLikesList = (videoActionState) => {
  const { auth } = useAuth();
  const [loader, setLoader] = useState(true);
  const [likesList, setLikesList] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/user/likes", {
          headers: {
            authorization: auth.token, // passing token as an authorization header
          },
        });
        const getlikesList = response.data.likes;
        setLoader(false);
        setLikesList(getlikesList);
      } catch (error) {
        console.log("Error from getLikes.js ", error);
        toast.error("Unable to load liked videos");
      }
    })(); //IIFE - Immediately Invoked Function
  }, [auth, videoActionState]);

  return { loader, likesList };
};
