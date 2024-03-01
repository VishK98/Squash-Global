// import React from "react";
import React, { useState, useEffect } from 'react';

import "./Services.css";
import ScrollToTopButton from '../TopButton/TopButton';
import industriesBanner from "../../assets/images/our Services.png";
import energy from "../../assets/images/energy-and-utilities.svg";
import FMCG from "../../assets/images/sector-img (8).svg";
import Consumer from "../../assets/images/sector-img (7).svg";
import BFSI from "../../assets/images/sector-img (6).svg";
import Automotive from "../../assets/images/sector-img (5).svg";
import Retails from "../../assets/images/sector-img (4).svg";
import foods from "../../assets/images/sector-img (3).svg";
import Hospitality from "../../assets/images/sector-img (2).svg";
import Media from "../../assets/images/sector-img (1).svg";
import Pharmaceutical from "../../assets/images/sector-img (12).svg";
import Telecom from "../../assets/images/sector-img (11).svg";
import Fashion from "../../assets/images/sector-img (10).png";
import Expert from "../../assets/images/Services Bottom Section.png";
import { Link } from "react-router-dom";
import AnimatedText from '../Animations/TextAnimation';
import Slider from './Slider';
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";
import mediaPlanning from "../../assets/images/Media Planning and Buying.png";



function Sector() {
  const routes = ["mediaPlanning", "digitalPR", "seo", "socialMedia", "creative", "content", "production", "websiteDesign", "programmatics", "influencer"];

  const box = [
    {
      title: "Energy and Utilities",
      url: energy
    },
    {
      title: "FMCG",
      url: FMCG
    },
    {
      title: "Consumer Goods",
      url: Consumer
    },
    {
      title: "BFSI",
      url: BFSI
    },
    {
      title: "Automotive",
      url: Automotive
    },
    {
      title: "Retails",
      url: Retails
    },
    {
      title: "Food and Beverages",
      url: foods
    },
    {
      title: "Tourism and Hospitality",
      url: Hospitality
    },
    {
      title: "Media and Entertainment",
      url: Media
    },
    {
      title: "Pharmaceutical",
      url: Pharmaceutical
    },
    {
      title: "Telecom",
      url: Telecom
    },
    {
      title: "Fashion And Lifestyle",
      url: Fashion
    },
  ];
  const services = [
    {
      title: "MEDIA PLANNING AND BUYING",
      url: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-media-planning-marketing-agency-flaticons-lineal-color-flat-icons-3.png'
    },
    {
      title: "DIGITAL PR AND ORM",
      url: FMCG
    },
    {
      title: "SEO & SEM",
      url: Consumer
    },
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      url: BFSI
    },

    {
      title: "PRODUCTION",
      url: foods
    },
    {
      title: "WEBSITE DESIGN AND DEVLOPMENT",
      url: Hospitality
    },

    {
      title: "PROGRAMMATIC ADVERTISING",
      url: Pharmaceutical
    },
    {
      title: "INFLUENCER MARKETING",
      url: Telecom
    },

  ];


  return (
    <>
      {/*  */}
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
          {services.map((image, index) => (
            <div className="service-newBox">
              <Link style={{ textDecoration: "none" }} to={`/${routes[index]}`}>
                <div className="service-space">
                  <img  className="service-image" src={mediaPlanning} />
                  <p className="service-text">{image.title}</p>
                </div>
              </Link>
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
            <Link to="/contact" class="btn-flip mt-4" >
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