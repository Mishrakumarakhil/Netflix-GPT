import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    populerMovies: null,
    tarilerId: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addtrailerVideo: (state, action) => {
      state.tarilerId = action.payload;
    },

    addPopulerMovies: (state, action) => {
      console.log("action", action.payload);
      state.populerMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addtrailerVideo, addPopulerMovies } =
  movieSlice.actions;

export default movieSlice.reducer;
