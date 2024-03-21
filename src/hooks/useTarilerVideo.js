import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addtrailerVideo } from "../utils/movieSlice";

const useTarilerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type == "Trailer");

    let trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addtrailerVideo(trailer.key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTarilerVideo;
