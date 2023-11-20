import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../../components/app-header/app-header';
import styles from './home-page.module.css';
import Modal from '../../components/modal/modal';
import useModal from '../../hooks/useModal';
import CreateNewGroup from '../../components/create-new-group/create-new-group';
import { addGroup } from '../../services/actions/account';

function HomePage() {
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isGroupOpen, setGroupOpen] = useState(false);
  const [isCreatedGroupOpen, setCreatedGroupOpen] = useState(false);
  const [groupModalName, setGroupModalName] = useState('');
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
    dispatch(addGroup(groupDetails));
    setGroupDetails({
      name: '',
      budget: '',
      people: [{ name: '', preferences: '' }],
    });
  };

  const openCreatedGroup = (name) => {
    setGroupModalName(name);
    setCreatedGroupOpen(true);
    openModal();
  };

  const closeCreatedGroup = () => {
    setGroupModalName('');
    setCreatedGroupOpen(false);
    closeModal();
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
                onClick={!isModalOpen ? () => openCreatedGroup(group) : closeCreatedGroup}
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
            <CreateNewGroup
              setGroupDetails={setGroupDetails}
              groupDetails={groupDetails}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              addPerson={addPerson}
              deletePerson={deletePerson}
            />
          </Modal>
        ) : (
          (isModalOpen && isCreatedGroupOpen) && (
            <Modal onClose={closeModal}>
              <div className={styles.officeMatesModal}>
                <h3 className={styles.infoHeader}>Secret Santa Information</h3>
                <div className={styles.basicInfo}>
                  <div className={styles.basicElement}>{`Name: ${groupModalName.name}`}</div>
                  <div className={styles.basicElement}>{`Budget: $${groupModalName.budget}`}</div>
                </div>
                <h3 className={styles.infoHeader}>Secret Santa Members + Preferences</h3>
                <div className={styles.peopleInfo}>
                  {
                    groupModalName.people.map((person, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <div key={index} className={styles.person}>
                        <div className={styles.basicElement}>{person.name}</div>
                        <div className={styles.basicElement}>{person.preferences}</div>
                      </div>
                    ))
                  }
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
