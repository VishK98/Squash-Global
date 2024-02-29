import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
import Jagur from "../../assets/images/home-clients/jagur.png";
import Leverage from "../../assets/images/home-clients/leverage.png";
import Manipal from "../../assets/images/home-clients/manipal.png";
import Myntra from "../../assets/images/home-clients/myntra.png";
import Super from "../../assets/images/home-clients/super.png";
import TradeX from "../../assets/images/home-clients/tradeX.png";
import Unacademy from "../../assets/images/home-clients/unacademy.png";
import YesBank from "../../assets/images/home-clients/yesBank.png";
import BastonLevin from "../../assets/images/home-clients/baston-levin.png";
import Bruxie from "../../assets/images/home-clients/bruxie.png";
import Flipkart from "../../assets/images/home-clients/flipkart.png";
import Fujiyama from "../../assets/images/home-clients/fujiyama.png";
import Godrej from "../../assets/images/home-clients/godrej.png";
import Honda from "../../assets/images/home-clients/honda.png";
import ICICI from "../../assets/images/home-clients/icici.png";

const Slider = () => {
  const imageSources = [
    { url: Jagur, alt: "Jagur Logo" },
    { url: Leverage, alt: "Leverage Logo" },
    { url: Manipal, alt: "Manipal Logo" },
    { url: Myntra, alt: "Myntra Logo" },
    { url: Super, alt: "Super Logo" },
    { url: TradeX, alt: "TradeX Logo" },
    { url: Unacademy, alt: "Unacademy Logo" },
    { url: YesBank, alt: "YesBank Logo" },
    { url: BastonLevin, alt: "BastonLevin Logo" },
    { url: Bruxie, alt: "Bruxie Logo" },
    { url: Flipkart, alt: "Flipkart Logo" },
    { url: Fujiyama, alt: "Fujiyama Logo" },
    { url: Godrej, alt: "Godrej Logo" },
    { url: Honda, alt: "Honda Logo" },
    { url: ICICI, alt: "ICICI Logo" },
  ];

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  let animationId;

  useEffect(() => {
    const slider = sliderRef.current;

    const slide = () => {
      animationId = requestAnimationFrame(() => {
        if (!isHovered && slider) {
          slider.scrollLeft -= 2; // Decrementing scrollLeft to slide from right to left
          if (slider.scrollLeft <= 0) {
            slider.scrollLeft = slider.scrollWidth / 2;
          }
          setCurrentIndex(prevIndex => (prevIndex - 1 + imageSources.length / 2) % (imageSources.length / 2));
        }
        slide();
      });
    };
    slide();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [imageSources.length, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="platforms-list mt-5 mb-5" ref={sliderRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {imageSources.concat(imageSources).map((image, index) => (
        <div className="slider-list-item" key={index}>
          <img className='service-card' src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
