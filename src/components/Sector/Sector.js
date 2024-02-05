import React from "react";
import "./Sector.css";
import ScrollToTopButton from '../TopButton/TopButton';
import industriesBanner from "../../assets/images/industries-banner.webp";
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
import Expert from "../../assets/images/connect-with-our-experts.png";
import { Link } from "react-router-dom";


function Sector() {
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
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="route-text">
              <ol class="breadcrumb bg-transparent px-0 route-text mt-4">
                <li>
                  <a
                    href="/"
                    style={{ color: "grey", textDecoration: "none" }}
                  >
                    Home /
                  </a>
                </li>
                <li
                  class="breadcrumb-item active"
                  aria-current="page"
                  style={{ marginLeft: "8px", color: "grey" }}
                >
                  Sector
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="p-lg-0 mb-3">
        <div className="container">
          <div className="row">
            <h1 className="industries-page-title">
              Helping businesses run
              <br /> the World Better
            </h1>
            <div className="col-lg-12">
              <picture>
                <img
                  src={industriesBanner}
                  className="img-fluid"
                  width="100%"
                  alt="Helping businesses run the World Better"
                />
              </picture>
              <p style={{ fontSize: "20px" }}>
                We understand businesses and aid them in solving problems for
                the world– a pivotal trait in the ever-evolving digital
                landscape. With each sector presenting unique challenges, our
                cross-industry exposure has enabled us to cultivate a holistic
                understanding of user behaviour and preferences.
              </p>
              <p style={{ fontSize: "20px" }}>
                From retail and technology to utilities and FMCG, we adeptly
                navigate complex landscapes. Immersed in industry intricacies,
                we craft distinct campaigns, transcending one-size-fits-all
                approaches.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="box-title">
          Some of the industry sectors we partner with
        </h2>
        <div
          className="row"
          style={{ justifyContent: "space-between", marginRight: "5px" }}
        >
          {box.map((image, index) => (
            // console.log('data', image)
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img className="box-img" src={image.url} alt="FMGC" />
                    <p className="mt-2 box-text">{image.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="position-relative">
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
