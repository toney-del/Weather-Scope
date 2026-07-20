import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [unit, setUnit] = useState('C'); // 👈 NEW: Default to Celsius

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C')); // 👈 NEW: Toggle between C and F
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, unit, toggleUnit }}>
      {children}
    </ThemeContext.Provider>
  );
}