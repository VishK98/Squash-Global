import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ServiceDetails.css";
import img from "../../assets/images/Web & Design Development.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/netflix.png";
import ScrollToTopButton from '../TopButton/TopButton';
import { Link } from "react-router-dom";


function MediaPlanning() {
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
        <title>Creative Graphic Design Agency in Gurgaon - The Agency Way (TAW)</title>
        <meta name="description" content="Transform your brand's visual identity with The Agency Way (TAW), your leading creative graphic design agency in Gurgaon. Boost your brand's aesthetics with our innovative solutions" />
        <link rel="canonical" href="https://taw.agency/services/design"/>
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mt-lg-5">
            <img height="350px" width="350px" src={img} alt="Design" />
          </div>
          <div className="col-lg-8 col-md-8 col-12 mt-lg-5">
            <h1 className="service-details-title"> Design</h1>
            <p class="Create-Text">TURN IDEAS INTO REALITY</p>
            <p className="paragraph-text" style={{ marginLeft: '5px' }}>
            Illustration implies a thousand word. That being said, arguably, none can deny the fact that Creatives are the sole of all types of marketing and advertising. From the time immemorial, Creative ads, posters, graphics are being imprinted on the mind of the consumers. Creative messages are so strong that consumers end up remembering a Brand with the creatives. But all are a fantasy dream and nothing else, if you lack the ability to use the power of Creative marketing to its fullest form.
            <p className="paragraph-text">At TAW, our creative advertising team collaborate on the creative concept for an advertising campaign and give meaning to your Brand in many ways.</p>
            </p>
            <ul className="paragraph-text">
              <li className="li-text">Poster Design</li>
              <li className="li-text">Infographic Design</li>
              <li className="li-text">Website & App Banner Design</li>
              <li className="li-text">Marketing Collaterals Design </li>
              <li className="li-text">Social Media Creatives Design</li>
              <li className="li-text">Brand Identity Design</li>
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
        What role does Design play in creating brand's identity?
        </summary>
        <ul>
          <li>
          Design helps your audience recognize your brand beyond your brand's name. Using colors, theme, font and typography language, you can imprint your brand on your audience.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        How to add creative & design to communicate Brand's message?
        </summary>
        <ul>
          <li>
          Color, themes, fonts, illustration has a strong way of portraying your brand's image into the audience mind. Using designing techniques to communicate message can create lasting impression.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        What is the most used designing software?
        </summary>
        <ul>
          <li>
          Photoshop is the most general software for designing used by billions of people. Apart from that, Adobe Suite offers all the designing software and elements to craft your Brand's design and identity. 
          </li>
        </ul>
      </details>
      <details>
        <summary>
        How to build brand identity through design language?
        </summary>
        <ul>
          <li>
          A set of color, theme, font, mood board can help you build your brand identity through design language.          </li>
        </ul>
      </details>
      <ScrollToTopButton />
    </div>
  );
}

export default MediaPlanning;
