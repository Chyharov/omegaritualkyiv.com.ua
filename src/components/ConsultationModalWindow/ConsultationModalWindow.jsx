import React, { useEffect, useCallback } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { IoMdTime } from 'react-icons/io';
import imgDekorationDesktop from 'images/popUp/imgDekorationDesktop.jpg';
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
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay} onClick={handleOutsideClick}>
      <div className={s.modalContent}>
        <button className={s.modalClose} onClick={onClose}>
          <FaRegWindowClose className={s.buttonClose} />
        </button>

        <div>
          <img className={s.imgDekorationDesktop} src={imgDekorationDesktop} alt="imgDekorationDesktop" />
        </div>

        <div>
          <div className={s.contactContainer}>
            <FiPhone className={s.consultationModalWindow__svg} alt="Phone" />
            <div>
              <h2 className={s.consultationModalWindow__title}>Телефони</h2>
              <ul className={s.workPhoneNumbersList}>
                <li className={s.workPhoneNumbersList__item}>
                  <a className={s.workPhoneNumbersList__itemLink} href="tel:+380939040707">+38 (093) 904-07-07</a>
                </li>
                <li className={s.workPhoneNumbersList__item}>
                  <a className={s.workPhoneNumbersList__itemLink} href="tel:+380670112160">+38 (067) 011-21-60</a>
                </li>
                <li className={s.workPhoneNumbersList__item}>
                  <a className={s.workPhoneNumbersList__itemLink} href="tel:+380442090261">+38 (044) 209-02-61</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={s.contactContainer}>
            <IoMdTime className={s.consultationModalWindow__svg} alt="Clock" />
            <div>
            <h2 className={s.consultationModalWindow__title}>Режим роботи</h2>
              <p className={s.workTimeDescription}>Щоденно | Цілодобово</p>
            </div>
          </div>

          <div className={s.contactContainer}>
            <IoLocationOutline
              className={s.consultationModalWindow__svg}
              alt="Location"
            />
            <div>
            <h2 className={s.consultationModalWindow__title}>Адреса</h2>
              <ul className={s.addressList}>
                <li className={s.addressList__item}>
                  <a
                    className={s.addressList__itemLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA"
                  >
                    м.Київ, вул. Івана Федорова, 33
                  </a>
                </li>
                <li className={s.addressList__item}>
                  <a
                    className={s.addressList__itemLink}
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
        </div>
      </div>
    </div>
  );
};

export default ConsultationModalWindow;
