import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import s from './ScrollToTopButton.module.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${s['scroll-to-top-button']} ${isVisible ? s.visible : s.hidden}`} onClick={scrollToTop}>
      <FaArrowCircleUp className={s.toTopIcon} />
    </div>
  );
};

export default ScrollToTopButton;
