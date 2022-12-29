import React from "react";
interface NotificationModalProps {
  notificationMessage: string;
  onClose: () => void;
}
const NotificationModal = ({
  notificationMessage,
  onClose,
}: NotificationModalProps) => {
  return (
    <div className="bg-white border border-slate-300 w-full h-20 shadow-lg rounded-md gap-4 p-4 flex flex-row items-center justify-center fixed bottom-0">
      <section className="w-6 h-full flex flex-col items-center justify-center">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-green-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </section>
      <section className="h-full flex flex-col items-start justify-center gap-1">
        <h1 className="text-base font-semibold text-zinc-800 antialiased">
          {notificationMessage}
        </h1>
        {/* <p className="text-sm font-medium text-zinc-400 antialiased">
          {}
        </p> */}
      </section>
      <section className="w-5 h-full flex flex-col items-center justify-start">
        <button onClick={() => onClose()}>
          <svg
            width="100%"
            viewBox="0 0 15 15"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M4.06585 3.00507C3.77296 2.71218 3.29809 2.71218 3.00519 3.00507C2.7123 3.29796 2.7123 3.77284 3.00519 4.06573L4.06585 3.00507ZM10.0763 11.1368C10.3692 11.4297 10.844 11.4297 11.1369 11.1368C11.4298 10.8439 11.4298 10.369 11.1369 10.0761L10.0763 11.1368ZM3.00519 4.06573L10.0763 11.1368L11.1369 10.0761L4.06585 3.00507L3.00519 4.06573Z"
              fill="#989fac"
            />
            <path
              d="M11.1369 4.06573C11.4298 3.77284 11.4298 3.29796 11.1369 3.00507C10.844 2.71218 10.3691 2.71218 10.0762 3.00507L11.1369 4.06573ZM3.00517 10.0761C2.71228 10.369 2.71228 10.8439 3.00517 11.1368C3.29806 11.4297 3.77294 11.4297 4.06583 11.1368L3.00517 10.0761ZM10.0762 3.00507L3.00517 10.0761L4.06583 11.1368L11.1369 4.06573L10.0762 3.00507Z"
              fill="#989fac"
            />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default NotificationModal;
