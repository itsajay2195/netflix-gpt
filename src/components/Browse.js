import React, { useEffect, useState } from "react";
import { FETCH_API_OPTIONS } from "../utils/constants";
import Header from "./Header";

const Browse = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getNoewPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        FETCH_API_OPTIONS
      );
      const json = await data.json();
      setMovies(json?.results);

      console.log("Res is", json);
    };
    getNoewPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
