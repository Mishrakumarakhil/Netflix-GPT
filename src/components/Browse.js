import React, { useEffect } from "react";
import { Header } from "./Header";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

export const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};
