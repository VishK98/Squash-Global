import React, { useEffect, useRef, useState } from 'react';
import './PartnerSlider.css'; // Assuming you have a CSS file for styling
import newAsianpaint from "../../assets/images/Partners/asianpaint-removebg-preview.png";
import newSquare from "../../assets/images/Partners/square1-removebg-preview.png";
import newCEAT from "../../assets/images/Partners/remove - CEAT.png";
import newPartner from "../../assets/images/home-clients/1.png";
import newPartne1 from "../../assets/images/home-clients/2.png";
import newPartne2 from "../../assets/images/home-clients/3.png";
import newPartne3 from "../../assets/images/home-clients/4.png";
import newPartne4 from "../../assets/images/home-clients/5.png";
import newPartne5 from "../../assets/images/home-clients/6.png";
import newPartne6 from "../../assets/images/home-clients/7.png";


const Slider = () => {
    const imageSources = [
        { url: newPartner, alt: "Cencora Logo", backgroundColor: "#7219d8b8" },
        { url: newPartne1, alt: "Cencora Logo", backgroundColor: "#d82222b8" },
        { url: newPartne2, alt: "Cencora Logo", backgroundColor: "#22d85fb8" },
        { url: newPartne3, alt: "Cencora Logo", backgroundColor: "#7219d8b8" },
        { url: newPartne4, alt: "Cencora Logo", backgroundColor: "#d82222b8" },
        { url: newPartne5, alt: "Cencora Logo", backgroundColor: "#22d85fb8" },
        { url: newPartne6, alt: "Cencora Logo", backgroundColor: "#7219d8b8" },
        
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
    }, [imageSources.length, isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="platforms-list mt-4" ref={sliderRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {imageSources.concat(imageSources).map((image, index) => (
                <div className="platforms-list-item" key={index}>
                    <div className="card" style={{ backgroundColor: image.backgroundColor }}>
                        <img src={image.url} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
