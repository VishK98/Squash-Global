import React, { useEffect, useState } from 'react';
import WhatsappLogo from '../../assets/images/Icons/372108180_WHATSAPP_ICON_1080.gif';
import './Whatsapp.css'; 

function Whatsapp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.5) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    return (
        <div className={`whatsapp-container ${isVisible ? 'show' : ''}`}>
            <a href="https://api.whatsapp.com/send?phone=9952913618" target="_blank" rel="noopener noreferrer">
                <img height='65px' width='65px' src={WhatsappLogo} alt="WhatsApp Logo" />
            </a>
        </div>
    );
}

export default Whatsapp;
