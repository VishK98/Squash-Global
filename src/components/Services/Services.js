// import React from "react";
import React, { useState, useEffect } from 'react';

import "./Services.css";
import ScrollToTopButton from '../TopButton/TopButton';
import industriesBanner from "../../assets/images/our Services.png";
import mediaPlanning from "../../assets/images/New services/Media Planning & Buying.png";
import DigitalPR from "../../assets/images/New services/Public Relation.png";
import SEO from "../../assets/images/New services/SEO.png";
import socialMedia from "../../assets/images/New services/Social Media.png";
import Production from "../../assets/images/New services/Production.png";
import websiteDesign from "../../assets/images/New services/Website Design.png";
import Programmatic from "../../assets/images/New services/Programmatic Ads.png";
import Influencer from "../../assets/images/New services/Influencer Marketing.png";
import Expert from "../../assets/images/Services Bottom Section.png";
import { Link } from "react-router-dom";
import AnimatedText from '../Animations/TextAnimation';
import Slider from './Slider';
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";



function Sector() {
  const routes = ["services/mediaPlanning", "services/digitalPR", "services/seo", "services/socialMedia","services/production", "services/websiteDesign", "services/programmatics", "services/influencer"];

  const services = [
    {
      title: "Technology ",
      // imageUrl: mediaPlanning,
      imageUrl: websiteDesign
    },
    {
      title: "Design",
      // imageUrl: DigitalPR
      imageUrl: mediaPlanning
    },
    {
      title: "Social Media",
      imageUrl: socialMedia
    },
    {
      title: "SEO ",
      imageUrl: SEO
    },

    {
      title: "Paid Ads",
      // imageUrl: Production
      imageUrl: Programmatic
    },
    {
      title: "PR & ORM",
      imageUrl: DigitalPR
    },

    {
      title: "Influencer Marketing",
      imageUrl: Influencer
    },
    {
      title: "Film & Photography",
      imageUrl: Production
    },

  ];


  return (
    <>
      <div className="full-screen-image" >
        <ImageAnimationUnfold src={industriesBanner} alt="Image not found" style={{ width: "100%", height: "100%", objectFit: "fill" }}  />
      </div>
      <div class="container">
      </div>
      <div className="p-lg-0 mb-3">
        <div className="container">
          <div className="row">
            <AnimatedText text={<h1 className="industries-page-title">
              Helping businesses run
              the World Better
            </h1>} animation='slide-up' />
            <div className="col-lg-12">
              <AnimatedText text={<p style={{ fontSize: "20px" }}>
                We understand businesses and aid them in solving problems for
                the world– a pivotal trait in the ever-evolving digital
                landscape. With each sector presenting unique challenges, our
                cross-industry exposure has enabled us to cultivate a holistic
                understanding of user behaviour and preferences.
              </p>} animation='slide-up' />
              <AnimatedText text={<p style={{ fontSize: "20px" }}>
                From retail and technology to utilities and FMCG, we adeptly
                navigate complex landscapes. Immersed in industry intricacies,
                we craft distinct campaigns, transcending one-size-fits-all
                approaches.
              </p>} animation='slide-up' />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <AnimatedText text={<h2 className="box-title text-center" style={{ marginBottom: '20px' }}>
         Our Services
      </h2>} animation='slide-up' />
        <div className="row-service">
          {services.map((service, index) => (
            <div className="service-newBox">
              {/* <Link style={{ textDecoration: "none" }} to={`/${routes[index]}`}> */}
                <div className="service-space">
                  <img  className="service-image" src={service.imageUrl} />
                  <p className="service-text">{service.title}</p>
                </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-lg-2">
      <AnimatedText text={<h2 className="box-title" style={{ marginTop: '15px', marginBottom: '15px' }}>
          Some of the industry sectors we partner with
        </h2>} animation='slide-up' />
      </div>
      <Slider />
      <div className="position-relative mt-2">
        <img
          src={Expert}
          className="img-fluid mt-lg-4 mt-3"
          width="100%"
          alt="Ready to Solve Something Together"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="position-absolute top-50 start-50 d-none d-md-block">
          <div className="container" style={{ marginLeft: "30px" }}>
            <h3 style={{ color: "white" }}>Ready to Solve Something Together?</h3>
            <p style={{ color: "white" }}>
              If you're looking to enhance your SEO, PPC, and broader digital
              marketing strategies, our team is excited to engage with you. Let's
              start a conversation!
            </p>
            <Link to="/contact" class="btn-flip mt-lg-4 mt-2" >
              <button class="req-btn"><i class="animation"></i>Request a call back<i class="animation"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hide-web mt-3 " >
        <h3 style={{ color: "black" }}>Ready to Solve Something Together?</h3>
        <p style={{ color: "black" }}>
          If you're looking to enhance your SEO, PPC, and broader digital
          marketing strategies, our team is excited to engage with you. Let's
          start a conversation!
        </p>
        <Link to="/contact" class="btn-flip mt-4" >
          <button class="req-btn"><i class="animation"></i>Request a call back<i class="animation"></i>
          </button>
        </Link>

      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Sector;