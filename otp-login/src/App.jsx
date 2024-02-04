// App.jsx
import React from "react";
import LoginWithPhone from "./components/LoginWithPhone";
import { themeChange } from "theme-change";
import "./App.css"; // You can keep your custom styles here

const App = () => {
  themeChange(false, "light");

  // Style for the gradient background
  const gradientBgStyle = {
    background: "linear-gradient(45deg, #a7c0cd, #9771d4)",
    height: "100%",
  };

  return (
    <div className="flex items-center justify-center min-h-screen " style={gradientBgStyle}>
      <LoginWithPhone />
    </div>
  );
};

export default App;
