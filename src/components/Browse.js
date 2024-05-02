import React, { useState } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayinghooks";
import SecondaryContainer from "./SecondaryComponent";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import useFetchTrendingHook from "../hooks/useFetchTrendingHook";
import useFetchPopularHook from "../hooks/useFetchPopular";

const Browse = () => {
  useNowPlayingMovies();
  useFetchTrendingHook();
  useFetchPopularHook();
  return (
    <div className="bg-black">
      <Header />
      <Maincontainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
