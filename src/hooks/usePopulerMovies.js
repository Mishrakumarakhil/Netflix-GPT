import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopulerMovies } from "../utils/movieSlice";

const usePopulerMovies = () => {
  // Fetch data from TMDB API and updated the store

  const dispatch = useDispatch();
  const getPopulerMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopulerMovies(json.results));
  };

  useEffect(() => {
    getPopulerMovies();
  }, []);
};
export default usePopulerMovies;
