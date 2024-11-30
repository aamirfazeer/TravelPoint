import { Router } from "express";
import UserController from "../controllers/userController.js";

const router = Router();

// Fetch user details
router.get("/guides", UserController.getGuides);
router.get("/travellers", UserController.getTravellers);
router.get("/vehicles", UserController.getVehicles);
router.get("/equipments", UserController.getEquipments);

export default router;
