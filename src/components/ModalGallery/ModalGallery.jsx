import { useState } from 'react';
import s from './ModalGallery.module.scss';

const ModalGallery = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={s.modal} onClick={onClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <button className={s.closeBtn} onClick={onClose}>
          ×
        </button>
        <button className={`${s.navBtn} ${s.prev}`} onClick={prevImage}>
          ‹
        </button>
        <button className={`${s.navBtn} ${s.next}`} onClick={nextImage}>
          ›
        </button>
      </div>
    </div>
  );
};

export default ModalGallery;
