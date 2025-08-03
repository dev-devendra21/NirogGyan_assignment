import { FaUserDoctor } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getAllDoctorsList } from "../api/doctors.ts";
import DoctorList from "../components/DoctorList";
import type { DoctorDTO } from "../types/doctor.dto.ts";

const Home = () => {
  const [data, setData] = useState<DoctorDTO[]>([]);
  const fetchAllDoctors = async () => {
    try {
      const data = await getAllDoctorsList();
      setData(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };
  useEffect(() => {
    fetchAllDoctors();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      fetchAllDoctors();
      return;
    }
    const searchQuery = e.target.value.toLowerCase();
    const filteredData = data.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(searchQuery) ||
        doctor.specialization.toLowerCase().includes(searchQuery)
      );
    });
    setData(filteredData);
  };
  return (
    <div className="flex flex-col items-center pt-10 px-5">
      <section className="text-center mb-10">
        <h1 className="text-xl">
          <FaUserDoctor className="inline" /> <span>Find Your Doctor</span>
        </h1>
        <p className="text-sm text-gray-500 mt-3">
          Connect with experienced healthcare professionals in your area. Browse
          through our directory of qualified doctors and check their
          availability.
        </p>
      </section>
      <section className="mb-8 w-full md:w-3/4 lg:w-1/2">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 w-full rounded-md text-sm"
          placeholder="Search for doctors by name or specialization..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
        />
      </section>

      <section className="flex flex-col items-center w-full md:w-3/4 lg:w-1/2">
        {data.length === 0 && (
          <p className="text-sm text-gray-500 mt-3">No Doctors Found</p>
        )}

        {data.length > 0 &&
          data.map((doctor) => <DoctorList key={doctor._id} data={doctor} />)}
      </section>
    </div>
  );
};

export default Home;
