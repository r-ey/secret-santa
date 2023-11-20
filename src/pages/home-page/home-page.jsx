import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppHeader from '../../components/app-header/app-header';
import styles from './home-page.module.css';
import Modal from '../../components/modal/modal';
import useModal from '../../hooks/useModal';

function HomePage() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isGroupOpen, setGroupOpen] = useState(false);
  const [groupDetails, setGroupDetails] = useState({
    name: '',
    budget: '',
    people: [{ name: '', preferences: '' }],
  });

  const { accountData } = useSelector((state) => state.accountStore);

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

  const openNewGroup = () => {
    setGroupOpen(true);
    openModal();
  };

  const closeNewGroup = () => {
    setGroupOpen(false);
    closeModal();
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.mainSize}>
        <div className={styles.cardContainer}>
          {
            accountData.groups.map((group, index) => (
              // eslint-disable-next-line max-len
              // eslint-disable-next-line react/no-array-index-key,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div
                /* eslint-disable-next-line react/no-array-index-key */
                key={index}
                className={styles.cardCreated}
                onClick={!isModalOpen ? openModal : closeModal}
              >
                <p className={styles.cardText}>
                  {group.name}
                </p>
              </div>
            ))
          }
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className={styles.cardNew} onClick={!isGroupOpen ? openNewGroup : closeNewGroup}>
            <p className={styles.cardTextNew}>
              + Create New Group
            </p>
          </div>
        </div>
      </main>
      {
        // eslint-disable-next-line no-nested-ternary
        (isModalOpen && isGroupOpen) ? (
          <Modal onClose={closeNewGroup}>
            <h3 className={styles.modalHeader}>Create a New Group</h3>
            <div className={styles.modalTextBox}>
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className={styles.groupInformation}>
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
                      <div key={index} className={styles.personInformation}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className={styles.personName}
                          value={person.name}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                        <input
                          type="text"
                          name="preferences"
                          placeholder="Preferences"
                          className={styles.personPreferences}
                          value={person.preferences}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                        <button className={styles.deleteButton} type="button" onClick={() => deletePerson(index)}>Delete</button>
                      </div>
                    ))}
                    <button className={styles.addPersonButton} type="button" onClick={addPerson}>+ Add Person</button>
                    <button className={styles.submitButton} type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        ) : (
          isModalOpen && (
            <Modal onClose={closeModal}>
              <div className={styles.officeMatesModal}>
                <h3 className={styles.infoHeader}>Secret Santa Information</h3>
                <div className={styles.basicInfo}>
                  <div className={styles.basicElement}>Name: Office-Mates</div>
                  <div className={styles.basicElement}>Budget: $25</div>
                </div>
                <h3 className={styles.infoHeader}>Secret Santa Members + Preferences</h3>
                <div className={styles.peopleInfo}>
                  <div className={styles.person}>
                    <h1 className={styles.basicElement}>Jack F.</h1>
                    <h1 className={styles.basicElement}>Chocolate, books</h1>
                  </div>
                  <div className={styles.person}>
                    <h1 className={styles.basicElement}>Muhammed L.</h1>
                    <h1 className={styles.basicElement}>Trains, basketball gear</h1>
                  </div>
                  <div className={styles.person}>
                    <h1 className={styles.basicElement}>Sarah C.</h1>
                    <h1 className={styles.basicElement}>Soccer</h1>
                  </div>
                  <div className={styles.person}>
                    <h1 className={styles.basicElement}>Raymond H.</h1>
                    <h1 className={styles.basicElement}>Spy gear, lego</h1>
                  </div>
                </div>
              </div>
            </Modal>
          )
        )
      }
    </div>
  );
}

export default HomePage;
