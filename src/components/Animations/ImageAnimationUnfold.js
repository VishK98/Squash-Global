import React, { useEffect, useRef } from 'react';
import './Animation.css'; // Import your animation styles

const ImageAnimationFade = ({ src, alt }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const image = imageRef.current;
      const imagePosition = image.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (imagePosition < screenHeight && imagePosition > -image.clientHeight) {
        // If the top of the image is within the viewport
        image.classList.add("unfold-animation");
      } else {
        image.classList.remove("unfold-animation");
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
      className="unfold-animation w-100"
      ref={imageRef}
    />
  );
};

export default ImageAnimationFade;
