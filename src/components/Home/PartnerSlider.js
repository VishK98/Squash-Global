import React from 'react';
import Slider from 'react-slick';
import "./PartnerSlider.css";
import GAP from "../../assets/images/Partners/GAP.png";
import Asianpaint from "../../assets/images/Partners/asianpaint.jpg";
import CEAT from "../../assets/images/Partners/ceat.jpg";
import Dolby from "../../assets/images/Partners/dolby-atmos.webp";
import Hira from "../../assets/images/Partners/hira.png";
import Kotak from "../../assets/images/Partners/kotak.png";
import Loreal from "../../assets/images/Partners/loreal.png";
import Yes from "../../assets/images/Partners/yes.png";
import Panasonic from "../../assets/images/Partners/panasonic.webp";
import DHL from "../../assets/images/Partners/DHL.webp";
import Square from "../../assets/images/Partners/square.png";
import Square1 from "../../assets/images/Partners/square1.png";
import Cencora from "../../assets/images/Partners/cencora.png";

function PartnerSlider({ rtl }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: rtl, // Use the rtl prop value
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
                    centerPadding: '90px', // Adjust as needed
                }
            }
        ]
    };

    const images = [GAP, Asianpaint, CEAT, Dolby, Hira, Kotak, Loreal, Yes, Panasonic, DHL, Square, Square1, Cencora];

    return (
        <div className='partner-slider-container'>
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
