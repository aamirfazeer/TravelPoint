import { pool } from "../config/db.js"; // Importing the pool

const UserModel = {
  // Find user by email
  async findUserByEmail(email) {
    try {
      const res = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      return res.rows[0];
    } catch (error) {
      throw new Error("Failed to find user by email: " + error.message);
    }
  },

  // Create a new user
  async createUser(data) {
    try {
      const query = `
        INSERT INTO users (first_name, last_name, phone_number, location, password, nic_passport, email, username, date_of_birth, profile_pic, bio, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING *;
      `;
      const values = [
        data.firstName,
        data.lastName,
        data.phoneNumber,
        data.location,
        data.password, // Ensure this is hashed
        data.nicPassport,
        data.email,
        data.username || null,
        data.dateOfBirth || null,
        data.profilePic || null,
        data.bio || null,
        data.status || 2, // Default status
      ];
      const res = await pool.query(query, values);
      return res.rows[0];
    } catch (error) {
      throw new Error("Failed to create user: " + error.message);
    }
  },

  // Get user by ID
  async getUserById(id) {
    try {
        const query = `SELECT * FROM users WHERE id = $1`;
        const { rows } = await pool.query(query, [parseInt(id, 10)]); // Parse ID as integer
        return rows[0];
    } catch (error) {
        throw new Error("Failed to retrieve user by ID: " + error.message);
    }
},

  // Update user by ID
  async updateUserById(id, data) {
    const query = `
        UPDATE users
        SET 
          first_name = $1,
          last_name = $2,
          phone_number = $3,
          location = $4,
          email = $5,
          username = $6,
          date_of_birth = $7,
          profile_pic = $8,
          bio = $9
        WHERE id = $10
        RETURNING *;
    `;
    const values = [
        data.firstName,
        data.lastName,
        data.phoneNumber,
        data.location,
        data.email,
        data.username || null,
        data.dateOfBirth || null,
        data.profilePic || null,
        data.bio || null,
        id,
    ];
    try {
        console.log("Executing query:", query);
        console.log("With values:", values);
        const { rows } = await pool.query(query, values);
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", query);
        console.error("With values:", values);
        throw new Error("Failed to update user by ID: " + error.message);
    }
}
};

export { UserModel };
