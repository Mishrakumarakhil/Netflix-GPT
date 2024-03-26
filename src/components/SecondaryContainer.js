import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  // {
  //   moviesList - Populer
  //   moviesList- Now Playing
  //   moviesList trending

  // }

  return (
    <div>
      {" "}
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  );
};
