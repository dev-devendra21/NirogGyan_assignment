import Card from "../components/ui/Card";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { type DoctorDTO } from "../types/doctor.dto";

const DoctorList: React.FC<{ data: DoctorDTO }> = ({ data }) => {
  return (
    <Link to={`/doctors/${data._id}`} className="w-full">
      <Card className="w-full flex md:flex-row mb-3 cursor-pointer">
        <Card.Header>
          <Card.Image imgSrc={data.image} alt={data.name} />
        </Card.Header>
        <Card.Body className="ml-4 w-full">
          <div className="flex justify-between items-center">
            <Card.Title>{data.name}</Card.Title>
            <p
              className={`text-xs  py-1 px-2 rounded-3xl ${
                data.availability.status
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {data.availability.status ? "Available" : "Busy"}
            </p>
          </div>
          <Card.Description>{data.specialization}</Card.Description>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div>
              <GoClock className="inline text-sm text-gray-500" />
              <span className="ml-2 text-xs text-gray-500">
                {data.experience} years
              </span>
            </div>
            <div className="flex gap-1">
              <IoLocationOutline className="text-sm text-gray-500" />
              <address className="text-xs text-gray-500">
                {data.address}
              </address>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-gray-500">
              click to view profile and book appointment
            </p>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default DoctorList;
