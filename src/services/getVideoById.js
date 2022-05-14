import axios from "axios";
import { useState, useEffect } from "react";

export const GetVideoById = (videoId) => {
  const [loader, setLoader] = useState(true);
  const [video, setVideo] = useState([{}]);

  useEffect(() => {
    (async function videoById() {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        const getVideo = response.data.video;
        setLoader(false);
        setVideo(getVideo);
      } catch (error) {
        console.log("Error from getVideoById.js ", error);
      }
    })(); //IIFE - Immediately Invoked Function
  }, [videoId]);

  return { loader, video };
};
