import { Router } from "express";
import UserController from "../controllers/userController.js";

const router = Router();

router.get("/guides", UserController.getGuides);
router.get("/guide/:id", UserController.getGuidebyId);
router.put("/guide/:id", UserController.updateGuidebyId);
router.get("/travellers", UserController.getTravellers);
router.get("/traveller/:id", UserController.getTravellerbyId);
router.get("/vehicles", UserController.getVehicles);
router.get("/vehicle/:id", UserController.getVehiclebyId);
router.put("/vehicle/:id", UserController.updatevehiclebyId);
router.get("/equipments", UserController.getEquipments);
router.get("/equipment/:id", UserController.getEquipmentbyId);
router.put("/equipment/:id", UserController.updateEquipmentbyId);
router.put("/equipment/:id", UserController.updateEquipmentbyId);
router.get("/download-report", UserController.downloadReport);
export default router;