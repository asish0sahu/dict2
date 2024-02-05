import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ContextTheme = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleStateChange = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, handleStateChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
