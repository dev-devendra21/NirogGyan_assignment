import express from "express";
import {
  createDoctorController,
  getAllDoctorsController,
  getSingleDoctorController,
} from "../../controllers/doctor.controller.js";

const router = express.Router();

router.get("/", getAllDoctorsController);

router.get("/:id", getSingleDoctorController);

router.post("/", createDoctorController);

export default router;
