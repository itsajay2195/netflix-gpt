import React, { useState } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayinghooks";
import SecondaryContainer from "./SecondaryComponent";
import Header from "./Header";
import Maincontainer from "./Maincontainer";

const Browse = () => {
  const [movies, setMovies] = useState([]);
  useNowPlayingMovies();

  return (
    <div className="bg-black">
      <Header />
      <Maincontainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
