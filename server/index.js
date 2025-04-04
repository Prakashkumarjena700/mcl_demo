const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const userRoute = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// // Connect to the database

app.get("/", (req, res) => {
  res.send("Welcome to MCL demo DB");
});

app.use("/users", userRoute);


connectDB();
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
