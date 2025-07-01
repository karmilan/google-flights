import { createContext } from "react";

// type Theme = "light" | "dark";

type ThemeContextType = {
  appTheme?: "light" | "dark";
  darkMode?: boolean;
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
