import React, { useRef, useEffect, useState } from 'react';
import './Animation.css';
import '../AboutUs/AboutUs.css';

const TextAnimation = ({ text, animation, className }) => {
  const textRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          if (!hasAnimated) {
            entry.target.classList.add(animation);
            setHasAnimated(true);
          }
        } else {
          setIsInViewport(false);
        }
      });
    }, { threshold: 0.3 }); // Trigger the animation when at least 50% of the element is visible

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    const currentTextRef = textRef.current; // Copy textRef.current to a variable

    return () => {
      if (currentTextRef) {
        observer.unobserve(currentTextRef); // Use the variable in the cleanup function
      }
    };
  }, [animation, hasAnimated]);

  useEffect(() => {
    let timeoutId;
    if (!isInViewport && hasAnimated) {
      // Delay reapplying the animation to reduce blinking
      timeoutId = setTimeout(() => {
        const currentTextRef = textRef.current; // Copy textRef.current to a variable
        if (currentTextRef) {
          currentTextRef.classList.remove(animation);
          setHasAnimated(false);
        }
      }, 1000); // Adjust the delay as needed
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isInViewport, hasAnimated, animation]);

  return (
    <div ref={textRef} className={`text-animation ${className}`}>
      <span>{text}</span>
    </div>
  );
};

export default TextAnimation;
