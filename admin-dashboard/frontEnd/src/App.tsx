// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import MultiStepForm from "./components/MultiStepForm";
import SubmissionTablePage from "./components/SubmissionTablePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/multiStepForm" element={<MultiStepForm />} />
        <Route path="/submission-table" element={<SubmissionTablePage />} />

        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
