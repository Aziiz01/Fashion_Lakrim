// src/ThemeProvider.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const themes = {
    darkMode: {
      primary: '#8B0000',
      secondary: '#505050',
      accent: '#FF7F7F',
      backgroundColor:'#000000',
      navbarColor:'#505050',
    },
    lightMode: {
      primary: '#FF7F7F',
      secondary: '#FFC1C1',
      accent: '#D3D3D3',
      backgroundColor:'#FFFFFF',
      navbarColor:'#FFC1C1',

    },
  };

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.darkMode);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === themes.darkMode
        ? themes.lightMode
        : themes.darkMode
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
