import React, { useEffect, useRef, useState } from 'react';
// import './PartnerClientSlider.css';
import newPartner from "../../assets/images/home-clients/1.png";
import newPartne1 from "../../assets/images/home-clients/10.png";
import newPartne2 from "../../assets/images/home-clients/11.png";
import newPartne3 from "../../assets/images/home-clients/12.png";
import newPartne4 from "../../assets/images/home-clients/13.png";
import newPartne5 from "../../assets/images/home-clients/15.png";
import newPartne6 from "../../assets/images/home-clients/16.png";
import newPartne7 from "../../assets/images/home-clients/17.png";
import newPartne8 from "../../assets/images/home-clients/18.png";
import newPartne9 from "../../assets/images/home-clients/19.png";

const ClientSlider = () => {
    const imageSources = [
        { url: newPartner, alt: "Cencora Logo", backgroundColor: "#7219d8b8" },
        { url: newPartne1, alt: "Cencora Logo", backgroundColor: "#d82222b8" },
        { url: newPartne2, alt: "Cencora Logo", backgroundColor: "#22d85fb8" },
        { url: newPartne3, alt: "Cencora Logo", backgroundColor: "#7219d8b8" },
        { url: newPartne4, alt: "Cencora Logo", backgroundColor: "#d82222b8" },
        { url: newPartne5, alt: "Cencora Logo", backgroundColor: "#22d85fb8" },
        { url: newPartne6, alt: "Cencora Logo", backgroundColor: "#7219d8b8" },
        { url: newPartne7, alt: "Cencora Logo", backgroundColor: "#d82222b8" },
        { url: newPartne8, alt: "Cencora Logo", backgroundColor: "#22d85fb8" },
        { url: newPartne9, alt: "Cencora Logo", backgroundColor: "#22d85fb8" },
    ];

    const ClientSliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    let animationId;

    useEffect(() => {
        const ClientSlider = ClientSliderRef.current;

        const slide = () => {
            animationId = requestAnimationFrame(() => {
                if (!isHovered && ClientSlider) {
                    ClientSlider.scrollLeft += 1;
                    if (ClientSlider.scrollLeft >= ClientSlider.scrollWidth / 2) {
                        ClientSlider.scrollLeft = 0;
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
        <div className="platforms-list mt-5" ref={ClientSliderRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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

export default ClientSlider;
