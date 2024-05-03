import React from "react";
import { useSelector } from "react-redux";
import { LANG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchBar = () => {
  const selectedLang = useSelector(
    (state) => state?.language?.selectedLanguage
  );
  return (
    <div className="pt-[8%] flex justify-center ">
      <form className="w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          placeholder={LANG?.[selectedLang?.label]?.gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {LANG?.[selectedLang?.label]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
