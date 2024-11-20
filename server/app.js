import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./api/routes/authRoutes.js";
import { pool } from "./api/config/db.js";

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Database connection failed", error });
  }
});

export default app;
