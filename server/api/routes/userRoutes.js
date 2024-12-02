import { Router } from "express";
import UserController from "../controllers/userController.js";
import { getUserBookings } from "../controllers/bookingController.js";

const router = Router();

router.get("/guides", UserController.getGuides);
router.get("/guide/:id", UserController.getGuidebyId);
router.get("/travellers", UserController.getTravellers);
router.get("/traveller/:id", UserController.getTravellerbyId);
router.get("/vehicles", UserController.getVehicles);
router.get("/vehicle/:id", UserController.getVehiclebyId);
router.get("/equipments", UserController.getEquipments);
router.get("/equipment/:id", UserController.getEquipmentbyId);
router.get("/:id/bookings", getUserBookings);

export default router;