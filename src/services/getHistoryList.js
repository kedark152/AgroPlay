import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/auth-context";
import { toast } from "react-toastify";

export const GetHistoryList = (videoActionState) => {
  const { auth } = useAuth();
  const [loader, setLoader] = useState(true);
  const [historyList, setHistoryList] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/user/history", {
          headers: {
            authorization: auth.token, // passing token as an authorization header
          },
        });
        const getHistoryList = response.data.history;
        setLoader(false);
        setHistoryList(getHistoryList);
      } catch (error) {
        console.log("Error from GetHistoryList.js ", error);
        toast.error("Unable to load History videos");
      }
    })(); //IIFE - Immediately Invoked Function
  }, [auth, videoActionState]);

  return { loader, historyList };
};
