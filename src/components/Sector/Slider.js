import React, { useEffect, useRef } from 'react';
import "./Slider.css";
import "./Sector.css";
import AnimatedText from '../Animations/TextAnimation';
import ImageAnimationFade from "../Animations/ImageAnimationFade";

const Slider = ({ box }) => {
    const sliderRef = useRef(null);
    const clonedBox = [...box, ...box]; // Clone the box array to create a seamless loop

    useEffect(() => {
        const slider = sliderRef.current;
        let currentOffset = 0;
        let intervalId;

        const startInterval = () => {
            intervalId = setInterval(() => {
                currentOffset -= 220; // Adjust the width of each box here
                slider.style.transition = 'transform 0.5s ease-in-out';
                slider.style.transform = `translateX(${currentOffset}px)`;

                if (currentOffset <= -220 * (clonedBox.length - 1)) {
                    currentOffset = 0;
                    slider.style.transition = 'none'; // Disable transition for instant reset
                    slider.style.transform = `translateX(${currentOffset}px)`;
                }
            }, 2000); // Adjust the interval as needed
        };

        startInterval();

        return () => {
            clearInterval(intervalId);
        };
    }, [clonedBox]);

    return (
        <div className="slider-container" style={{ width: `${clonedBox.length * 220}px` }}>
            <div className="slider" ref={sliderRef}>
                {clonedBox.map((image, index) => (
                    <div key={index} className="slider-box ">
                        <div className="slider-img">
                            <ImageAnimationFade src={image.url} alt="Image not found" />
                        </div>
                        <AnimatedText text={<p className="mt-2 box-text">{image.title}</p>} animation="slide-up" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
