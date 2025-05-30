import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ServiceDetails.css";
import img from "../../assets/images/SocialMedia marketing.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/case study.png";
import ScrollToTopButton from '../TopButton/TopButton';
import { Link } from "react-router-dom";


function SocialMedia() {
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
        <title>Best Social Media Marketing Agency in Gurgaon - The Agency Way (TAW)</title>
        <meta name="description" content="Maximize your social media presence with The Agency Way (TAW), your top choice for social media marketing in Gurgaon. Engagement and growth your brand today." />
        <link rel="canonical" href="https://taw.agency/services/socialmedia" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mt-lg-5">
            <img height="350px" width="350px" src={img} alt="SocialMedia" />
          </div>
          <div className="col-lg-8 col-md-8 col-12 mt-lg-5">
            <h1 className="service-details-title">Social Media Marketing </h1>
            <p className="Create-Text" style={{ marginLeft: '3px' }}>HARNESS THE POWER OF SOCIAL MEDIA</p>
            <p className="paragraph-text" style={{ marginLeft: '5px' }}>
                The world connects through the internet, and social media is the ultimate weapon and effective link between your Brand and your consumer base. TAW helps you to harness the power of social media and forge out the most comprehensive social media marketing strategy. Our ultimate guidance helps brands gain maximum reach, boost conversions and increase brand awareness.            </p>
            <ul className="paragraph-text">
              <li className="li-text">Strategic Campaign Planning</li>
              <li className="li-text">Designing and Maintaining Social Media Platforms</li>
              <li className="li-text">Integrated Social Media Campaigns On Multiple Platforms</li>
              <li className="li-text">Social Media Advertising</li>
              <li className="li-text">Twitter Trending campaigns</li>
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
      {/* <div className="influ-reels">Case Study </div>
      <div className="slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="slider-container" style={{ animationPlayState: isPaused ? "paused" : "running" }}>
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
          <img className="slide" src={netflix} alt="Netflix" />
        </div>
      </div> */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <Link to="/contact" class="btn-flip mt-4" >
          <button class="req-btn"><i class="animation"></i>GET IN TOUCH<i class="animation"></i>
          </button>
        </Link>
      </div>
      <h2 className="faq_hed">Frequently Asked Questions (FAQs)</h2>

      <details>
        <summary>
        Why do you need a social media marketing plan?
        </summary>
        <ul>
          <li>
          With social media becoming more important every day, there's a case for every business to exploit this platform for marketing. When you consider that 73% of marketers have found social media effective for their business, you’ll see that this is an ideal platform for boosting your revenue.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        Can social media marketing be used for B2B business?
        </summary>
        <ul>
          <li>
          Yes, social media marketing can be used for a B2B brand. Effective B2B marketing requires a different approach. B2B marketers have to think more strategically to reach business owners and decision-makers through social media marketing. They then nurture relationships that can lead to large purchase agreements.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        What are the benefits of social media advertising?
        </summary>
        <ul>
          <li>
          Social media helps a brand to create a brand identity, generate online traffic, get user-generated data, increase brand engagement with customers, and more.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        Is social media good for lead generation?
        </summary>
        <ul>
          <li>
          Social media can be your most valuable lead-generation channel if you know how to use it right. With 3.6 billion people using social media worldwide, it’s the perfect channel for businesses to reach and attract leads. It’s only a matter of using the right tactics at the right time.          </li>
        </ul>
      </details>
      <ScrollToTopButton />
    </div>
  );
}

export default SocialMedia;
