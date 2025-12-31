import { useState } from 'react';

export const useGalleryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);
  const [modalWidth, setModalWidth] = useState('100%');

  const openGallery = ({ images, index, width = '100%' }) => {
    setImages(images);
    setInitialIndex(index);
    setModalWidth(width);
    setIsOpen(true);
  };

  const closeGallery = () => setIsOpen(false);

  return {
    isOpen,
    images,
    initialIndex,
    modalWidth,
    openGallery,
    closeGallery,
  };
};
