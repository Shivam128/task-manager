import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.style.background = dark ? "#333" : "#fff";
    document.body.style.color = dark ? "#fff" : "#000";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button onClick={() => setDark((prev) => !prev)}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
