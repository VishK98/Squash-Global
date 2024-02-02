import React, { useState, useEffect } from 'react';
import './TopButton.css';
import topButton from "../../assets/images/arrow (1).png";

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

  const handleClick = () => {
    scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scrollToTop ${isVisible ? 'active' : ''}` } onClick={handleClick}>
      <img className='top-image' src={topButton} alt="Button" />
    </div>
  );
};

export default ScrollToTopButton;
