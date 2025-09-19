import React, { useEffect, useRef } from 'react';
import s from './MapComponent.module.scss'

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
  const interval = setInterval(() => {
    if (window.google && window.google.maps && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 50.427392, lng: 30.5086165 },
        zoom: 17,
      });

      new window.google.maps.Marker({
        position: { lat: 50.427392, lng: 30.5086165 },
        map
      });

      clearInterval(interval); // Зупиняємо інтервал після ініціалізації
    }
  }, 100); // Перевіряємо кожні 100мс

  return () => clearInterval(interval);
}, []);

  return <div className={s.mapContainer} ref={mapRef} />;
};

export default MapComponent;
