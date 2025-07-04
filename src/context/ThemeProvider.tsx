import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
  //   theme: string;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const appTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      // primary: {
      //   main: "#ff5252",
      // },
    },
  });
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <MuiThemeProvider theme={appTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
