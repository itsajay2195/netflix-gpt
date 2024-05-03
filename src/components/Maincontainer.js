import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Maincontainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );

  const selectedLang = useSelector(
    (state) => state?.language?.selectedLanguage
  );

  if (nowPlayingMovies?.length == 0) return;

  const mainMovie = nowPlayingMovies?.[1];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle
        title={original_title}
        overview={overview}
        selectedLang={selectedLang}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default Maincontainer;
