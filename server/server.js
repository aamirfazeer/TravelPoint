// server.js

import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./api/routes/authRoutes.js"; // Ensure authRoutes.js exists or comment out if not needed
import userRoutes from "./api/routes/userRoutes.js";
import postRoutes from "./api/routes/postRoutes.js";
import { pool } from "./api/config/db.js";
import http from 'http';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' })); // Adjust limit as needed
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes); // Ensure authRoutes.js exists or comment out if not needed

// Connect to database
const connectToDatabase = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Database connected successfully:", result.rows[0]);
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error; // Re-throw the error to handle it in the `startServer` function
  }
};

// Start server
const startServer = async () => {
  try {
    await connectToDatabase();
    const server = http.createServer(app);
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Server connection failed", error.message);
  }
};
startServer();

export default app;
