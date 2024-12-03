import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Req.body:", req.body);
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0]; 
    console.log(user);

    if (!user) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id, first_name: user.first_name, last_name: user. last_name }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("token:", token)

    res.status(200).json({token, user});
  } catch(error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login." });
  }
};
export { login };
