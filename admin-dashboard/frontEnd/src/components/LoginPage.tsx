import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true); // Start loading animation

      const response = await axios.post("http://localhost:3001/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        navigate("/register"); // Redirect to the form page upon successful login
      } else {
        setError("Invalid email or login failed");
      }
    } catch (error) {
      setError("An error occurred during login");
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 via-purple-600 to-purple-800">
      <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-md max-w-md w-full relative">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Login Page
        </h2>

        <div
          className={`mb-8 flex items-center relative ${
            loading ? "border-loading" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white text-xl mr-4 mt-2"
          />
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-white mb-1 text-sm">
              Email
            </label>
            <input
              id="email"
              className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-200 rounded-md text-base text-white placeholder-style"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div
          className={`mb-8 flex items-center relative ${
            loading ? "border-loading" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faLock}
            className="text-white text-xl mr-4 mt-2"
          />
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="text-white mb-1 text-sm">
              Password
            </label>
            <input
              id="password"
              className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-200 rounded-md text-base text-white placeholder-style"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
