import {
  getAllDoctorsService,
  getSingleDoctorService,
  createDoctorService,
} from "../services/doctor.service.js";

async function getAllDoctorsController(req, res) {
  try {
    const doctors = await getAllDoctorsService();
    res.status(200).json({
      message: "Doctors fetched successfully",
      data: doctors,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function getSingleDoctorController(req, res) {
  try {
    const id = req.params.id;
    const doctor = await getSingleDoctorService(id);
    res.status(200).json({
      message: "Doctor fetched successfully",
      data: doctor,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function createDoctorController(req, res) {
  try {
    const doctor = await createDoctorService(req.body);
    res.status(200).json({
      message: "Doctor created successfully",
      data: doctor,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

export {
  getAllDoctorsController,
  getSingleDoctorController,
  createDoctorController,
};
