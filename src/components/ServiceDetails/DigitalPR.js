import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ServiceDetails.css";
import img from "../../assets/images/pr.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/case study.png";
import ScrollToTopButton from "../TopButton/TopButton";
import { Link } from "react-router-dom";

function DigitalPR() {
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
        <title>
          Digital PR - India's Best PR Agency in Gurgaon - The Agency Way (TAW)
        </title>
        <meta
          name="description"
          content="Experience unparalleled brand elevation with Digital PR by The Agency Way (TAW), recognized as India's Best PR Agency in Gurgaon."
        />
        <link rel="canonical" href="https://taw.agency/services/digitalpr" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mt-lg-5">
            <img height="350px" width="350px" src={img} alt="DigitalPR" />
          </div>
          <div className="col-lg-8 col-md-8 col-12 mt-lg-5">
            <h1 className="service-details-title"> Digital PR & ORM </h1>
            <p className="Create-Text" style={{ marginLeft: "3px" }}>
              BACKED BY STRONG STORYTELLING TECHNIQUES
            </p>
            <p className="paragraph-text">
              Public Relation is one of the evergreen modes of Mass
              communication. It breathes life into your Brand bridging the gap
              between the business and its potential customers. But Implementing
              a PR Strategy is like walking on a tight rope between Strategy,
              Persuasion, Creativity and Technology. And TAW is known for doing
              exactly the same in the best possible way.
            </p>
            <p className="paragraph-text">
              By using multimedia channels, TAW promotes your products or
              services to cultivate a positive public perception.
            </p>
            <ul className="paragraph-text">
              <li className="li-text">Brand Launch & Recognition Strategy</li>
              <li className="li-text">Reputation Management</li>
              <li className="li-text">
                Crisis Communication & Brand Positioning
              </li>
              <li className="li-text">Digital PR & Strategy</li>
              <li className="li-text">Media Outreach & Progress Report</li>
            </ul>
            <p className="paragraph-text">Want the same for your Business?</p>
            <p className="paragraph-text">
              How about catching up for a Coffee!
            </p>
          </div>
        </div>
      </div>
      <div className="influ-reel">Our Clients </div>
      <PartnerSlider />
      <div className="influ-reels">Case Study </div>
      <div
        className="slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="slider-container"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
        </div>
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/contact" class="btn-flip mt-4">
          <button class="req-btn">
            <i class="animation"></i>GET IN TOUCH<i class="animation"></i>
          </button>
        </Link>
      </div>
      <h2 className="faq_hed">Frequently Asked Questions (FAQs)</h2>

      <details>
        <summary>
          What role public relation plays in building brand trust and loyalty?
        </summary>
        <ul>
          <li>
            Using the power of media, public relation helps brand to communicate
            with their audience in an authentic and credible way.
          </li>
        </ul>
      </details>
      <details>
        <summary>Why PR is important for a brand?</summary>
        <ul>
          <li>
            Public Relation builds credibility for your brand in the public's
            eye using media as the main source of communication.
          </li>
        </ul>
      </details>
      <details>
        <summary>What is Online Reputation Management?</summary>
        <ul>
          <li>
            Online Reputation Management is building and maintaining your
            brand's reputation and image in the digital sphere.
          </li>
        </ul>
      </details>
      <details>
        <summary>How to add PR as a marketing strategy?</summary>
        <ul>
          <li>
            By creating a thorough and effective media communication plan, you
            can implement PR as your prime marketing strategy. You need to
            consistent with PR to gain maximum benefits.
          </li>
        </ul>
      </details>
      <ScrollToTopButton />
    </div>
  );
}

export default DigitalPR;
