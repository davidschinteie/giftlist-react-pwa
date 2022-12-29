import React, { useState } from "react";
interface AddNewGiftListModalProps {
  onClose: () => void;
  onAdd: (giftListName: string) => void;
}
const AddNewGiftListModal = ({ onClose, onAdd }: AddNewGiftListModalProps) => {
  const [listName, setListName] = useState<string>("");
  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center fixed top-0 right-0 bottom-0 left-0">
      <div className="mx-4 bg-white px-16 py-14 rounded-md text-center">
        <h1 className="text-xl mb-4 font-bold text-slate-500 flex items-center justify-center">
          Add a new
          <svg viewBox="0 0 512 512" className="w-6 h-6 fill-slate-500 mx-2">
            <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
          </svg>
          List
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
            value={listName}
            onChange={(e) => setListName(e.target.value)}
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
            listName !== ""
              ? "bg-slate-800 border-slate-800 text-white"
              : "bg-gray-300 border-gray-300 text-gray-400"
          }`}
          onClick={() => {
            onAdd(listName);
            onClose();
          }}
          disabled={listName === ""}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewGiftListModal;
