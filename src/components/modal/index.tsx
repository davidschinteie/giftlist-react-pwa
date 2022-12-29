import React from "react";

interface ModalProps {
  modalText: string;
  onClose: () => void;
  onRemove: () => void;
}

const Modal = ({ modalText, onClose, onRemove }: ModalProps) => {
  return (
    <div className="max-w-6xl mx-aut bg-slate-800 bg-opacity-50 flex justify-center items-center fixed top-0 right-0 bottom-0 left-0">
      <div className="mx-4 bg-white px-16 py-14 rounded-md text-center">
        <h1 className="text-xl mb-4 font-bold text-slate-500">{modalText}</h1>
        <button
          className="bg-gray-500 px-4 py-2 rounded-md text-md text-white"
          onClick={() => onClose()}
        >
          Cancel
        </button>
        <button
          className="bg-red-800 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
          onClick={() => onRemove()}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default Modal;
