const pool = require("../config/db");

const findUserByEmail = async (email) => {
  const res = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return res.rows[0];
};

const createUser = async (email, password) => {
  const res = await pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
    [email, password]
  );
  return res.rows[0];
};

module.exports = {
  findUserByEmail,
  createUser,
};
