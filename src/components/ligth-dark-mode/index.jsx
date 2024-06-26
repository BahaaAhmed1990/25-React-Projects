import React from "react";
import "./theme.css";
import useStorage from "./useStorage";

function LightDarkTheme() {
  const [theme, setTheme] = useStorage("theme", "light");

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-container" data-theme={theme}>
      <h1>light dark theme</h1>
      <button onClick={handleTheme}>change theme</button>
    </div>
  );
}

export default LightDarkTheme;
