// ImageSlider.js
import React, { useEffect, useRef } from 'react';
import './Home.css';
import IndiaClients from "../../assets/images/IndiaClients-bw-new.jpg"; // Replace with your image path
import IndiaClientsHover from "../../assets/images/IndiaClients-new.jpg"; // Replace with your hover image path

function ImageSlider() {
  const sliderRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const image = imageRef.current;
    const imageWidth = image.clientWidth;
    const sliderWidth = slider.clientWidth;
    let position = 0;
    let animationId;

    const animateSlider = () => {
      position += 1; // Adjust the value to control the speed of sliding
      if (position > sliderWidth) {
        position = -imageWidth; // Reset position to the beginning
      }
      slider.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animateSlider);
    };

    animationId = requestAnimationFrame(animateSlider);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="image-slider mt-3" style={{ overflow: 'hidden' }} ref={sliderRef}>
      <img src={IndiaClients} alt="Slider Image" ref={imageRef} />
      <img src={IndiaClientsHover} alt="Slider Image on Hover" className="hover-image" />
    </div>
  );
}

export default ImageSlider;
