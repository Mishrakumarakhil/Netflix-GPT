import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-black">
      <h1 className="text-4xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((ele, ind) => (
            <MovieCard key={ele.id} posterPath={ele.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
