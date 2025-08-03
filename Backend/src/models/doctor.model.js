import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    availability: {
      timing: {
        type: String,
        required: true,
      },
      day: {
        type: String,
        required: true,
      },
      status: {
        type: Boolean,
        required: true,
      },
    },
    address: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
