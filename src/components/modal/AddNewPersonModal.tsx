import React, { useState } from "react";
interface AddNewPersonModalProps {
  onClose: () => void;
  onAdd: (name: string) => void;
}
const AddNewPersonModal = ({ onClose, onAdd }: AddNewPersonModalProps) => {
  const [name, setName] = useState<string>("");
  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center fixed top-0 right-0 bottom-0 left-0">
      <div className="mx-4 bg-white px-16 py-14 rounded-md text-center">
        <h1 className="text-xl mb-4 font-bold text-slate-500 flex items-center justify-center">
          Add a new Person
        </h1>
        <div className="my-6">
          {/* <label
            htmlFor="first_name"
            className="block mb-2 text-md font-bold text-slate-500 dark:text-gray-300"
          >
            Gift List Name
          </label> */}
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Gift List Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          className="px-7 py-2 bg-none border-2 border-slate-600 text-slate-600 font-bold text-md rounded-md shadow-sm hover:text-slate-700 hover:border-slate-700 hover:shadow-lg focus:border-slate-700 focus:text-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:border-slate-800 active:text-slate-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => onClose()}
        >
          Cancel
        </button>
        <button
          className={`px-7 py-2 ml-2 font-medium text-bold rounded-md shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out border-2 ${
            name !== ""
              ? "bg-slate-800 border-slate-800 text-white"
              : "bg-gray-300 border-gray-300 text-gray-400"
          }`}
          onClick={() => {
            onAdd(name);
            onClose();
          }}
          disabled={name === ""}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewPersonModal;
