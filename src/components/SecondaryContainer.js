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
    <div className="bg-black">
      <div className=" mt-0 md:-mt-80 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Populer"} movies={movies.populerMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};
