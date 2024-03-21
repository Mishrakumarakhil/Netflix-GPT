import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-white p-4 px-10  text-xl bg-opacity-50 rounded-lg">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-10  text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
