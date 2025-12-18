import { useState, useEffect, useCallback } from 'react';
import s from './ModalGallery.module.scss';

const ModalGallery = ({ images, initialIndex = 0, modalWidth, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prevImage = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, prevImage, nextImage]);

  return (
    <div className={s.modal} onClick={onClose}>
      <div className={s.modalContent} onClick={e => e.stopPropagation()}>
        <img
          style={{ width: modalWidth }}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
        />
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
