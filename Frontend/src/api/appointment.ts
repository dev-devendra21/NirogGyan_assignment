import { type AppointmentDTO } from "../types/appointment.dto";

async function createAppointment(data: AppointmentDTO) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/v1/appointments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

export { createAppointment };
