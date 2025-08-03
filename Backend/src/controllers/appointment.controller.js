import { createAppointmentService } from "../services/appointment.service.js";

async function createAppointmentController(req, res) {
  try {
    const appointment = await createAppointmentService(req.body);
    res.status(200).json({
      message: "Appointment created successfully",
      data: appointment,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

export { createAppointmentController };
