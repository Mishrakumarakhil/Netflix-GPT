import React from "react";
import { useSelector } from "react-redux";
import useTarilerVideo from "../hooks/useTarilerVideo";

export const VideoBackground = ({ movieId }) => {
  const tarilerId = useSelector((state) => state.movies.tarilerId);
  //Fetch trailer video key
  useTarilerVideo(movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + tarilerId + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
