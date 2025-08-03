import { useNavigate, useParams } from "react-router-dom";
import { formatTo12Hour } from "../utils/format";
import Button from "./ui/Button";
import React, { useState } from "react";
import { createAppointment } from "../api/appointment";
import type { AppointmentDTO } from "../types/appointment.dto";
import { toast } from "react-toastify";

type FormProps = {
  data: {
    name: string;
    email: string;
    datetime: string;
  };
  errors: {
    name: string;
    email: string;
    datetime: string;
  };
};

type PatientFormProps = {
  onClose: () => void;
};

const PatientForm: React.FC<PatientFormProps> = ({ onClose }) => {
  const [data, setData] = useState<FormProps>({
    data: {
      name: "",
      email: "",
      datetime: "",
    },
    errors: {
      name: "",
      email: "",
      datetime: "",
    },
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const checkValidation = () => {
    if (data.data.name && data.data.email && data.data.datetime) {
      return true;
    }
    setData({
      ...data,
      errors: {
        name: !data.data.name
          ? "Name is required"
          : data.data.name.length < 3
          ? "Name must be at least 3 characters"
          : "",
        email: !data.data.email
          ? "Email is required"
          : RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(
              data.data.email
            )
          ? ""
          : "Invalid email address",
        datetime: !data.data.datetime ? "Datetime is required" : "",
      },
    });
    return false;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkValidation()) return;
    try {
      const result = {
        name: data.data.name,
        email: data.data.email,
        date: data.data.datetime.split("T")[0],
        time: formatTo12Hour(data.data.datetime.split("T")[1]),
        doctorId: id,
      };
      const res = await createAppointment(result as AppointmentDTO);
      if (res.success) {
        toast.success("Your appointment has been created successfully");
        setTimeout(() => {
          navigate("/feedback/success");
        }, 3000);
      } else {
        toast.error("Something went wrong");
        setTimeout(() => {
          navigate("/feedback/failed");
        }, 3000);
      }
      onClose();
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      data: {
        ...data.data,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...data.errors,
        [e.target.name]: "",
      },
    });
  };
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Patients Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={data.data.name}
            onChange={(e) => handleChange(e)}
          />
          {data.errors.name && (
            <p className="text-red-500 text-xs mt-1">{data.errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            placeholder="Enter your email"
            value={data.data.email}
            onChange={(e) => handleChange(e)}
          />
          {data.errors.email && (
            <p className="text-red-500 text-xs mt-1">{data.errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="datetime" className="block text-sm font-medium mb-2">
            Date and Time
          </label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            className="w-full border border-gray-300 rounded-md p-2 text-sm "
            value={data.data.datetime}
            onChange={(e) => handleChange(e)}
          />
          {data.errors.datetime && (
            <p className="text-red-500 text-xs mt-1">{data.errors.datetime}</p>
          )}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default PatientForm;
