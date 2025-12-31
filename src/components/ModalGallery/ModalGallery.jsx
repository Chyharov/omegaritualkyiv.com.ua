import { useState, useEffect, useCallback } from 'react';
import s from './ModalGallery.module.scss';

const ModalGallery = ({
  images = [],
  initialIndex = 0,
  modalWidth = '100%',
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const hasImages = images.length > 0;

  const prevImage = useCallback(() => {
    if (!hasImages) return;
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  }, [hasImages, images.length]);

  const nextImage = useCallback(() => {
    if (!hasImages) return;
    setCurrentIndex(prev =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, [hasImages, images.length]);

  // ⌨️ keyboard
  useEffect(() => {
    if (!hasImages) return;

    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, prevImage, nextImage, hasImages]);

  // 👉 swipe
  const handleTouchStart = e => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = e => {
    if (touchStartX === null) return;

    const diff = touchStartX - e.changedTouches[0].clientX;
    const SWIPE_THRESHOLD = 50;

    if (diff > SWIPE_THRESHOLD) nextImage();
    if (diff < -SWIPE_THRESHOLD) prevImage();

    setTouchStartX(null);
  };

  if (!hasImages) return null;

  return (
    <div className={s.modal} onClick={onClose}>
      <div
        className={s.modalContent}
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
      >
        <img
          style={{ width: modalWidth }}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
        />

        <button className={s.closeBtn} onClick={onClose}>×</button>

        {images.length > 1 && (
          <>
            <button className={`${s.navBtn} ${s.prev}`} onClick={prevImage}>
              ‹
            </button>
            <button className={`${s.navBtn} ${s.next}`} onClick={nextImage}>
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalGallery;
