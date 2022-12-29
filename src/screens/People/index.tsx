import { onValue, ref, remove, set, child, push } from "firebase/database";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Modal from "../../components/modal";
import AddNewPersonModal from "../../components/modal/AddNewPersonModal";
import NotificationModal from "../../components/modal/NotificationModal";
import Person from "../../components/person";
import { PersonType } from "../../types";
import { db } from "../../utils/firebase";

const People = () => {
  const [people, setPeople] = useState<any[]>([]);
  const [currentPerson, setCurrentPerson] = useState<any>("");
  const [removePerson, setRemovePerson] = useState<any>("");
  const [isLoading, setIsLoading] = useState(true);
  const [showAddPersonModal, setShowAddPersonModal] = useState(false);
  const [showRemovePersonModal, setShowRemovePersonModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const fetchPeople = async () => {
    const dbRef = ref(db, "people");
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        // convert firebase object to array
        const peopleArr: any[] = [];
        Object.keys(snapshot.val()).forEach((key) => {
          peopleArr.push(snapshot.val()[key]);
        });
        //sort people alphabetically by their name
        let sortedArr = peopleArr.sort((a, b) => a.name.localeCompare(b.name));

        setPeople(sortedArr);
      } else {
        console.log("No data available");
      }
      setIsLoading(false);
    });
  };

  const updatePerson = (person: PersonType) => {
    set(ref(db, `people/${person.personId}`), person);
  };

  const addNewPerson = (personName: string) => {
    const newPersonId = uuidv4();
    set(ref(db, `people/${newPersonId}`), {
      personId: newPersonId,
      name: personName,
    });
  };

  const handleRemovePerson = (person: PersonType) => {
    set(ref(db, `people/${person.personId}`), null).then(() => {
      setNotificationMessage(`${person.name} has been removed successfully!`);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      setRemovePerson("");
    });
  };

  useEffect(() => {
    if (currentPerson?.length !== 0) {
      setCurrentPerson(
        people.find((person) => person.personId === currentPerson.personId)
      );
    }
  }, [people]);

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <>
      <Header />
      {currentPerson?.length === 0 && (
        <main className="bg-slate-200 grow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-center pb-12">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                Check people from your gift list
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {people.length === 0 && !isLoading && (
                <p className="text-xl text-gray-700 font-bold mb-2">
                  No data available
                </p>
              )}
              {people?.map((person, id) => (
                <div
                  key={id}
                  className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center relative"
                >
                  <div className="mb-8">
                    <button onClick={() => setCurrentPerson(person)}>
                      <svg
                        viewBox="0 0 448 512"
                        className="fill-slate-500 object-center object-cover rounded-full h-36 w-36"
                      >
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                    </button>
                    <button
                      className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center bg-slate-500 rounded-lg"
                      onClick={() => {
                        setRemovePerson(person);
                        setShowRemovePersonModal(true);
                      }}
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-white hover:white hover:cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-center">
                    {/* <p className="text-base text-gray-400 font-normal">
                    15 days until the next gift
                  </p> */}
                    <button
                      className="text-xl text-gray-700 font-bold mb-2"
                      onClick={() => setCurrentPerson(person)}
                    >
                      {person.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-8 flex items-center bg-slate-900 text-slate-300 font-bold p-4 rounded-lg mx-auto mb-12 "
              onClick={() => setShowAddPersonModal(true)}
            >
              <svg
                viewBox="0 0 640 512"
                className="w-6 h-6 fill-slate-300 mr-4"
              >
                <path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
              </svg>
              Add a new Person
            </button>
            {isLoading && (
              <p className="text-xl text-gray-700 font-bold mb-2">Loading ..</p>
            )}
          </div>
        </main>
      )}
      {currentPerson?.length !== 0 && !isLoading && (
        <Person
          person={currentPerson}
          backToPeople={() => setCurrentPerson("")}
          updatePerson={updatePerson}
        />
      )}
      {showAddPersonModal && (
        <AddNewPersonModal
          onClose={() => setShowAddPersonModal(false)}
          onAdd={addNewPerson}
        />
      )}
      {showRemovePersonModal && (
        <Modal
          modalText={`Are you sure you want to remove ${removePerson.name}?`}
          onClose={() => setShowRemovePersonModal(false)}
          onRemove={() => {
            handleRemovePerson(removePerson);
            setShowRemovePersonModal(false);
          }}
        />
      )}
      {showNotification && (
        <NotificationModal
          onClose={() => setShowNotification(false)}
          notificationMessage={notificationMessage}
        />
      )}
      <Footer />
    </>
  );
};

export default People;
