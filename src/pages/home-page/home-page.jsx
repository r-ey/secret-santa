import React from 'react';
import AppHeader from '../../components/app-header/app-header';
import styles from './home-page.module.css';
import Modal from '../../components/modal/modal';
import useModal from '../../hooks/useModal';

function HomePage() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.mainSize}>
        <div className={styles.cardContainer}>
          <div className={styles.cardCreated}>
            <p className={styles.cardText}>
              Soccer Team
            </p>
          </div>
          <div className={styles.cardCreated}>
            <p className={styles.cardText}>
              School friend group
            </p>
          </div>
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
        isModalOpen ? (
          <Modal onClose={closeModal}>
            <div>tmp</div>
          </Modal>
        ) : null
      }
    </div>
  );
}

export default HomePage;
