import React, { useState } from "react";
import { GiftType } from "../../types";
import GiftListItem from "./GiftListItem";

interface GiftListProps {
  gifts: GiftType[];
  handleNewGift: (newGift: string) => void;
  handleRemoveGift: (giftId: string) => void;
  handleUpdateGiftActive: (
    updateGiftId: string,
    updateGiftActive: boolean
  ) => void;
}

const GiftList = ({
  gifts,
  handleNewGift,
  handleRemoveGift,
  handleUpdateGiftActive,
}: GiftListProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [newGift, setNewGift] = useState("");
  return (
    <div className="my-5">
      {gifts?.map((gift, id) => (
        <GiftListItem
          key={id}
          gift={gift}
          handleRemoveGift={handleRemoveGift}
          handleUpdateGiftActive={handleUpdateGiftActive}
        />
      ))}
      <div className="w-full mt-5 px-2 flex items-center">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add a new gift idea..."
          onChange={(e) => {
            setNewGift(e.target.value);
            setIsInputFocused(e.target.value !== "");
          }}
          value={newGift}
        />
        {isInputFocused && (
          <>
            <button
              onClick={() => {
                handleNewGift(newGift);
                setNewGift("");
              }}
            >
              <svg
                viewBox="0 0 448 512"
                className="ml-4 w-4 h-4 fill-slate-700 hover:text-slate-900 hover:cursor-pointer"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
              </svg>
            </button>
            <button
              onClick={() => {
                setNewGift("");
              }}
              className="ml-4"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-slate-700 hover:text-slate-900 hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GiftList;
