import { useVideoAction } from "../context/video-action-context";
import { useState, useEffect } from "react";

export const useSingleVideoBtns = (videoId) => {
  const { videoActionState } = useVideoAction();

  const initialWatchListState = {
    text: "WATCH LATER",
    style: "",
    status: false,
  };
  const initialLikeState = { result: " LIKE", style: "", status: false };

  const [watchListBtnState, setWatchListBtn] = useState(initialWatchListState);
  const [likeBtnState, setLikeBtn] = useState(initialLikeState);

  const watchStatus = videoActionState.watchlater.some(
    (item) => item._id === videoId
  );

  const likeStatus = videoActionState.likes.some(
    (item) => item._id === videoId
  );

  const isInHistoryList = videoActionState.history.some(
    (item) => item._id === videoId
  );

  useEffect(() => {
    watchStatus
      ? setWatchListBtn({
          text: "IN WATCH LATER",
          style: "active-option",
          status: true,
        })
      : setWatchListBtn({ text: "WATCH LATER", style: "", status: false });

    likeStatus
      ? setLikeBtn({ text: "LIKED", style: "active-option", status: true })
      : setLikeBtn({ text: " LIKE", style: "", status: false });
  }, [watchStatus, likeStatus]);

  return { watchListBtnState, likeBtnState, isInHistoryList };
};
