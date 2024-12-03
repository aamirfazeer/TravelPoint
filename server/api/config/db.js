import pkg from 'pg'; 
const { Pool } = pkg; 
import dotenv from "dotenv"; 
dotenv.config();


const pool = new Pool({
  host: "travelpoint-db.postgres.database.azure.com" ,
  port: 5432 ,
  user: "postgres" ,
  password: "tp/3@UCSC" ,
  database: "travelpoint" ,
  ssl: { rejectUnauthorized: false } // Uncomment if using SSL
});


pool.on("connect", () => {
  console.log("Connected to the database");
});

pool.on("error", (err) => {
  console.error("Database connection error", err);
});

export { pool }; 
