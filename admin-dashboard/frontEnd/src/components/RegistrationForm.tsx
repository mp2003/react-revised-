import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

interface RegistrationFormProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  handleRegistration: () => void;
  error: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  handleRegistration,
  error,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 via-purple-600 to-purple-800">
      <div className="bg-white bg-opacity-30 p-10 rounded-lg shadow-md max-w-lg w-full relative">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Registration Page
        </h2>

        <div className="mb-6">
          <label className="text-white text-lg">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Name:
          </label>
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            className="placeholder-style w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transperent-200 rounded-md text-base text-white"
          />
        </div>

        <div className="mb-6">
          <label className="text-white text-lg">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email:
          </label>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder-style w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transperent-200 rounded-md text-base text-white"
          />
        </div>

        <div className="mb-6">
          <label className="text-white text-lg">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Password:
          </label>
          <input
            type="password"
            value={password}
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="placeholder-style w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transperent-200 rounded-md text-base text-white"
          />
        </div>

        <div className="mb-6">
          <label className="text-white text-lg">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Confirm Password:
          </label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Re-Enter your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="placeholder-style w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transperent-200 rounded-md text-base text-white"
          />
        </div>

        <button
          onClick={handleRegistration}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 text-lg"
        >
          Register
        </button>

        {error && (
          <p className="text-white mt-4 text-m font-semibold bg-red-500 p-2 rounded-md">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
