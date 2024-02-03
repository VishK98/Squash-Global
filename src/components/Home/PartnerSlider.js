import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./PartnerSlider.css";
import GAP from "../../assets/images/Partners/GAP.png";
import Aditya from "../../assets/images/Partners/aditya-birla.gif";
import Ashirwaad from "../../assets/images/Partners/ashirwaad.jpeg";
import Asianpaint from "../../assets/images/Partners/asianpaint.jpg";
import CEAT from "../../assets/images/Partners/ceat.jpg";
import Dolby from "../../assets/images/Partners/dolby-atmos.webp";
import Hira from "../../assets/images/Partners/hira.png";
import Kotak from "../../assets/images/Partners/kotak.png";
import Loreal from "../../assets/images/Partners/loreal.png";
import Paypal from "../../assets/images/Partners/paypal.png";
import Playstation from "../../assets/images/Partners/playstation.jpg";
import Yes from "../../assets/images/Partners/yes.png";

function PartnerSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '75px', // Adjust as needed
                }
            }
        ]
    };

    const images = [GAP, Aditya, Ashirwaad, Asianpaint, CEAT, Dolby, Playstation, Hira, Kotak, Loreal, Paypal, Yes];

    return (
        <div className='container-fluid'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img className='slide-image' src={image} alt={`Partner ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default PartnerSlider;
