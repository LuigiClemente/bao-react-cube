/* eslint-disable chai-friendly/no-unused-expressions */
/* eslint-disable no-console */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";

const Context = createContext(null);

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  // get from local storage value of theme

  const [isDarkMode, setIsDarkMode] = useState();

  const { switcher, themes } = useThemeSwitcher();

  useEffect(() => {
    console.log("theme in saleor useEffect change");
    window.addEventListener("message", (event) => {
      console.log("first render useEffect >>> ", event.data.value);
      setTheme(event.data.value);
      setIsDarkMode(event.data.value === "dark");
      switcher({
        theme: event.data.value === "dark" ? themes.dark : themes.light,
      });
    });
  }, [theme]);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppProvider = () => useContext(Context);
