import pkg from 'pg'; 
const { Pool } = pkg; 
import dotenv from "dotenv";  
dotenv.config()

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: String(process.env.DB_PASSWORD).trim(),
  port: Number(process.env.DB_PORT),
});


pool.on("connect", () => {
  console.log("Connected to the database");
});

pool.on("error", (err) => {
  console.error("Database connection error", err);
});

export { pool }; 
