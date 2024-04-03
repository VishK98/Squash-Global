import React, { useState } from "react";
import "./ServiceDetails.css";
import img from "../../assets/images/SEO.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/netflix.png";
import ScrollToTopButton from '../TopButton/TopButton';
import { Link } from "react-router-dom";


function SEO() {
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
            <img height="350px" width="350px" src={img} alt="SEO" />
          </div>
          <div className="col-lg-8 col-md-8 col-12 mt-lg-5">
            <h1 className="service-details-title"> Search Engine Optimization (SEO)</h1>
            <p className="paragraph-text">
            Words have creative power, and our SEO team knows how to use the power of the right words to make your brand visible. Our experts help your website gain the focus it deserves by making it rank higher. Our search engine optimization is driven by data and insight, delivering the best selection of cost-effective keywords, every time!
            </p>
            <ul className="paragraph-text">
              <li className="li-text">Search Engine Optimization on page</li>
              <li className="li-text">SEM strategy with keyword selection</li>
              <li className="li-text">Google AdWords campaign management</li>
              <li className="li-text">Contextual Advertising</li>
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
           Why SEO is important in digital marketing?
        </summary>
        <ul>
          <li>
          SEO is made up of multiple elements. Knowing what they are and how they work is key to understanding why SEO is so important. In short, SEO is crucial because it makes your website more visible, and that means more traffic and more opportunities to convert prospects into customers.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        Does SEO help to increase or drive sales?
        </summary>
        <ul>
          <li>
          It depends on your SEO strategy. Simply throwing a few high-traffic keywords into your title tags and headers won’t do a whole lot for your business, but an SEO strategy designed to generate qualified leads and direct them to the right information can be extremely profitable for your business.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        How long does it take to see results from SEO?
        </summary>
        <ul>
          <li>
          Most professionals expect to see results in as low as 2 months, but SEO can take as long as 12 months to work. While every company's SEO strategy differs, most businesses can expect to see considerable results in 6 to 12 months.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        If I optimise my website, will it stay on the top rank?
        </summary>
        <ul>
          <li>
       No, you have to continuously work on your keywords, content quality and other off-page SEO practices. SEO is a continual process.          </li>
        </ul>
      </details>
      <ScrollToTopButton />
    </div>
  );
}

export default SEO;
