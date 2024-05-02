import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryComponent = () => {
  // movie list
  //1.now playing
  //2.Trending
  //3.Bow Playing

  const movies = useSelector((state) => state?.movies);

  return (
    <div className="-mt-60 relative z-100">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies?.trendingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryComponent;
