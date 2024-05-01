import React from "react";
import { IMG_CONSTANT } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="movie-txt" src={IMG_CONSTANT + posterPath}></img>
    </div>
  );
};

export default MovieCard;
