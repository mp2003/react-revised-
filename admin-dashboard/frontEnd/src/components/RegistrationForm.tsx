import React from "react";

// Define the prop types for RegistrationForm
interface RegistrationFormProps {
  name: string;
  email: string;
  password: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleRegistration: () => void; // Specify the type of handleRegistration
  error: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  handleRegistration,
  error,
}) => {
  return (
    <div>
      <h2>Registration Page</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegistration}>Register</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default RegistrationForm;
