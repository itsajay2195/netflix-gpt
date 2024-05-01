import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FETCH_API_OPTIONS } from "../utils/constants";
import { addNowPlayingTrailer } from "../utils/movieslice";

const useFetchTrailerHook = (movieId) => {
  const dispatch = useDispatch();

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
};

export default useFetchTrailerHook;
