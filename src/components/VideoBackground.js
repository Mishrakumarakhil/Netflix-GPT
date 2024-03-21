import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addtrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

export const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const tarilerId = useSelector((state) => state.movies.tarilerId);
  //Fetch trailer video

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type == "Trailer");

    let trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addtrailerVideo(trailer.key));
    console.log("json", trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + tarilerId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};
