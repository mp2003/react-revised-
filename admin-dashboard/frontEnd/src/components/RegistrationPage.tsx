import React, { useState } from "react";
import axios from "axios";
import RegistrationForm from "./RegistrationForm";
import { useNavigate } from "react-router-dom";

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      // Validate mandatory fields
      if (!name || !email || !password || !confirmPassword) {
        setError(
          "!!! All fields are mandatory. Please fill in all the details."
        );
        return;
      }

      // Validate password match
      if (password !== confirmPassword) {
        setError("!!!! Password and Confirm Password do not match.");
        return;
      }

      const response = await axios.post("http://localhost:3001/api/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      if (response.data.success) {
        console.log("Successfully registered");
        // Handle successful registration, e.g., redirect to login page
        navigate("/multiStepForm");
      } else {
        setError("!!! Registration failed. Please check your information.");
      }
    } catch (error: any) {
      console.log(error);

      setError(
        `!!! An error occurred during registration. ${
          error.response && error.response.data.message
            ? error.response.data.message
            : "Please try again later."
        }`
      );
    }
  };

  // Clear all fields on page reload
  window.onload = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <RegistrationForm
      name={name}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      handleRegistration={handleRegistration}
      error={error}
    />
  );
};

export default RegistrationPage;
