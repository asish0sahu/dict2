import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { ThemeContext } from "./ContextTheme";
import { WordContext } from "./SearchContext";

const SearchForm = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { searchTerm, setSearchTerm, GetWord } = useContext(WordContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      document.getElementById("emptyError").innerText =
        "Whoops, it can't be empty";
    } else {
      GetWord();
    }
  };

  return (
    <div
      id="formWrapper"
      className={`flex flex-col px-3 py-2 formWrapper ${
        darkTheme ? "dark" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-4 w-full">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for any word..."
          className={`formInput border border-spacing-0${
            darkTheme ? " dark" : ""
          }`}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <BiSearch
          className="searchIcon text-purple-600 cursor-pointer"
          size="1.2rem"
          onClick={HandleSubmit}
        />
      </div>
      <div id="emptyError" className="text-danger"></div>
    </div>
  );
};

export default SearchForm;
