import React, { useState } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayinghooks";
import SecondaryContainer from "./ChildContainer";
import Header from "./Header";
import Maincontainer from "./Maincontainer";

const Browse = () => {
  const [movies, setMovies] = useState([]);
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <Maincontainer />
      {/* <SecondaryContainer /> */}
    </div>
  );
};

export default Browse;
