import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_API_OPTIONS, LANG } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";
import openai from "../utils/openAi";
import GptMovieSuggestion from "./GptMovieSuggestion";

const searchMovies = async (movie) => {
  console.log("movie is", movie);
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
    FETCH_API_OPTIONS
  );
  const json = await data.json();

  return json.results;
};

const GptSearchBar = () => {
  const selectedLang = useSelector(
    (state) => state?.language?.selectedLanguage
  );
  const dispatch = useDispatch();

  const searchTextRef = useRef(null);

  const hadleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchTextRef.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const results = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!results?.choices) {
    }

    const gptMovieNames = results?.choices?.[0]?.message?.content?.split(",");
    const moviePromises = gptMovieNames?.map((movie) => {
      return searchMovies(movie);
    });
    const gptMovies = await Promise.all(moviePromises);
    dispatch(
      addGptMovies({
        gptMovieNames: gptMovieNames,
        gptMovies: gptMovies,
      })
    );
    // console.log("Result is>>>", result);
  };
  return (
    <div className="pt-[8%]  flex justify-center ">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-9"
          ref={searchTextRef}
          placeholder={LANG?.[selectedLang?.label]?.gptSearchPlaceholder}
        />
        <button
          onClick={hadleGptSearch}
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 hover:bg-red-300"
        >
          {LANG?.[selectedLang?.label]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
