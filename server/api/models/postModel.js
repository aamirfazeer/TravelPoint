import { pool } from "../config/db.js";

export const getPostsByUserId = async (userId) => {
  try {
    const result = await pool.query(
      "SELECT p.*, u.username, u.profile_pic FROM posts p JOIN users u ON p.poster_id = u.id WHERE p.poster_id = $1 ORDER BY p.updated_at DESC;",
      [userId]
    );
    return result.rows;
  } catch (error) {
    throw error;
  }
};
