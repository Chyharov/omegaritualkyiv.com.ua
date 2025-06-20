import React, { useEffect, useCallback } from 'react';
import s from './ConsultationModalWindow.module.scss';

const ConsultationModalWindow = ({ isOpen, onClose }) => {
    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      }, [onClose]);
    
      const handleOutsideClick = (event) => {
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
            <button className={s.modalClose} onClick={onClose}>×</button>
            <h2>Зв’язатися з агентом</h2>
            <p>Заповніть форму або зателефонуйте нам.</p>
          </div>
        </div>
      );
    };

export default ConsultationModalWindow;
