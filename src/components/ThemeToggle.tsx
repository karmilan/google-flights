import Switch from "@mui/material/Switch";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  //   const [checked, setChecked] = React.useState(true);

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setChecked(event.target.checked);
  //   };
  const context = useContext(ThemeContext);

  if (!context) {
    return null; // or a fallback UI
  }

  const { darkMode, toggleTheme } = context;

  return (
    <>
      <Switch checked={darkMode} onChange={toggleTheme} />
    </>
  );
}
