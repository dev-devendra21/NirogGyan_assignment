import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import { getDoctorById } from "../api/doctors";
import type { DoctorDTO } from "../types/doctor.dto";

import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import PatientForm from "../components/PatientForm";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => setIsModalOpen(!isModalOpen);
  const [data, setData] = useState<DoctorDTO>({} as DoctorDTO);

  const { id } = useParams();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await getDoctorById(id || "");
        setData(data);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };

    fetchDoctor();
  }, [id]);

  if (Object.keys(data).length === 0)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <>
      {isModalOpen && (
        <Modal onClose={handleModal}>
          <PatientForm onClose={handleModal} />
        </Modal>
      )}
      <div className="mt-5 ml-5">
        <Link to="/">
          <button className="cursor-pointer">
            <IoMdArrowRoundBack className="w-8 h-8" />
          </button>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto py-4 md:py-10 px-4">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <img
            src={data.image}
            alt={data.name}
            className="w-28 h-28 rounded-full object-cover shadow"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
            <p className="text-sm text-gray-500">{data.specialization}</p>
            <p className="text-sm text-gray-500">{data.education}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-semibold text-gray-600">Email</p>
            <p className="text-base text-gray-800">{data.email}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">Phone</p>
            <p className="text-base text-gray-800">{data.phone}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">
              Clinic Address
            </p>
            <p className="text-base text-gray-800">{data.address}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">Experience</p>
            <p className="text-base text-gray-800">{data.experience} years</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">Availability</p>
            <p className="text-base text-green-600 font-semibold">
              {data.availability.day}: {data.availability.timing}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">
              Consultation Fee
            </p>
            <p className="text-base text-gray-800">₹{data.fee}</p>
          </div>
        </div>

        <div className="my-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">About</h3>
          <p className="text-gray-600 leading-relaxed">{data.about}</p>
        </div>
        <div>
          <Button onClick={handleModal}>Book Appointment</Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
