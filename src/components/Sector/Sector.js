import React from "react";
import "./Sector.css";
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
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img
                      className="box-img"
                      src={energy}
                      alt="Energy and Utilities"
                    />
                    <p>
                      Energy and
                      <br />
                      Utilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img className="box-img" src={FMCG} alt="FMGC" />
                    <p className="mt-2">FMGC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img className="box-img" src={Consumer} alt="Consumer" />
                    <p className="mt-2">
                      Consumer
                      <br />
                      Goods
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img className="box-img" src={BFSI} alt="Consumer" />
                    <p className="mt-2">BFSI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img
                      className="box-img"
                      src={Automotive}
                      alt="Automotive"
                    />
                    <p className="mt-2">Automotive</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img className="box-img" src={Retails} alt="Retails" />
                    <p className="mt-2">Retails</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img className="box-img" src={foods} alt="foods" />
                    <p>
                      Food and
                      <br /> Beverages
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img
                      className="box-img"
                      src={Hospitality}
                      alt="Hospitality"
                    />
                    <p>
                      Tourism and
                      <br /> Hospitality
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img className="box-img" src={Media} alt="Media" />
                    <p>
                      Media and <br />
                      Entertainment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100">
                    <img
                      className="box-img"
                      src={Pharmaceutical}
                      alt="Pharmaceutical"
                    />
                    <p>Pharmaceutical</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100 ">
                    <img className="box-img" src={Telecom} alt="Telecom" />
                    <p>Telecom</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mt-3">
              <div className="boxes">
                <div className="col">
                  <div className="industries-four-boxes h-100 ">
                    <img className="box-img" src={Fashion} alt="Fashion" />
                    <p>
                      Fashion and
                      <br /> Lifestyle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4" style={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            src={Expert}
            className="img-fluid"
            width="100%"
            alt="Ready to Solve Something Together"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="overlap-text"
          >
            <div className="col-md-12 col-lg-8 col-12">
            <h3>Ready to Solve Something Together?</h3>
            <p>
              If you're looking to enhance your SEO, PPC, and broader digital
              marketing strategies, our team is excited to engage with you.
              Let's start a conversation!
            </p>
           <button className="button">
           <Link to="/contact" style={{textDecoration: "none"}} >
              Request a call back
            </Link>
           </button>
            </div>
          </div>
        </div>
      </>
    
  );
}

export default Sector;
