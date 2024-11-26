import pkg from 'pg'; 
const { Pool } = pkg; 
import dotenv from "dotenv"; 
dotenv.config();


const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'travelpoint',
  // ssl: { rejectUnauthorized: false } // Uncomment if using SSL
});


pool.on("connect", () => {
  console.log("Connected to the database");
});

pool.on("error", (err) => {
  console.error("Database connection error", err);
});

export { pool }; 
