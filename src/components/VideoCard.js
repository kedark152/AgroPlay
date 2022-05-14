import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/components/videocard.css";

import { VideoOptions } from "./VideoOptions";

export const VideoCard = ({ videoCardDetails }) => {
  const navigate = useNavigate();

  const {
    _id,
    title,
    creator,
    profileUrl,
    views,
    uploadDate,
    videoLength,
    thumbnailUrl,
    thumbnailTitle,
  } = videoCardDetails;

  const videoViewsInShort = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(views);

  const openVideoHandler = () => {
    navigate(`/watch/${_id}`);
  };

  const [videoOptionsBox, setVideoOptionsBox] = useState(false);

  return (
    <>
      <div className="video-card-container flex-column" id={_id}>
        <img
          className="thumbnail-img"
          src={thumbnailUrl}
          alt={thumbnailTitle}
          onClick={openVideoHandler}
        />

        <div className="video-details flex">
          <div className="profile-img-box mg-top-xsm mg-right-xsm">
            <img className="profile-img" src={profileUrl} alt={creator} />
            <p className="video-time">{videoLength}</p>
          </div>
          <div className="video-details-text flex-column mg-y-xsm">
            <p
              onClick={openVideoHandler}
              className="video-title fw-bold white-color"
            >
              {title}
            </p>

            <p className="creator-name">{creator}</p>
            <p className="views-and-date">
              {videoViewsInShort} Views • {uploadDate}
            </p>
          </div>
          <i
            className="material-icons mg-top-xsm"
            onClick={() =>
              setVideoOptionsBox((videoOptionBox) => !videoOptionBox)
            }
          >
            more_vert
          </i>
        </div>
        {videoOptionsBox && <VideoOptions activeVideo={videoCardDetails} />}
      </div>
    </>
  );
};
