import React from "react";
import { IoIosClose } from "react-icons/io";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative mx-4">
          <button
            className="text-gray-400 hover:text-gray-500 absolute top-2 right-2 cursor-pointer"
            onClick={onClose}
          >
            <IoIosClose className="w-6 h-6" />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
