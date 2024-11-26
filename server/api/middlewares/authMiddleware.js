import jwt from "jsonwebtoken";
import express from "express";
const app = express();
app.use(express.json()); // Ensure this is before the routes

const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Access denied, no token provided" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || "defaultSecret");
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

export default authenticateToken;

