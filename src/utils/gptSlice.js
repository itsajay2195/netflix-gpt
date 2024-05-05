import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchView: false,
    gptMovieNames: null,
    gptMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
    addGptMovies: (state, action) => {
      const { gptMovieNames, gptMovies } = action?.payload;
      state.gptMovieNames = gptMovieNames;
      state.gptMovies = gptMovies;
    },
  },
});

export const { toggleGptSearchView, addGptMovies } = gptSlice?.actions;

export default gptSlice.reducer;
