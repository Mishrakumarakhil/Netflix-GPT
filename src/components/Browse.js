import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import usePopulerMovies from "../hooks/usePopulerMovies";

export const Browse = () => {
  useNowPlayingMovies();
  usePopulerMovies();
  return (
    <>
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
    </>
  );
};
