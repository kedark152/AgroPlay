/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { addToWatchLater } from "../services/addToWatchLater";
import { removeFromWatchLater } from "../services/removeFromWatchLater";
import { addToLikes } from "../services/addToLikes";
import { removeFromLikes } from "../services/removeFromLikes";
import { addToHistory } from "../services/addToHistory";
import { removeFromHistory } from "../services/removeFromHistory";
import { useVideoAction } from "../context/video-action-context";
import { useAuth } from "../context/auth-context";
import { useSingleVideoBtns } from "./useSingleVideoBtns";
import { toast } from "react-toastify";
import { USER_ACTIONS } from "./constants";

export const useVideoOnClickHandler = (activeVideo) => {
  const { dispatchVideoAction } = useVideoAction();
  const { watchListBtnState, likeBtnState, isInHistoryList } =
    useSingleVideoBtns(activeVideo._id);

  const { auth } = useAuth();
  const [onClickAction, setOnClickAction] = useState(null);

  const likeVideoOnClickHandler = () => {
    likeBtnState.status
      ? removeFromLikes({
          auth,
          activeVideo,
          dispatchVideoAction,
        })
      : addToLikes({ auth, activeVideo, dispatchVideoAction });
  };

  const playlistOnClickHandler = () => {
    dispatchVideoAction({
      type: "TOGGLE-PLAYLIST-BOX",
      payload: activeVideo,
      token: auth.token,
    });
  };

  const watchLaterOnClickHandler = () => {
    watchListBtnState.status
      ? removeFromWatchLater({
          auth,
          activeVideo,
          dispatchVideoAction,
        })
      : addToWatchLater({
          auth,
          activeVideo,
          dispatchVideoAction,
        });
  };

  const copyVideoOnClickHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link Copied to Clipboard");
  };

  const addToHistoryOnRender = () => {
    if (!isInHistoryList) {
      addToHistory({
        auth,
        activeVideo,
        dispatchVideoAction,
      });
    }
  };

  const removeFromHistoryOnClick = () => {
    removeFromHistory({
      auth,
      activeVideo,
      dispatchVideoAction,
    });
  };

  useEffect(() => {
    switch (onClickAction) {
      case USER_ACTIONS.LIKE_VIDEO:
        likeVideoOnClickHandler();
        break;
      case USER_ACTIONS.PLAYLIST_VIDEO:
        playlistOnClickHandler();
        break;
      case USER_ACTIONS.WATCH_LATER_VIDEO:
        watchLaterOnClickHandler();
        break;
      case USER_ACTIONS.COPY_LINK_VIDEO:
        copyVideoOnClickHandler();
        break;
      case USER_ACTIONS.ADD_TO_HISTORY:
        addToHistoryOnRender();
        break;
      case USER_ACTIONS.REMOVE_FROM_HISTORY:
        removeFromHistoryOnClick();
        break;
      default:
        break;
    }
    setOnClickAction(null);
  }, [onClickAction]);

  return {
    setOnClickAction,
  };
};
