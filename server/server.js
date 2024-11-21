import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./api/routes/authRoutes.js";
import { pool } from "./api/config/db.js";
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

const connectToDatabase = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Database connected successfully:", result.rows[0]);
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error; // Re-throw the error to handle it in the `startServer` function
  }
};
 

const startServer = async () =>{
  try{
    await connectToDatabase();
    const server = http.createServer(app);
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });  
  }catch(error){
    console.error("Server connection failed", error.message);
  }
};
startServer();

export default app;





