const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Node.js server running on port ${PORT}`));
