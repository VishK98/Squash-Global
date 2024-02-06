import React, { useEffect, useRef } from 'react';
import './Animation.css'; // Import your animation styles

const AnimatedImage = ({ src, alt }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const image = imageRef.current;
      const imagePosition = image.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (imagePosition < screenHeight / 2 && imagePosition > -image.clientHeight) {
        // If the image is at least halfway visible and not scrolled past it
        image.classList.add("slide-in-animation");
      } else {
        image.classList.remove("slide-in-animation");
      }
    }

    // Check if the image is initially in the viewport
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <img
      src={src}
      alt={alt}
      className="slide-in w-100"
      ref={imageRef}
    />
  );
};

export default AnimatedImage;