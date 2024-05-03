import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/movieslice";
import gptReducer from "../utils/gptSlice";
import languageReducer from "../utils/LanguageSlice";
const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    language: languageReducer,
  },
});

export default appstore;
