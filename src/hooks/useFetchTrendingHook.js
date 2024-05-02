import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FETCH_API_OPTIONS } from "../utils/constants";
import { addNowTrendingMovies } from "../utils/movieslice";

const useFetchTrendingHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day",
        FETCH_API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowTrendingMovies(json?.results));
    };
    getTrendingMovies();
  }, []);
};

export default useFetchTrendingHook;
