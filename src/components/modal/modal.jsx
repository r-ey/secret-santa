import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { ReactComponent as CrossComponent } from '../../images/cross.svg';

const modalRoot = document.getElementById('react-modals');

function Modal({ onClose, children }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal}>
        <div className={styles.crossDiv}>
          <CrossComponent onClick={onClose} />
        </div>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </>,
    modalRoot,
  );
}

export default Modal;
