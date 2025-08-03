import AppointmentModel from "../models/appointment.model.js";

async function createAppointmentService(appointment) {
  try {
    const newAppointment = await AppointmentModel.create(appointment);
    return newAppointment;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { createAppointmentService };
