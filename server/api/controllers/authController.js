import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {UserModel } from "../models/userModel.js";


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
  const user = await UserModel.findUserByEmail(email);

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({ token });
};

// Use ES6 export syntax
export { register, login };
