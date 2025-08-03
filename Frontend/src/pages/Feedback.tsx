import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Feedback = () => {
  const { status } = useParams();

  const isSuccess = status === "success";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4
      ${isSuccess ? "bg-green-50" : "bg-red-50"}
    `}
    >
      {isSuccess ? (
        <>
          <FaCheckCircle className="text-green-500 w-20 h-20 mb-4" />
          <h1 className="text-3xl font-bold text-green-700">
            Appointment Booked!
          </h1>
          <p className="mt-2 text-gray-700 text-center max-w-md">
            You will receive a confirmation via from our team shortly.
          </p>
        </>
      ) : (
        <>
          <FaTimesCircle className="text-red-500 w-20 h-20 mb-4" />
          <h1 className="text-3xl font-bold text-red-700">Booking Failed</h1>
          <p className="mt-2 text-gray-700 text-center max-w-md">
            Something went wrong while booking the appointment. Please try again
            later.
          </p>
        </>
      )}
      <Link to="/">
        <button
          className={`mt-6 px-6 py-2 rounded-lg transition font-semibold cursor-pointer
          ${
            isSuccess
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-red-600 hover:bg-red-700 text-white"
          }
        `}
        >
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Feedback;
