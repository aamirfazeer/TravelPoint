import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {UserModel } from "../models/userModel.js";
import { pool } from "../config/db.js";


const register = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await UserModel.findUserByEmail(email);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await UserModel.createUser(email, hashedPassword);

  res.status(201).json({ message: "User created", user: newUser });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log(req.body);
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

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log(token)

    res.status(200).json({token});
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login." });
  }
};
export { register, login };
