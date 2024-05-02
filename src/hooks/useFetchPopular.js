import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FETCH_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieslice";

const useFetchPopularHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=3",
        FETCH_API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json?.results));
    };
    getTrendingMovies();
  }, []);
};

export default useFetchPopularHook;
