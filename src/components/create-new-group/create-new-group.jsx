import React from 'react';
import styles from '../../pages/home-page/home-page.module.css';

function CreateNewGroup({
  handleSubmit,
  groupDetails,
  setGroupDetails,
  handleInputChange,
  addPerson,
  deletePerson,
}) {
  return (
    <>
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
    </>
  );
}

export default CreateNewGroup;
