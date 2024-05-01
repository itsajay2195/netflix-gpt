import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FETCH_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieslice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNoewPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        FETCH_API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json?.results));
    };
    getNoewPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
