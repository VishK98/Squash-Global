import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ServiceDetails.css";
import img from "../../assets/images/Web & Design Development.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/case study.png";
import ScrollToTopButton from "../TopButton/TopButton";
import { Link } from "react-router-dom";

function Influencer() {
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
          Influencer-marketing Agency in Gurgaon - The Agency Way (TAW)
        </title>
        <meta
          name="description"
          content="Empower your brand's influence with The Agency Way (TAW), your premier influencer marketing agency in Gurgaon. Collaborate with top influencers and amplify your brand's reach today."
        />
        <link
          rel="canonical"
          href="https://taw.agency/services/influencer-marketing"
        />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mt-lg-5">
            <img
              height="350px"
              width="350px"
              src={img}
              alt="Influencer Marketing"
            />
          </div>
          <div className="col-lg-8 col-md-8 col-12 mt-lg-5">
            <h1 className="service-details-title"> Influencer Marketing </h1>
            <p className="Create-Text" style={{ marginLeft: "3px" }}>
              STEP INTO THE NEW NORMAL OF DIGITAL SPHERE
            </p>
            <p className="paragraph-text">
              Influencers are like your brand advocates that amplifies your
              Brand's authenticity and reach by communicating with a larger
              audience. To tap that unchartered area of audience,, your business
              should let these social media stars light the way.
            </p>
            <p className="paragraph-text">
              Our influencer outreach services will help you reach new audiences
              and create effective amplification of your Brand communication. At
              TAW, we incorporate influencer marketing into your social media
              strategy to reach a niche, more engaged audience segment and
              expand your brand's presence.
            </p>
            <ul className="paragraph-text">
              <li className="li-text">Hyper-focusing on niche influencers</li>
              <li className="li-text">
                Creating waves across multiple platforms
              </li>
              <li className="li-text">
                Playing the long-term game with long-term partnership
              </li>
              <li className="li-text">Authenticity over perfection</li>
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
        <summary>Can you work on a previously built website?</summary>
        <ul>
          <li>Yes, we can work on an existing website developed previously.</li>
        </ul>
      </details>
      <details>
        <summary>
          Why is it imperative to have a good website flow and design?
        </summary>
        <ul>
          <li>
            Layout plays a huge role in your website’s page. Without it, your
            website is a wall of text and links that few would care to read
            through. Layout is important because it influences many different
            things.
          </li>
        </ul>
      </details>
      <details>
        <summary>Why UI/UX is important for the website?</summary>
        <ul>
          <li>
            Responsive design teams create a single site to support many
            devices, but need to consider content, design and performance across
            devices to ensure usability.
          </li>
        </ul>
      </details>
      <ScrollToTopButton />
    </div>
  );
}

export default Influencer;
