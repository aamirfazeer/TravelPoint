import { pool } from "../config/db.js"; 

const UserModel = {

  async findUserByEmail(email) {
    try {
      const res = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      return res.rows[0];
    } catch (error) {
      throw new Error("Failed to find user by email: " + error.message);
    }
  },

  async getUserById(id) {
    try {
        const query = `SELECT * FROM users WHERE id = $1`;
        const { rows } = await pool.query(query, [parseInt(id, 10)]); // Parse ID as integer
        return rows[0];
    } catch (error) {
        throw new Error("Failed to retrieve user by ID: " + error.message);
    }
  },
};

export { UserModel };
