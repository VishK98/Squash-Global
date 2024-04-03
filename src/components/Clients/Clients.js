import React from "react";
import "./Clients.css";
import ScrollToTopButton from '../TopButton/TopButton';
import ourClients from "../../assets/images/taw-clients-banner.png";
import AnimatedText from '../Animations/TextAnimation';
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";
import ImageAnimationFade from "../Animations/ImageAnimationFade";
import newClient from "../../assets/images/client logos/6.png";
import newClient1 from "../../assets/images/client logos/10.png";
import newClient2 from "../../assets/images/client logos/1.png";
import newClient3 from "../../assets/images/client logos/12.png";
import newClient4 from "../../assets/images/client logos/13.png";
import newClient5 from "../../assets/images/client logos/14.png";
import newClient6 from "../../assets/images/client logos/15.png";
import newClient7 from "../../assets/images/client logos/16.png";
import newClient8 from "../../assets/images/client logos/17.png";
import newClient9 from "../../assets/images/client logos/18.png";
import newClient10 from "../../assets/images/client logos/19.png";
import newClient11 from "../../assets/images/client logos/2.png";
import newClient12 from "../../assets/images/client logos/20.png";
import newClient13 from "../../assets/images/client logos/3.png";
import newClient14 from "../../assets/images/client logos/4.png";
import newClient15 from "../../assets/images/client logos/5.png";
import { Helmet } from 'react-helmet';



function Work() {
  const clientImage = [newClient, newClient1, newClient2, newClient3, newClient4, newClient5, newClient6, newClient7, newClient8, newClient9, newClient10, newClient11, newClient12, newClient13, newClient14, newClient15];

  return (
    <>
         <Helmet>
        <title>Our Happy Clients - The Agency Way (TAW)</title>
        <meta name="description" content="Join our list of satisfied clients at The Agency Way (TAW). Dive into our innovative strategies and expert insights to propel your business forward." />
        <link rel="canonical" href="https://taw.agency/clients" />
      </Helmet>
      <ImageAnimationUnfold src={ourClients} />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div class="route-text">
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-lg-4">
        <AnimatedText text={<h1 className="guest-text">
          Guests are always welcome at our establishment, and we aim to provide them with a memorable experience.
        </h1>} animation='fade-in' />
        <div className="text-lg-center mt-lg-4">
          <AnimatedText text={<h2 className="partnership-text">Building Strong Relationships with Our Valued Clients</h2>
          } animation='slide-up' />
        </div>
        <div
          className="row mt-3 mt-lg-4"
          style={{ justifyContent: "space-between", marginRight: "5px" }}
        >
          {clientImage.map((image, index) => (
            <div className="col-lg-3 col-md-3 col-xl-3 col-6 mb-4" key={index}>
              <div className="work-box">
                <div className="work-box-img" style={{ height: "150px", width: "150px" }}>
                  <ImageAnimationFade src={image} alt="Image not found" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Work;
