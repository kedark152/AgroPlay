import axios from "axios";
import { useState, useEffect } from "react";

export const GetVideos = () => {
  const [loader, setLoader] = useState(true);
  const [videos, setVideos] = useState([{}]);

  useEffect(() => {
    (async function videosLoader() {
      try {
        const response = await axios.get("/api/videos");
        const getVideos = response.data.videos;
        setLoader(false);
        setVideos(getVideos);
      } catch (error) {
        console.log("Error from getVideos.js ", error);
      }
    })(); //IIFE - Immediately Invoked Function
  }, []);

  return { loader, videos };
};
