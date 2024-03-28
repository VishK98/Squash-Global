// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';

import "./ServiceDetails.css"
import img from "../../assets/images/Web & Design Development.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/netflix.png";

function DigitalPR() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 20}%)`;
    }
  }, [currentSlide]);
  return (
    <div>
      <div className='container'>

        <div className='row'>

          <div className='col-lg-6 col-md-6 col-12 mt-lg-5'>
            <img src={img} />
          </div>
          <div className='col-lg-6 col-md-6 col-12 mt-lg-5'>
            <h1 className='service-details-title'> Digital PR And ORM 
            </h1>
            <p className='paragraph-text'>With an ever-growing family of social content specialists, we curate communication and start conversations that reward and resonate with your audience. With a decade worth of practice in staying on top of topical chatter, we know how to maximise reach, recall and impact across platforms that we identify as most appropriate for your brand.</p>
            <ul className='paragraph-text'>
              <li >Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
            </ul>
          </div>
        </div>

      </div>
      <PartnerSlider />
      <div class="influ-reel">Related Work </div>
      <div className="slider">
        <div className="slider-container" ref={sliderRef}>
          <img className="slide" src={netflix} />
          <img className="slide" src={netflix} />
          <img className="slide" src={netflix} />
          <img className="slide" src={netflix} />
          <img className="slide" src={netflix} />
          <img className="slide" src={netflix} />
        </div>
      </div>
      <h2 class="faq_hed">Frequently Asked Questions (FAQs)</h2>

      <details>
        <summary>Why should you develop a website acoording to industry trends?</summary>
        <ul>
          <li>
            Developing and maintaining your website according to ongoing trends is the best way to remain competitive in your business niche.
          </li>
        </ul>
      </details>
      <details>
        <summary>Why should you develop a website acoording to industry trends?</summary>
        <ul>
          <li>
            Developing and maintaining your website according to ongoing trends is the best way to remain competitive in your business niche.
          </li>
        </ul>
      </details>
    </div>
  )
}

export default DigitalPR