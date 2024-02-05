import React, { useContext } from "react";
import "./App.css";
import Display from "./components/Display";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import { ThemeContext } from "./components/ContextTheme";
import { SearchContext } from "./components/SearchContext";

function App() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <SearchContext>
      <div
        className={`appContainer ${
          darkTheme ? "dark" : ""
        } flex flex-col items-center justify-center`}
      >
        <div className="appWrapper flex flex-col gap-4">
          <Navigation />
          <SearchForm />
          <Display />
        </div>
      </div>
    </SearchContext>
  );
}

export default App;
