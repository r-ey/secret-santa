import React, { useState } from 'react';
import AppHeader from '../../components/app-header/app-header';
import styles from './home-page.module.css';
import Modal from '../../components/modal/modal';
import useModal from '../../hooks/useModal';
import data from '../../utils/data.js';

function HomePage() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [groupDetails, setGroupDetails] = useState({
    name: '',
    budget: '',
    people: [{ name: '', preferences: '' }],
  });

  const deletePerson = (index) => {
    const newPeople = groupDetails.people.filter((_, idx) => idx !== index);
    setGroupDetails({ ...groupDetails, people: newPeople });
  };

  const handleInputChange = (index, event) => {
    const newPeople = groupDetails.people.map((person, idx) => {
      if (idx === index) {
        return { ...person, [event.target.name]: event.target.value };
      }
      return person;
    });

    setGroupDetails({ ...groupDetails, people: newPeople });
  };

  const addPerson = () => {
    setGroupDetails({
      ...groupDetails,
      people: [...groupDetails.people, { name: '', preferences: '' }],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  const sara = data[0];
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.mainSize}>
        <div className={styles.cardContainer}>
          {
            sara.groups.map((group, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className={styles.cardCreated}>
                <p className={styles.cardText}>
                  {group.name}
                </p>
              </div>
            ))
          }
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className={styles.cardNew} onClick={isModalOpen ? closeModal : openModal}>
            <p className={styles.cardTextNew}>
              + Create New Group
            </p>
          </div>
        </div>
      </main>
      {
        isModalOpen && (
          <Modal onClose={closeModal}>
            <h3 className={styles.modalHeader}>Create a New Group</h3>
            <div className={styles.modalTextBox}>
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <div>
                      <input
                        type="text"
                        placeholder="Group Name"
                        className={styles.requirementText}
                        value={groupDetails.name}
                        onChange={(e) => setGroupDetails({ ...groupDetails, name: e.target.value })}
                      />
                      <input
                        type="number"
                        placeholder="Budget Per Person"
                        className={styles.requirementText}
                        value={groupDetails.budget}
                        /* eslint-disable-next-line max-len */
                        onChange={(e) => setGroupDetails({ ...groupDetails, budget: e.target.value })}
                      />
                    </div>
                    {groupDetails.people.map((person, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <div key={index}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={person.name}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                        <input
                          type="text"
                          name="preferences"
                          placeholder="Preferences"
                          value={person.preferences}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                        <button type="button" onClick={() => deletePerson(index)}>Delete</button>
                      </div>
                    ))}
                    <button type="button" onClick={addPerson}>+ Add Person</button>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        )
      }
    </div>
  );
}

export default HomePage;
