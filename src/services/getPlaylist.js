import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/auth-context";
export const GetPlaylist = (videoActionState) => {
  const { auth } = useAuth();
  const [loader, setLoader] = useState(true);
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    (async function videosLoader() {
      try {
        const response = await axios.get("/api/user/playlists", {
          headers: {
            authorization: auth.token, // passing token as an authorization header
          },
        });
        const getPlaylist = response.data.playlists;
        setLoader(false);
        setPlaylist(getPlaylist);
      } catch (error) {
        console.log("Error from getPlaylist.js ", error);
      }
    })(); //IIFE - Immediately Invoked Function
  }, [auth, videoActionState]);

  return { loader, playlist };
};
