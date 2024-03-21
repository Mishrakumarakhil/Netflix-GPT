import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

export const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {
        //   MainContaoner
        //    - Video Background
        //  -  video Title
        //   Secondary Container
        //   - movieList
        //   - cars*N
      }
    </div>
  );
};
