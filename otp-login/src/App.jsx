import React, { useEffect } from "react";
import LoginWithPhone from "./components/LoginWithPhone";
import { themeChange } from "theme-change";

const App = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  themeChange(false, "light");
  return (
    <div className="font-sans text-center">
      <marquee>
        <h1 className="text-2xl font-semibold">Login with Phone</h1>
      </marquee>

      <LoginWithPhone />
    </div>
  );
};

export default App;
