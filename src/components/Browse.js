import React, { useState } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayinghooks";
import SecondaryContainer from "./SecondaryComponent";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import useFetchTrendingHook from "../hooks/useFetchTrendingHook";
import useFetchPopularHook from "../hooks/useFetchPopular";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearchView = useSelector(
    (state) => state?.gpt?.showGptSearchView
  );
  useNowPlayingMovies();
  useFetchTrendingHook();
  useFetchPopularHook();

  return (
    <div className="bg-black">
      <Header />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
