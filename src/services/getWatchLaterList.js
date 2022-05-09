import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/auth-context";
import { toast } from "react-toastify";

export const GetWatchLaterList = (videoActionState) => {
  const { auth } = useAuth();
  const [loader, setLoader] = useState(true);
  const [watchLaterList, setWatchLaterList] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/user/watchlater", {
          headers: {
            authorization: auth.token, // passing token as an authorization header
          },
        });
        const getWatchLaterList = response.data.watchlater;
        setLoader(false);
        setWatchLaterList(getWatchLaterList);
      } catch (error) {
        console.log("Error from getWatchLaterList.js ", error);
        toast.error("Unable to load watch later videos");
      }
    })(); //IIFE - Immediately Invoked Function
  }, [auth, videoActionState]);

  return { loader, watchLaterList };
};
