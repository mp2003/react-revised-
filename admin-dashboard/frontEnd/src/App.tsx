// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import MultiStepForm from "./components/MultiStepForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/multiStepForm" element={<MultiStepForm />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
