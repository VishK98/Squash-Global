import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ServiceDetails.css";
import img from "../../assets/images/Web & Design Development.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/netflix.png";
import ScrollToTopButton from '../TopButton/TopButton';
import { Link } from "react-router-dom";


function Programmatics() {
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
        Can you work on a previously built website?
        </summary>
        <ul>
          <li>
          Yes, we can work on an existing website developed previously.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        Why is it imperative to have a good website flow and design?
        </summary>
        <ul>
          <li>
          Layout plays a huge role in your website’s page. Without it, your website is a wall of text and links that few would care to read through. Layout is important because it influences many different things.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        Why UI/UX is important for the website?
        </summary>
        <ul>
          <li>
          Responsive design teams create a single site to support many devices, but need to consider content, design and performance across devices to ensure usability.
          </li>
        </ul>
      </details>
      <ScrollToTopButton />
    </div>
  );
}

export default Programmatics;
