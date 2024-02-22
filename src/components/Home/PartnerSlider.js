import React, { useEffect, useRef, useState } from 'react';
import './PartnerSlider.css'; // Assuming you have a CSS file for styling
import newAsianpaint from "../../assets/images/Partners/asianpaint-removebg-preview.png";
import newSquare from "../../assets/images/Partners/square1-removebg-preview.png";
import newCEAT from "../../assets/images/Partners/remove - CEAT.png";

const Slider = () => {
    const imageSources = [
        { url: newAsianpaint, alt: "Cencora Logo", backgroundColor: "#7219d8b8" },
        { url: newSquare, alt: "Cencora Logo", backgroundColor: "#d82222b8" },
        { url: newCEAT, alt: "Cencora Logo", backgroundColor: "#22d85fb8" },
        { url: newAsianpaint, alt: "Cencora Logo", backgroundColor: "#7219d8b8" },
        { url: newSquare, alt: "Cencora Logo", backgroundColor: "#d82222b8" },
        { url: newCEAT, alt: "Cencora Logo", backgroundColor: "#22d85fb8" },
        { url: newAsianpaint, alt: "Cencora Logo", backgroundColor: "#7219d8b8" },
        { url: newSquare, alt: "Cencora Logo", backgroundColor: "#d82222b8" },
        { url: newCEAT, alt: "Cencora Logo", backgroundColor: "#22d85fb8" },
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
