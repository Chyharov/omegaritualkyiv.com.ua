import ModalGallery from 'components/ModalGallery/ModalGallery';

const GalleryModalRoot = ({
  isOpen,
  images,
  initialIndex,
  modalWidth,
  closeGallery,
}) => {
  if (!isOpen) return null;

  return (
    <ModalGallery
      images={images}
      initialIndex={initialIndex}
      modalWidth={modalWidth}
      onClose={closeGallery}
    />
  );
};

export default GalleryModalRoot;
