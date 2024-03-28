// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';

import "./ServiceDetails.css"
import img from "../../assets/images/Web & Design Development.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/netflix.png";

function WebsiteDesign() {
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
            <h1 className='service-details-title'> Web & Design Development
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
      {/* <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
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

export default WebsiteDesign