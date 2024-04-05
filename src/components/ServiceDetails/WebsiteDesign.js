import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ServiceDetails.css";
import img from "../../assets/images/Web & Design Development.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/netflix.png";
import ScrollToTopButton from '../TopButton/TopButton';
import { Link } from "react-router-dom";


function WebsiteDesign() {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    
    <div>
      <Helmet>
        <title>Website Design and Development Agency In Gurgaon - The Agency Way (TAW)</title>
        <meta name="description" content="Enhance your online presence with The Agency Way (TAW), your premier website design and development agency in Gurgaon. Transform your digital footprint with our expert solutions." />
        <link rel="canonical" href="https://taw.agency/services/website-design" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mt-lg-5">
            <img height="350px" width="350px" src={img} alt="Web & Design Development" />
          </div>
          <div className="col-lg-8 col-md-8 col-12 mt-lg-5">
            <h1 className="service-details-title"> Web & Design Development</h1>
            <p className="Create-Text" style={{ marginLeft: '10px' }}>WE CREATE YOUR BRAND'S IDENTITY</p>
            <p className="paragraph-text" style={{ marginLeft: '10px' }}>
              A website is the first point of contact with your customer. At TAW, we ensure that the first encounter is worth remembering for with an optimum user experience. Our team of developers and designers encode all necessary elements to make your website your Brand's Identity.
            </p>
            <ul className="paragraph-text">
              <li className="li-text">Website designing</li>
              <li className="li-text">Website Development</li>
              <li className="li-text">eComm Portal Development</li>
              <li className="li-text">Content Management Systems (CMS)</li>
              <li className="li-text">Web Maintenance & Support</li>
              <li className="li-text">Micro-sites</li>
              <li className="li-text">Web Applications</li>
              <li className="li-text">UI Designing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="influ-reel">Our Clients </div>
      <PartnerSlider />
      <div className="influ-reels">Case Study </div>
      <div className="slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="slider-container" style={{ animationPlayState: isPaused ? "paused" : "running" }}>
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
        </div>
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <Link to="/contact" class="btn-flip mt-4" >
          <button class="req-btn"><i class="animation"></i>GET IN TOUCH<i class="animation"></i>
          </button>
        </Link>
      </div>
      <h2 className="faq_hed">Frequently Asked Questions (FAQs)</h2>

      <details>
        <summary>
        Why website is important for businesses? 
        </summary>
        <ul>
          <li>
          Website creates a first point of contact with your customers, helping them to understand your business better.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        What programming language is best for start-up?
        </summary>
        <ul>
          <li>
          Choosing programming language depends on the services you are offering and the length and level of your website. Basically, Shopify, HTML, WordPress, PHP are the most used programming language for early-stage businesses.          </li>
        </ul>
      </details>
      <details>
        <summary>
        How long does it take to design & develop a website?
        </summary>
        <ul>
          <li>
          Designing & Developing a website can take anywhere between a week to a month depending on the size, requirements and complexity of the website. 
          </li>
        </ul>
      </details>
      <details>
        <summary>
        How to build customized website to reflect brand identity?
        </summary>
        <ul>
          <li>
         Building a customized website is a perfect way to communicate your brand's values and offerings. You need to be consistent with the color palette, theme, messaging throughout the website.          </li>
        </ul>
      </details>
      <ScrollToTopButton />
    </div>
  );
}

export default WebsiteDesign;
