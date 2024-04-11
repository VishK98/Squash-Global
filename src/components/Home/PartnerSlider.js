import React, { useEffect, useRef, useState } from 'react';
import './PartnerSlider.css';
import Jagur from "../../assets/images/home-clients/jagur.png";
import Leverage from "../../assets/images/home-clients/leverage.png";
import Manipal from "../../assets/images/home-clients/manipal.png";
import Myntra from "../../assets/images/home-clients/myntra.png";
import Super from "../../assets/images/home-clients/super.png";
import TradeX from "../../assets/images/home-clients/tradeX.png";
import Unacademy from "../../assets/images/home-clients/unacademy.png";
import YesBank from "../../assets/images/home-clients/yesBank.png";
import Frankfinn from "../../assets/images/home-clients/extras/frankfinn.png";
import Nakhrewaali from "../../assets/images/home-clients/extras/nakhrewali.png";
import Lotus from "../../assets/images/home-clients/extras/lotus.png";
import Radission from "../../assets/images/home-clients/extras/radission.png";

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
        { url: Frankfinn, alt: "Frankfinn Logo" },
        { url: Nakhrewaali, alt: "Nakhrewaali Logo" },
        { url: Lotus, alt: "Lotus Logo" },
        { url: Radission, alt: "Radission Logo" },
    ];

    const sliderRef = useRef(null);
    const [, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const animationIdRef = useRef();

    useEffect(() => {
        const slider = sliderRef.current;

        const slide = () => {
            animationIdRef.current = requestAnimationFrame(() => {
                if (!isHovered && slider) {
                    slider.scrollLeft -= 1;
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
            cancelAnimationFrame(animationIdRef.current);
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
                <div className="slider-list-item" key={index}>
                    <img className='service-card' src={image.url} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};

export default Slider;
