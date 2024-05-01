import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchTrailerHook from "../hooks/useFetchTrailerhook";
import { FETCH_API_OPTIONS } from "../utils/constants";
import { addNowPlayingTrailer } from "../utils/movieslice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerInfo = useSelector((state) => state?.movies?.trailerVideo);
  console.log(trailerInfo);
  useFetchTrailerHook(movieId);
  return (
    <div className="w-screen">
      {trailerInfo && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerInfo?.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          autoPlay={1}
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
