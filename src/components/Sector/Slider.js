import React, { useEffect, useRef, useState } from 'react';
import './Slider.css'; // Assuming you have a CSS file for styling
import GAP from "../../assets/images/Partners/GAP.png";
import Asianpaint from "../../assets/images/Partners/asianpaint.jpg";
import CEAT from "../../assets/images/Partners/ceat.jpg";
import Dolby from "../../assets/images/Partners/dolby-atmos.webp";
import Hira from "../../assets/images/Partners/hira.png";
import Kotak from "../../assets/images/Partners/kotak.png";
import Loreal from "../../assets/images/Partners/loreal.png";
import Yes from "../../assets/images/Partners/yes.png";
import Panasonic from "../../assets/images/Partners/panasonic.webp";
import DHL from "../../assets/images/Partners/DHL.webp";
import Square from "../../assets/images/Partners/square.png";
import Square1 from "../../assets/images/Partners/square1.png";
import Cencora from "../../assets/images/Partners/cencora.png";

const Slider = () => {
  const imageSources = [
    { url: GAP, alt: "GAP Logo", link: "https://example.com" },
    { url: Asianpaint, alt: "Asian Paint Logo", link: "https://example.com" },
    { url: CEAT, alt: "CEAT Logo", link: "https://example.com" },
    { url: Dolby, alt: "Dolby Logo", link: "https://example.com" },
    { url: Hira, alt: "Hira Logo", link: "https://example.com" },
    { url: Kotak, alt: "Kotak Logo", link: "https://example.com" },
    { url: Loreal, alt: "Loreal Logo", link: "https://example.com" },
    { url: Yes, alt: "Yes Logo", link: "https://example.com" },
    { url: Panasonic, alt: "Panasonic Logo", link: "https://example.com" },
    { url: DHL, alt: "DHL Logo", link: "https://example.com" },
    { url: Square, alt: "Square Logo", link: "https://example.com" },
    { url: Square1, alt: "Square1 Logo", link: "https://example.com" },
    { url: Cencora, alt: "Cencora Logo", link: "https://example.com" }
  ];

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;

    const slide = () => {
      animationId = requestAnimationFrame(() => {
        if (slider) {
          slider.scrollLeft += 1;
          if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0;
          }
          setCurrentIndex(prevIndex => (prevIndex + 1) % (imageSources.length / 2));
        }
        slide();
      });
    };

    slide();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [imageSources.length]);

  return (
    <div className="platforms-list mt-4" ref={sliderRef}>
      {imageSources.concat(imageSources).map((image, index) => (
        <div className="platforms-list-item" key={index}>
          <a href={image.link}>
            <img
              className="slide-image"
              alt={image.alt}
              src={image.url}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Slider;
