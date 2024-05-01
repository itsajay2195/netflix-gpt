import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_API_OPTIONS } from "../utils/constants";
import { addNowPlayingTrailer } from "../utils/movieslice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerInfo = useSelector((state) => state?.movies?.trailerVideo);
  console.log(trailerInfo);
  useEffect(() => {
    const getMovieVidoes = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        FETCH_API_OPTIONS
      );
      const json = await data?.json();
      const trailer =
        json?.results?.filter((item) => item?.type === "Trailer")?.[0] ||
        json?.results?.[0];
      dispatch(addNowPlayingTrailer(trailer));
    };
    getMovieVidoes();
  }, []);
  return (
    <div>
      {trailerInfo && (
        <iframe
          src={`https://www.youtube.com/embed/${trailerInfo?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
