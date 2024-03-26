import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="text-4xl py-6">{title}</h1>
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
