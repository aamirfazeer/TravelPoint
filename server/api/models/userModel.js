// userModel.js
import { pool } from "../config/db.js"; // Importing the pool

// Define the function to find a user by email
const findUserByEmail = async (email) => {
  try {
    const res = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return res.rows[0];
  } catch (error) {
    throw new Error("Database query failed");
  }
};

// Define the function to create a new user
const createUser = async (email, password) => {
  try {
    const res = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, password]
    );
    return res.rows[0];
  } catch (error) {
    throw new Error("Database query failed");
  }
};

// Export functions using ES module syntax
export { findUserByEmail, createUser };
