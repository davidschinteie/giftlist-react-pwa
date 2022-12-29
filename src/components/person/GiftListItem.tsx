import React, { useState } from "react";
import { GiftType } from "../../types";
import Modal from "../modal";

interface GiftListItemProps {
  gift: GiftType;
  handleRemoveGift: (giftId: string) => void;
  handleUpdateGiftActive: (
    updateGiftId: string,
    updateGiftActive: boolean
  ) => void;
}

const GiftListItem = ({
  gift,
  handleRemoveGift,
  handleUpdateGiftActive,
}: GiftListItemProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
      <div className="inline-flex items-center space-x-2">
        <div>
          <button
            onClick={() => handleUpdateGiftActive(gift.giftId, !gift.active)}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 text-slate-500 ${
                gift.active ? "hover:text-indigo-600 hover:cursor-pointer" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  gift.active
                    ? "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    : "M4.5 12.75l6 6 9-13.5"
                }
              />
            </svg>
          </button>
        </div>
        <div className={`text-slate-500 ${gift.active ? "" : "line-through"}`}>
          {gift.name}
        </div>
      </div>
      <div>
        <button onClick={() => setShowModal(true)}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
      {showModal && (
        <Modal
          modalText="Are you sure you want to remove this gift item?"
          onClose={() => setShowModal(false)}
          onRemove={() => {
            handleRemoveGift(gift.giftId);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default GiftListItem;
