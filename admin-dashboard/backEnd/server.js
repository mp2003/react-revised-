const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());

// Sample user data for login
const users = [
  {
    id: 1,
    email: "test@example.com",
    password: "password123",
  },
  // Add more users as needed
];

// Body parser middleware
app.use(express.json());

// Login endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Simple authentication logic
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, userId: user.id });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }
});

// Registration endpoint
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user with the provided email already exists
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    res.status(400).json({ success: false, message: "User already exists" });
  } else {
    // Create a new user and add it to the users array
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
    };

    users.push(newUser);

    res.json({ success: true, userId: newUser.id });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
