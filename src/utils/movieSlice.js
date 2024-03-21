import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    tarilerId: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addtrailerVideo: (state, action) => {
      state.tarilerId = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addtrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
