import React from "react";
import { useSelector } from "react-redux";
import { VideoTitle } from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";

export const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (movies === null) return; // Known As early return
  const mainMovie = movies[0];
  const { original_title, overview } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};