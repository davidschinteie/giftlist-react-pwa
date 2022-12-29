import { useState } from "react";
import { GiftDateType, PersonType } from "../../types";
import { v4 as uuidv4 } from "uuid";
import Modal from "../modal";
import AddNewGiftListModal from "../modal/AddNewGiftListModal";
import GiftList from "./GiftList";

interface PersonProps {
  person: PersonType | any;
  backToPeople: () => void;
  updatePerson: (person: PersonType) => void;
}

const Person = ({ person, backToPeople, updatePerson }: PersonProps) => {
  const [showModal, setShowModal] = useState(false);
  const [currentGiftListId, setCurrentGiftListId] = useState<string | null>(
    null
  );
  const [showAddGiftListModal, setShowAddGiftListModal] = useState(false);

  const handleNewGift = (newGift: string, dateId: string) => {
    const newDates = person.giftDates.map((giftDate: GiftDateType) => {
      if (giftDate.giftDateId === dateId) {
        const newGiftData = {
          giftId: uuidv4(),
          name: newGift,
          active: true,
        };

        return {
          ...giftDate,
          gifts: giftDate.gifts
            ? [...giftDate.gifts, newGiftData]
            : [newGiftData],
        };
      } else {
        return {
          ...giftDate,
        };
      }
    });

    updatePerson({
      ...person,
      giftDates: newDates,
    });
  };

  const handleRemoveGift = (removeGiftId: string, removeDateId: string) => {
    const newDates = person.giftDates.map((giftDate: GiftDateType) => {
      if (giftDate.giftDateId === removeDateId) {
        return {
          ...giftDate,
          gifts: giftDate.gifts?.filter((gift) => gift.giftId !== removeGiftId),
        };
      } else {
        return {
          ...giftDate,
        };
      }
    });

    updatePerson({
      ...person,
      giftDates: newDates,
    });
  };

  const handleUpdateGiftActive = (
    updateGiftId: string,
    updateGiftActive: boolean,
    updateDateId: string
  ) => {
    const newDates = person.giftDates.map((giftDate: GiftDateType) => {
      if (giftDate.giftDateId === updateDateId) {
        return {
          ...giftDate,
          gifts: giftDate.gifts?.map((gift) => {
            if (gift.giftId === updateGiftId) {
              return {
                ...gift,
                active: updateGiftActive,
              };
            } else {
              return { ...gift };
            }
          }),
        };
      } else {
        return {
          ...giftDate,
        };
      }
    });

    console.log("newDates", newDates);

    updatePerson({
      ...person,
      giftDates: newDates,
    });
  };

  const handleRemoveGiftList = (removeDateId: string | null) => {
    if (currentGiftListId !== null) {
      updatePerson({
        ...person,
        giftDates: person.giftDates.filter(
          (giftDate: GiftDateType) => giftDate.giftDateId !== removeDateId
        ),
      });
    }
  };

  const handleAddNewGiftList = (giftName: string) => {
    const newGiftList = {
      giftDateId: uuidv4(),
      date: giftName,
    };
    updatePerson({
      ...person,
      giftDates: person.giftDates
        ? [...person.giftDates, newGiftList]
        : [newGiftList],
    });
  };

  return (
    <div className="bg-slate-200 grow px-4 sm:px-6 lg:px-4">
      <button
        className="pt-6 inline-flex items-center"
        onClick={() => backToPeople()}
      >
        <svg className="w-4 h-4 mr-4" viewBox="0 0 384 512">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
        Back To All People
      </button>
      <div className="text-center py-12">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          {person.name}
        </h2>
      </div>
      {person.giftDates?.map((giftDate: GiftDateType, id: number) => (
        <div
          key={id}
          className="max-w-lg mx-auto mb-10 bg-white p-8 rounded-xl shadow shadow-slate-300"
        >
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-3xl font-medium">{giftDate.date}</h1>
            <button
              onClick={() => {
                setCurrentGiftListId(giftDate.giftDateId);
                setShowModal(true);
              }}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-500 hover:text-slate-700 hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
          <p className="text-slate-500">Here are your latest gifts ideas</p>

          <GiftList
            gifts={
              giftDate.gifts &&
              giftDate.gifts.sort((a, b) => Number(a.active) - Number(b.active))
            }
            handleNewGift={(newGift) =>
              handleNewGift(newGift, giftDate.giftDateId)
            }
            handleRemoveGift={(giftId) =>
              handleRemoveGift(giftId, giftDate.giftDateId)
            }
            handleUpdateGiftActive={(updateGiftId, updateGiftActive) =>
              handleUpdateGiftActive(
                updateGiftId,
                updateGiftActive,
                giftDate.giftDateId
              )
            }
          />
          {showModal && (
            <Modal
              modalText="Are you sure you want to remove this gift list?"
              onClose={() => {
                setShowModal(false);
                setCurrentGiftListId(null);
              }}
              onRemove={() => {
                handleRemoveGiftList(currentGiftListId);
                setShowModal(false);
              }}
            />
          )}
        </div>
      ))}
      <button
        className="flex items-center bg-slate-900 text-slate-300 font-bold p-4 rounded-lg mx-auto mb-12"
        onClick={() => setShowAddGiftListModal(true)}
      >
        <svg viewBox="0 0 448 512" className="w-6 h-6 fill-slate-300 mr-4">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
        Add a new
        <svg viewBox="0 0 512 512" className="w-6 h-6 fill-slate-300 mx-2">
          <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
        </svg>
        List
      </button>
      {showAddGiftListModal && (
        <AddNewGiftListModal
          onClose={() => setShowAddGiftListModal(false)}
          onAdd={handleAddNewGiftList}
        />
      )}
    </div>
  );
};

export default Person;
