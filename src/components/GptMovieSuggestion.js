import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovieNames, gptMovies } = useSelector((state) => state.gpt);
  return (
    <div>
      {gptMovieNames?.map((movie, index) => (
        <>
          {/* <h1>{gptMovieNames[0]}</h1> */}
          <MovieList title={movie} movies={gptMovies[index]} />
        </>
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
