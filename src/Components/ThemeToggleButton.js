import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.primary,
        color: theme.secondary,
        border: `2px solid ${theme.accent}`,
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
