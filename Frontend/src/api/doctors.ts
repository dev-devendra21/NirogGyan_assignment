import type { DoctorDTO } from "../types/doctor.dto";

async function getAllDoctorsList(): Promise<DoctorDTO[]> {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/v1/doctors`
  );
  const data = await response.json();
  return data.data;
}

async function getDoctorById(id: string): Promise<DoctorDTO> {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/v1/doctors/${id}`
  );
  const data = await response.json();
  return data.data;
}

export { getAllDoctorsList, getDoctorById };
