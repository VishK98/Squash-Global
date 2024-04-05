import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ServiceDetails.css";
import img from "../../assets/images/pr.png";
import PartnerSlider from "../Home/PartnerSlider";
import netflix from "../../assets/images/case study.png";
import ScrollToTopButton from '../TopButton/TopButton';
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
        <title>Digital PR - India's Best PR Agency in Gurgaon - The Agency Way (TAW)</title>
        <meta name="description" content="Experience unparalleled brand elevation with Digital PR by The Agency Way (TAW), recognized as India's Best PR Agency in Gurgaon." />
        <link rel="canonical" href="https://taw.agency/services/digitalpr" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mt-lg-5">
            <img height="350px" width="350px" src={img} alt="DigitalPR" />
          </div>
          <div className="col-lg-8 col-md-8 col-12 mt-lg-5">
            <h1 className="service-details-title"> Digital PR & ORM </h1>
            <p className="paragraph-text">
             
Creating impactful digital PR and ORM content for a website involves a strategic approach aimed at enhancing online visibility, managing reputation, and fostering credibility. Firstly, it's imperative to define clear objectives tailored to the brand's goals, whether it's boosting brand awareness, improving search engine rankings, or mitigating reputation crises. Audience research is crucial to understanding the target demographic's preferences, online behavior, and interests. Keyword research aids in optimizing content for search engines, ensuring it aligns with user search intent. Diverse content types such as press releases, guest blog posts, infographics, and social media updates cater to different audience segments and platforms, maximizing reach and engagement. Adherence to content guidelines ensures accuracy, relevance, and consistency across all materials. Strategic distribution through newswires, social media channels, industry forums, and influencer partnerships amplifies content visibility and credibility. Regular measurement and analysis of key metrics enable ongoing optimization and refinement of content strategies, ensuring continued effectiveness in digital PR and ORM efforts.
            </p>
            <ul className="paragraph-text">
              <li className="li-text">Brand Monitoring Tools</li>
              <li className="li-text">Crisis Communication Plan</li>
              <li className="li-text">Community Engagement</li>
              <li className="li-text">Influencer Partnerships</li>
              <li className="li-text">User-Generated Content Campaigns</li>
              <li className="li-text">Localized Content</li>
              <li className="li-text">Continuous Learning and Adaptation</li>
              <li className="li-text">Ethical Practices</li>
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
        What is Digital PR and ORM?
        </summary>
        <ul>
          <li>
          Digital PR (Public Relations) and ORM (Online Reputation Management) involve strategies to manage a brand's online presence, reputation, and credibility.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        Why are Digital PR and ORM important?
        </summary>
        <ul>
          <li>
          They help businesses shape their online image, build trust with customers, and respond effectively to reputation challenges.
          </li>
        </ul>
      </details>
      <details>
        <summary>
        What strategies work for Digital PR and ORM?
        </summary>
        <ul>
          <li>
          Effective strategies include creating engaging content, building relationships with influencers, monitoring online conversations, and implementing SEO best practices.          </li>
        </ul>
      </details>
      <details>
        <summary>
        How do I measure success in Digital PR and ORM?
        </summary>
        <ul>
          <li>
          Success can be measured through website traffic, search engine rankings, social media engagement, and online reviews and ratings.          </li>
        </ul>
      </details>
      <ScrollToTopButton />
    </div>
  );
}

export default DigitalPR;
