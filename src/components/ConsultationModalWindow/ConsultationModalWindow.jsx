import React, { useEffect, useCallback } from 'react';
import s from './ConsultationModalWindow.module.scss';

const ConsultationModalWindow = ({ isOpen, onClose }) => {
  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleOutsideClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay} onClick={handleOutsideClick}>
      <div className={s.modalContent}>
        <button className={s.modalClose} onClick={onClose}>
          ×
        </button>
        <h2>Телефони</h2>
        <ul>
          <li>
            <a href="tel:380442092472">+38 (044) 209-24-72</a>
          </li>
          <li>
            <a href="tel:+380669040707">+38 (066) 904 07 07</a>
          </li>
          <li>
            <a href="tel:+380689040707">+38 (068) 904 07 07</a>
          </li>
          <li>
            <a href="tel:+380939040707">+38 (093) 904 07 07</a>
          </li>
        </ul>

        <h2>Режим роботи</h2>
        <p>Щоденно | Цілодобово</p>

        <h2>Адреса</h2>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA"
            >
              м.Київ, вул. Івана Федорова, 33
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/AwovKjfD7p53WbF56"
            >
              м.Київ, вул. Колоскова 9
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ConsultationModalWindow;
