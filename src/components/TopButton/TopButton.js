// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import './TopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scrollToTop ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
    >
   <h1>🔺</h1>
    </button>
  );
};

export default ScrollToTopButton;
