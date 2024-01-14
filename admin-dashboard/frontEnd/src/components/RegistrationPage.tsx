import React, { useState } from "react";
import axios from "axios";
import RegistrationForm from "./RegistrationForm";
import { useNavigate } from "react-router-dom";

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/register", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        console.log("successfully registered");
        // Handle successful registration, e.g., redirect to login page
        navigate("/multiStepForm");
      } else {
        setError("Registration failed. Please check your information.");
      }
    } catch (error) {
      console.log(error);

      setError(
        `An error occurred during registration. ${
          error.response && error.response.data.message
            ? error.response.data.message
            : "Please try again later."
        }`
      );
    }
  };

  return (
    <RegistrationForm
      name={name}
      email={email}
      password={password}
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      handleRegistration={handleRegistration}
      error={error}
    />
  );
};

export default RegistrationPage;
