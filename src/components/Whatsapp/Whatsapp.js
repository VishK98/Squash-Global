import React, { useEffect, useState } from 'react';
import WhatsappLogo from '../../assets/images/Icons/372108180_WHATSAPP_ICON_1080.webp';

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
        <>
         <div className={`whatsapp-container1 ${isVisible ? 'show' : ''}`}>                       
            </div>
            <div className={`whatsapp-container ${isVisible ? 'show' : ''}`}>
                <a href="https://api.whatsapp.com/send?phone=918368163883" target="_blank" rel="noopener noreferrer">
                    <img height='55px' width='55px' src={WhatsappLogo} alt="WhatsApp Logo" />
                </a><br />
            </div>
           

        </>
    );
}

export default Whatsapp;
