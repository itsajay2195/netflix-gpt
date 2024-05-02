import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trendingMovies: [],
    popularMovies: [],
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addNowTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addNowPlayingTrailer,
  addNowTrendingMovies,
  addPopularMovies,
} = movieSlice?.actions;

export default movieSlice.reducer;
