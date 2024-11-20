import express from "express"; // Import express
import { register, login } from "../controllers/authController.js";// ES6 import style

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;  
