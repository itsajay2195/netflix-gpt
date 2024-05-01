import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("MOvis", movies);
  return (
    <div className="px-6 bg text-white">
      <h1 className="text-2xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((item) => (
            <MovieCard key={item?.id} posterPath={item?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
