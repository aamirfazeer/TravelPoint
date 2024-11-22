import { Router } from "express";
import UserController from "../controllers/userController.js";

const router = Router();

// Fetch user details
router.get("/:id", UserController.getUser);

// Create a new user
// router.post("/", UserController.createUser);

// Update user details
router.put("/:id", UserController.updateUser);

export default router;
