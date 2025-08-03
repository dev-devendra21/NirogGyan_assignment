import DoctorModel from "../models/doctor.model.js";

async function getAllDoctorsService() {
  try {
    const doctors = await DoctorModel.find();
    return doctors;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getSingleDoctorService(id) {
  try {
    const doctor = await DoctorModel.findById(id);
    return doctor;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createDoctorService(doctor) {
  try {
    const newDoctor = await DoctorModel.create(doctor);
    return newDoctor;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { getAllDoctorsService, getSingleDoctorService, createDoctorService };
