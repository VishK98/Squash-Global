import React, { useState } from "react";
import "./ServiceDetails.css";
import img from "../../assets/images/Web & Design Development.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/netflix.png";
import ScrollToTopButton from '../TopButton/TopButton';

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
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mt-lg-5">
            <img height="350px" width="350px" src={img} alt="Web & Design Development" />
          </div>
          <div className="col-lg-8 col-md-8 col-12 mt-lg-5">
            <h1 className="service-details-title"> Web & Design Development</h1>
            <p className="paragraph-text">
              First impressions matter, make them count. Our designers and
              developers are led by a decade of experience, working in sync to
              deliver a digital identity that not only makes a fantastic first
              impression, but is future-proof for years to come.
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
      <PartnerSlider />
      <div className="influ-reel">Related Work </div>
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
        <button className="get-in-touch-button">
          <span>GET IN TOUCH</span>
        </button>
      </div>
      <h2 className="faq_hed">Frequently Asked Questions (FAQs)</h2>

      <details>
        <summary>
          Why should you develop a website according to industry trends?
        </summary>
        <ul>
          <li>
            Developing and maintaining your website according to ongoing trends
            is the best way to remain competitive in your business niche.
          </li>
        </ul>
      </details>
      <details>
        <summary>
          Why should you develop a website according to industry trends?
        </summary>
        <ul>
          <li>
            Developing and maintaining your website according to ongoing trends
            is the best way to remain competitive in your business niche.
          </li>
        </ul>
      </details>
      <ScrollToTopButton />
    </div>
  );
}

export default WebsiteDesign;
