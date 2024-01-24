import "./Home.css";
import React, { useEffect } from "react";
import bigCircle from "../../assets/images/big-circle-down-arrow.png";
import gispiImage from "../../assets/images/gipsi-report.jpg";
import arrowMore from "../../assets/images/arrow-more.png";
import tasc from "../../assets/images/TASC.png";
import onHerLip from "../../assets/images/Whats-on-her-lip.jpg";
import smile from "../../assets/images/smile.jpg";
import Wellbene from "../../assets/images/Wellbene Big.png";
import worldwideOffice from "../../assets/images/tonic-worldwide-office.jpg";
import grid1 from "../../assets/images/grid-1.png";
import grid1Logo from "../../assets/images/gipsi-logo.png";
import grid2 from "../../assets/images/grid-2.png";
import grid2Logo from "../../assets/images/twip-logo.png";
import grid3 from "../../assets/images/grid-3.png";
import grid3Logo from "../../assets/images/tonic-amplifiy.svg";
import circularText from "../../assets/images/circular-text.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import IndiaClients from "../../assets/images/IndiaClients-bw-new.jpg";
import brandIcon from "../../assets/images/brand-icon.png";

function Home() {
  useEffect(() => {
    function handleScroll() {
      const image = document.querySelector(".slide-in");
      const imagePosition = image.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (imagePosition < screenHeight / 2) {
        image.classList.add("slide-in-animation");
        window.removeEventListener("scroll", handleScroll); // Remove the event listener after the animation has been triggered
        setTimeout(() => {
          window.addEventListener("scroll", handleScroll); // Reapply the event listener after a short delay to allow for further scrolling
        }, 1000); // Adjust the delay as needed
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="homeSectionOne" className="position-relative section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bannertitle">
                <h1 className="text-lg-center not_an stroke">Not an</h1>
              </div>
              <div className="bannertitle">
                <h2 className="agency-text">Agency.</h2>
              </div>
              <div class="mobile_down_arrow new-big-down-arrow1">
                <img src={bigCircle} alt="Big Circle Down Arrow" />
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <div className="section_para pl-lg-5 pl-0">
                <div className="bannertopslide">
                  <h2 className="but-text">
                    <span>But your extended</span> <span>marketing team</span>
                  </h2>
                </div>
                <div className="bannertopslide">
                  <p style={{ fontSize: "20px" }}>
                    One that is <mark className="text-highlight">nimble</mark>{" "}
                    and ready for a{" "}
                    <mark className="text-highlight">digitally</mark> connected
                    world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="homeSectionTwo"
        className="mt-lg-5 pt-lg-4 position-relative section"
      >
        <div>
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="container">
                  <div className="row align-items-center">
                    <h2 className="topslide">Latest at Squash Global</h2>
                    <h1 className="discover-text">Discover the Unique Profiles of Indian Festive Gifters</h1>
                    <p className="topslide">
                      An Exclusive Glimpse into the
                      <br />{" "}
                      <mark className="text-highlight">
                        Profiles of Indian Gifters – Essential
                        <br /> Insights for Brands and Marketers.
                      </mark>
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline_btn explorbtn mt-4 position-relative"
                  >
                    <i style={{ marginRight: "50px" }}>Explore</i>
                    <span className="zoom-icon">
                      <img src={arrowMore} alt="" className="zooming-image" />
                    </span>
                    <div className="zoom-overlay"></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="imagereveal">
                    <img
                      style={{ height: "100%", width: "100%" }}
                      src={gispiImage}
                      alt="Gipsi Analytics Reports"
                      className="slide-in"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="homeSectionThree" class="position-relative section">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center ">
              <div>
                <div className="title">
                  <h2 className="stroke">Human centric</h2>
                </div>
                <div className="title bannertitle">
                  <h2 style={{ fontWeight: "bold" }}>experiences</h2>
                </div>
                <div className="section_para">
                  <p style={{ fontSize: "20px", fontWeight: "400" }}>
                    that move brands closer to their vision.
                  </p>
                </div>
              </div>
              <div className="mobile_down_arrow new-big-down-arrow2">
                <img
                  style={{ marginLeft: "900px", marginTop: "50px" }}
                  src={bigCircle}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <Tabs id="work-tabs" className="custom-tabs">
                <Tab eventKey="india-work" title="India">
                  {/* Content for India tab */}
                  <div className="tab-content">
                    <div className="col-lg-12 col-12">
                      <div className="row mt-4 mb-4">
                        <div className="col-md-7">
                          <div>
                            <a href="work/smile-train-redefines-inclusivity-national-lipstick-day">
                              <div className="work_list_img round_img">
                                <img
                                  style={{ height: "100%", width: "100%" }}
                                  src={onHerLip}
                                  alt="What’s on her Lip"
                                />
                              </div>
                              <div className="work_list_caption">
                                <div className="d-flex align-items-start justify-content-between">
                                  <div>
                                    {/* <h6>Social Media Strategy</h6> */}
                                  </div>
                                  <div>
                                    {/* <img src="default.jpg" alt="" /> */}
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4 offset-md-1">
                          <div className="section_para pr-lg-5 pr-0 h-100 d-flex align-items-center">
                            <div>
                              <a
                                style={{ textDecoration: "none" }}
                                href="work/smile-train-redefines-inclusivity-national-lipstick-day"
                              >
                                <h3
                                  style={{
                                    color: "black",
                                    marginLeft: "100px",
                                  }}
                                >
                                  <span className="d-block">
                                    What’s on her Lip
                                  </span>{" "}
                                  <span className="d-block"></span>
                                </h3>
                              </a>
                              <a
                                // href="pdf/Indian-Festive-Gifters-2023-GIPSI-TWW.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="outline_btn explorbtn mt-4 position-relative"
                              >
                                <i
                                  style={{
                                    marginRight: "50px",
                                    marginLeft: "100px",
                                  }}
                                >
                                  Explore
                                </i>
                                <span className="zoom-icon">
                                  <img
                                    src={arrowMore}
                                    alt=""
                                    className="zooming-image"
                                  />
                                </span>
                                <div className="zoom-overlay"></div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="col-lg-12 col-12">
                      <div className="row mt-4 mb-4">
                        <div className="col-md-4 offset-md-1">
                          <div className="section_para pr-lg-5 pr-0 h-100 d-flex align-items-center">
                            <div>
                              <a
                                style={{ textDecoration: "none" }}
                                href="work/smile-train-redefines-inclusivity-national-lipstick-day"
                              >
                                <h3
                                  style={{
                                    color: "black",
                                    marginLeft: "100px",
                                  }}
                                >
                                  <span className="d-block">
                                    Smiles that break records
                                  </span>{" "}
                                  <span className="d-block"></span>
                                </h3>
                              </a>
                              <a
                                // href="pdf/Indian-Festive-Gifters-2023-GIPSI-TWW.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="outline_btn explorbtn mt-4 position-relative"
                              >
                                <i
                                  style={{
                                    marginRight: "50px",
                                    marginLeft: "100px",
                                  }}
                                >
                                  Explore
                                </i>
                                <span className="zoom-icon">
                                  <img
                                    src={arrowMore}
                                    alt=""
                                    className="zooming-image"
                                  />
                                </span>
                                <div className="zoom-overlay"></div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div>
                            <a href="work/smile-train-redefines-inclusivity-national-lipstick-day">
                              <div className="work_list_img round_img">
                                <img
                                  style={{ height: "100%", width: "100%" }}
                                  src={smile}
                                  alt="Smiles that break records"
                                />
                              </div>
                              <div className="work_list_caption">
                                <div className="d-flex align-items-start justify-content-between">
                                  <div>
                                    {/* <h6>Social Media Strategy</h6> */}
                                  </div>
                                  <div>
                                    {/* <img src="default.jpg" alt="" /> */}
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="uae-work" title="Global">
                  {/* Content for Global tab */}
                  <div className="tab-content">
                    <div className="col-lg-12 col-12">
                      <div className="row mt-4 mb-4">
                        <div className="col-md-7">
                          <div>
                            <a href="work/smile-train-redefines-inclusivity-national-lipstick-day">
                              <div className="work_list_img round_img">
                                <img
                                  style={{ height: "100%", width: "100%" }}
                                  src={tasc}
                                  alt="What’s on her Lip"
                                />
                              </div>
                              <div className="work_list_caption">
                                <div className="d-flex align-items-start justify-content-between">
                                  <div>
                                    {/* <h6>Social Media Strategy</h6> */}
                                  </div>
                                  <div>
                                    {/* <img src="default.jpg" alt="" /> */}
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4 offset-md-1">
                          <div className="section_para pr-lg-5 pr-0 h-100 d-flex align-items-center">
                            <div>
                              <a
                                style={{ textDecoration: "none" }}
                                href="work/smile-train-redefines-inclusivity-national-lipstick-day"
                              >
                                <h3
                                  style={{
                                    color: "black",
                                    marginLeft: "100px",
                                  }}
                                >
                                  <span className="d-block">
                                    #AShotOfTonic for Expo 2020, Dubai!
                                  </span>{" "}
                                  <span className="d-block"></span>
                                </h3>
                              </a>
                              <a
                                // href="pdf/Indian-Festive-Gifters-2023-GIPSI-TWW.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="outline_btn explorbtn mt-4 position-relative"
                              >
                                <i
                                  style={{
                                    marginRight: "50px",
                                    marginLeft: "100px",
                                  }}
                                >
                                  Explore
                                </i>
                                <span className="zoom-icon">
                                  <img
                                    src={arrowMore}
                                    alt=""
                                    className="zooming-image"
                                  />
                                </span>
                                <div className="zoom-overlay"></div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="col-lg-12 col-12">
                      <div className="row mt-4 mb-4">
                        <div className="col-md-4 offset-md-1">
                          <div className="section_para pr-lg-5 pr-0 h-100 d-flex align-items-center">
                            <div>
                              <a
                                style={{ textDecoration: "none" }}
                                href="work/smile-train-redefines-inclusivity-national-lipstick-day"
                              >
                                <h3
                                  style={{
                                    color: "black",
                                    marginLeft: "100px",
                                  }}
                                >
                                  <span className="d-block">
                                    Where You Don't Compromise Your Wellbene
                                  </span>{" "}
                                  <span className="d-block"></span>
                                </h3>
                              </a>
                              <a
                                // href="pdf/Indian-Festive-Gifters-2023-GIPSI-TWW.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="outline_btn explorbtn mt-4 position-relative"
                              >
                                <i
                                  style={{
                                    marginRight: "50px",
                                    marginLeft: "100px",
                                  }}
                                >
                                  Explore
                                </i>
                                <span className="zoom-icon">
                                  <img
                                    src={arrowMore}
                                    alt=""
                                    className="zooming-image"
                                  />
                                </span>
                                <div className="zoom-overlay"></div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div>
                            <a href="work/smile-train-redefines-inclusivity-national-lipstick-day">
                              <div className="work_list_img round_img">
                                <img
                                  style={{ height: "100%", width: "100%" }}
                                  src={Wellbene}
                                  alt="Smiles that break records"
                                />
                              </div>
                              <div className="work_list_caption">
                                <div className="d-flex align-items-start justify-content-between">
                                  <div>
                                    {/* <h6>Social Media Strategy</h6> */}
                                  </div>
                                  <div>
                                    {/* <img src="default.jpg" alt="" /> */}
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div id="contactSubmitBtn" className="d-flex justify-content-center">
          <input
            style={{
              fontSize: "25px",
              fontWeight: "600",
              marginTop: "15px",
              marginBottom: "15px",
            }}
            type="submit"
            name="submit"
            value="See All"
            class="submit"
          />
        </div>
        <h3 className="creating-text">
          Creating value, relevance and connections.<br></br>Some things that
          really matter to people and brands.
        </h3>
        <img className="w-100 mt-5" style={{ paddingLeft: "25px", height: "120px" }} src={IndiaClients} alt="Slider Image" />
        {/* <img src={IndiaClientsHover} alt="Slider Image on Hover" className="hover-image" /> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section_title">
                <h2 className="mb-lg-4 stroke title">We're</h2>
                <div className="second_line_title bannertitle">
                  <h2 className="title">Squash</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section_para p-lg-5 pl-0">
                <div className="topslide">
                  <p>
                    Squash Global is a{" "}
                    <mark className="text-highlight">multi-award</mark> winning{" "}
                    <mark className="text-highlight">
                      digital, creative, content
                    </mark>{" "}
                    and performance marketing partner to some of the{" "}
                    <mark className="text-highlight">leading brands</mark> of
                    the region.
                  </p>
                  <p>
                    Bringing together creative,{" "}
                    <mark className="text-highlight">data and technology.</mark>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={worldwideOffice}
          class="img-fluid d-none d-md-block slide-in"
          alt="Tonic Worldwide Office"
          style={{ width: "100%" }}
        ></img>
      </section>
      <section
        id="homeSectionFour"
        className="mt-lg-5 mt-3 pt-4 pt-lg-0 section"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="position-relative">
                <div>
                  <div
                    className="topslide"
                  >
                    <h3 className="mb-0" style={{ fontSize: "50px" }}>
                      Reimagining stories for the connected world!
                    </h3>
                  </div>
                </div>
                <div className="section_para mt-lg-4 mt-0">
                  <div className="topslide">
                    <p style={{ fontSize: "20px" }}>
                      In this age of automated conversations, we noticed that
                      the <mark className="text-highlight">'human touch'</mark>{" "}
                      had sneaked out while no one was looking. We believe that
                      life unfolds every day. So should{" "}
                      <mark className="text-highlight">communication</mark>. It
                      should be designed for{" "}
                      <mark className="text-highlight">people</mark>. Not
                      consumers,{" "}
                      <mark className="text-highlight">leads or data sets</mark>
                      . It should enhance{" "}
                      <mark className="text-highlight">
                        people's experiences and interactions
                      </mark>
                      , in turn,{" "}
                      <mark className="text-highlight">
                        the human condition.
                      </mark>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title">
              <h2
                className="pb-lg-3 text-lg-center stroke title"
              >
                Specialist
              </h2>
              <div className="second_line_title bannertitle">
                <h2 className="title">Divisions</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="section_para">
              <div className="topslide">
                <p>
                  A new age{" "}
                  <mark className="text-highlight">marketing suite</mark>{" "}
                  for modern-day experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="specialist_divisions_slider">
              <div id="specialistDivisionsSlider" className="row">
                <div className="col-md-4 col-12">
                  <div className="grid-view mt-4">
                    <a style={{ textDecoration: "none" }} title="">
                      <h3
                        className="dot text-center"
                        style={{
                          position: "relative",
                          paddingLeft: "20px",
                          marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "40%",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "black",
                          }}
                          className="dot"
                        >
                          •
                        </span>
                        Gipsi
                      </h3>
                      <p
                        className="text"
                        style={{
                          padding: "13px",
                          fontSize: "17px",
                          fontWeight: "400",
                        }}
                      >
                        Unique insight mining practice that uses a
                        combination of AI + HI to understand consumers
                        better
                      </p>
                      <div className="d-flex align-items-center justify-content-center mt-4">
                        <img src={grid1Logo} alt="Gipsi Logo" />
                      </div>
                      <div className="SD_slider_img">
                        <img
                          src={grid1}
                          alt="Gipsi AI For Consumers Analysis"
                          className="w-100"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="grid-view mt-4">
                    <a style={{ textDecoration: "none" }} title="">
                      <h3
                        className="dot text-center"
                        style={{
                          position: "relative",
                          paddingLeft: "20px",
                          marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "40%",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "black",
                          }}
                          className="dot"
                        >
                          •
                        </span>
                        Twip
                      </h3>
                      <p
                        className="text"
                        style={{
                          padding: "13px",
                          fontSize: "17px",
                          fontWeight: "400",
                        }}
                      >
                        Narrate impactful brand stories with
                        hyper-personalised, data driven videos for
                        engagement at scale.
                      </p>
                      <div className="d-flex align-items-center justify-content-center mt-4">
                        <img src={grid2Logo} alt="Gipsi Logo" />
                      </div>
                      <div className="SD_slider_img">
                        <img
                          src={grid2}
                          alt="Gipsi AI For Consumers Analysis"
                          className="w-100"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="grid-view mt-4">
                    <a style={{ textDecoration: "none" }} title="">
                      <h3
                        className="dot text-center"
                        style={{
                          position: "relative",
                          paddingLeft: "20px",
                          marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "35%",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "black",
                          }}
                          className="dot"
                        >
                          •
                        </span>
                        Amplify
                      </h3>
                      <p
                        style={{
                          padding: "13px",
                          fontSize: "17px",
                          fontWeight: "400",
                        }}
                      >
                        In partnership with <strong>SEW</strong>, the
                        specialised practice empowers utilities for enhanced
                        outreach and stronger customer connections.
                      </p>
                      <div
                        style={{ marginTop: "33px" }}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <img src={grid3Logo} alt="Gipsi Logo" />
                      </div>
                      <div className="SD_slider_img">
                        <img
                          src={grid3}
                          alt="Gipsi AI For Consumers Analysis"
                          className="w-100"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-12">
            <div>
              <h2 className="stroke title">What</h2>
              <div className="second_line_title bannertitle">
                <h2 className="text-lg-center title m-lg-auto">We Do</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="circle_text_1 text-center">
              <img src={circularText} alt="Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 ">
          <div className="col-lg-6 col-md-12 col-12">
            <div>
              <img src={brandIcon} alt="Brand Discovery and Strategy" />
              <a >
                <h3 >Brand Discovery <br />and Strategy</h3>
              </a>
            </div>
            <div>
              <ul className="custom-arrow-bullet-point ">
                <li>Strategy and Positioning</li>
                <li>Brand Identity and Collaterals</li>
                <li>Brand Architecture</li>
                <li>Trends and Insights</li>
              </ul>
            </div>

            <div style={{ paddingLeft: "80px", paddingTop: "20px" }}>
              <img src={brandIcon} alt="Brand Discovery and Strategy" />
              <a >
                <h3>Brand Discovery <br />and Strategy</h3>
              </a>
              <div>
                <ul className="custom-arrow-bullet-point">
                  <li>Strategy and Positioning</li>
                  <li>Brand Identity and Collaterals</li>
                  <li>Brand Architecture</li>
                  <li>Trends and Insights</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 bullet-random">
            <div >
              <img src={brandIcon} alt="Brand Discovery and Strategy" />
              <a >
                <h3 >Brand Discovery <br />and Strategy</h3>
              </a>
            </div>
            <div>
              <ul className="custom-arrow-bullet-point  ">
                <li>Strategy and Positioning</li>
                <li>Brand Identity and Collaterals</li>
                <li>Brand Architecture</li>
                <li>Trends and Insights</li>
              </ul>
            </div>
            <div style={{ paddingLeft: "100px", paddingTop: "20px" }}>
              <img src={brandIcon} alt="Brand Discovery and Strategy" />
              <a >
                <h3>Brand Discovery <br />and Strategy</h3>
              </a>
              <div>
                <ul className="custom-arrow-bullet-point">
                  <li>Strategy and Positioning</li>
                  <li>Brand Identity and Collaterals</li>
                  <li>Brand Architecture</li>
                  <li>Trends and Insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h2 className="stroke">Fresh From</h2>
            </div>
            <div className="second_line_title bannertitle">
              <h2 className="title">Our Blogs</h2>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Home;
