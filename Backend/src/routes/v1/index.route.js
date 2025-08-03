import express from "express";
import doctorRouter from "./doctor.route.js";
import appointmentRouter from "./appointment.route.js";

const router = express.Router();

router.use("/doctors", doctorRouter);
router.use("/appointments", appointmentRouter);

export default router;
