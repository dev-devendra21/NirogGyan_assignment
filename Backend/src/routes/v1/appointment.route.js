import express from "express";
import { createAppointmentController } from "../../controllers/appointment.controller.js";

const router = express.Router();

router.post("/", createAppointmentController);

export default router;
