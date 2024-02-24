import "./Home.css";
import "../Animations/Animation.css";
import AnimatedFadeImage from "../Animations/ImageAnimationFade";
import AnimatedUnfoldImage from "../Animations/ImageAnimationUnfold";
import AnimatedText from "../Animations/TextAnimation";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../TopButton/TopButton";
import bigCircle from "../../assets/images/big-circle-down-arrow.png";
import gispiImage from "../../assets/images/demo-image.png";
import arrowMore from "../../assets/images/arrow-more.png";
import tasc from "../../assets/images/TASC.png";
import onHerLip from "../../assets/images/home-banner-new.png";
import worldwideOffice from "../../assets/images/Home Page Bottom banner.png";
import grid1 from "../../assets/images/grid-1.png";
import grid1Logo from "../../assets/images/gipsi-logo.png";
import grid2 from "../../assets/images/grid-2.png";
import grid2Logo from "../../assets/images/twip-logo.png";
import grid3 from "../../assets/images/grid-3.png";
import grid3Logo from "../../assets/images/tonic-amplifiy.svg";
import circularText from "../../assets/images/circular-text.png";
import brandIcon from "../../assets/images/Icons/icons8-bulb.gif";
import "./BlogSlider";
import BlogSlider from "./BlogSlider";
import PartnerSlider from "./PartnerSlider";
// import TAWVideo from "../../assets/TAW.mp4";
import TAWVideo from "../../assets/new-video.mp4";
import bannerVideo from "../../assets/Banner Video.mp4";
import rigthArrow from "../../assets/images/Icons/-right-arrow.png";
import ImageAnimationFade from "../Animations/ImageAnimationFade";
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    contactNumber: "",
    about: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
    } else {
      console.log("Form is not valid");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.state.trim() !== "" &&
      formData.contactNumber.trim() !== "" &&
      formData.about.trim() !== "" &&
      formData.service.trim() !== ""
    );
  };
  const videoRef = useRef(null);
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      const videoHeight = videoRef.current.clientHeight;
      setMarginTop(videoHeight);
    }
  }, []);

  return (
    <>
      <video
        className="video-display video-main"
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={TAWVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="d-none d-md-block"
        style={{ marginTop: `${marginTop - marginTop * 0.1}px` }}
      ></div>
      <div className="container-fluid p-lg-3">
        <div className="row">
          <div className="col-lg-5 col-12">
            <AnimatedText
              text={
                <h2 className="brewText-stroke">
                  What’s Brewing at TAW?
                </h2>
              }
              animation="slide-left"
            />
            <AnimatedText
              text={<h1 className="agency-text mt-3">Framing People Centric Experiences</h1>}
              animation="slide-left"
            />
            <AnimatedText
              text={
                <p className="brew-text">
                  Our marketing strategies go beyond{" "}
                  <span className="text-highlight">
                    With deep understanding of human behavior, we forge
                    connection that helps
                  </span>{" "}
                  Brands to speak to their audience individually.
                </p>
              }
              animation="slide-left"
            />

            <div className="row">
              <div className="col">
                <p className="outline_btn explorbtn position-relative">Explore</p>
              </div>
              <div className="col">
                <Link to="#" style={{ textDecoration: "none" }}>
                  <div
                    className="animated-arrow-btn"
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  >
                    <ImageAnimationUnfold
                      src={rigthArrow}
                      alt="Image not found"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-4 mt-lg-0 col-12">
            <ImageAnimationUnfold src={gispiImage} alt="Image not found" />
          </div>
        </div>
      </div>

      <section id="homeSectionThree ">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <div>
                <AnimatedText
                  text={<h2 className="stroke">Pixels to </h2>}
                  animation="slide-up"
                />
                <div className="bannertitle">
                  <AnimatedText
                    text={<h2 style={{ fontWeight: "bold" }}>People</h2>}
                    animation="slide-up"
                  />
                </div>
                <AnimatedText
                  text={
                    <p className="brew-text">
                      Having Technology as an ally,{" "}
                      <mark className="text-highlight">
                        we design digital experiences that
                      </mark>{" "}
                      move brands closer to their vision.
                    </p>
                  }
                  animation="slide-up"
                />
              </div>
              <div className="mobile_down_arrow new-big-down-arrow2">
                <div style={{ marginLeft: "900px" }}>
                  <img src={bigCircle} alt="image not found" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="work_list_img round_img col-lg-7 col-md-7 col-sm-12 col-12">
              <ImageAnimationUnfold src={onHerLip} alt="Image not found" />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex flex-column align-items-center responsive-text">
              <AnimatedText
                className="brewText-stroke"
                text={
                  <h3 style={{ fontWeight: "bold" }}>What's on the Lips</h3>
                }
                animation="slide-up"
              />{" "}
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex align-items-center">
                  <h2 style={{ fontWeight: "bold", marginRight: "10px" }}>
                    Explore{" "}
                  </h2>
                  <Link to="/blogDetails" style={{ textDecoration: "none" }}>
                    <div
                      className="animated-arrow-btn"
                      style={{
                        marginLeft: "10px",
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      <ImageAnimationUnfold
                        src={rigthArrow}
                        alt="Image not found"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-lg-5 mb-lg-4 mt-3">
          <div className="row">
            <div
              className="col-lg-5 col-md-5 col-sm-12 col-12 d-none d-md-block"
              style={{ marginTop: "150px" }}
            >
              <AnimatedText
                className="brewText-stroke"
                text={
                  <h3 style={{ fontWeight: "bold" }}>What's on the TASC</h3>
                }
                animation="slide-up"
              />{" "}
              <div
                className="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-12 col-12  d-flex align-items-center">
                    <h2 style={{ fontWeight: "bold", marginRight: "10px" }}>
                      Explore{" "}
                    </h2>
                    <Link to="/blogDetails" style={{ textDecoration: "none" }}>
                      <div
                        className="animated-arrow-btn"
                        style={{
                          marginLeft: "10px",
                          height: "50px",
                          width: "50px",
                        }}
                      >
                        <ImageAnimationUnfold
                          src={rigthArrow}
                          alt="Image not found"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="work_list_img round_img col-lg-7 col-md-7 col-sm-12 col-12">
              <ImageAnimationUnfold src={tasc} alt="Image not found" />
            </div> */}
            <div className=" col-lg-7 col-md-7 col-sm-12 col-12 mt-md-5">
              <video className="video-banner" autoPlay loop muted>
                <source src={bannerVideo} type="video/mp4" />
              </video>
            </div>



            <div className="col-lg-5 col-md-5 col-sm-12 col-12 mt-3 d-flex flex-column align-items-center d-md-none">
              <AnimatedText
                text={
                  <h3 style={{ fontWeight: "bold" }}>What's on the TASC</h3>
                }
                animation="slide-up"
              />
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex align-items-center">
                  <h2 style={{ fontWeight: "bold", marginRight: "10px" }}>
                    Explore{" "}
                  </h2>
                  <Link to="/blogDetails" style={{ textDecoration: "none" }}>
                    <div
                      className="animated-arrow-btn"
                      style={{
                        marginLeft: "10px",
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      <ImageAnimationUnfold
                        src={rigthArrow}
                        alt="Image not found"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center">
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
        </div> */}
        <div>
        <div className="d-flex justify-content-center  mb-3 mt-3">
            <button className="SeeAll-button">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>See All</span>
            </button>
          </div>

        </div>
        <AnimatedText
          text={
            <h3 className="creating-text">
              Weaving Narratives, Experiences and Connection.
            </h3>
          }
          animation="slide-down"
        />
        <AnimatedText
          text={
            <h4 className="text-center">
              In a world saturated with information, we understand that your
              brand isn't just a product or service—it's a story waiting to be
              told.
            </h4>
          }
          animation="slide-up"
        />

        <br />
        <PartnerSlider rtl={true} />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section_title">
                <AnimatedText
                  text={<h2 className="mb-lg-4 stroke title">We're</h2>}
                  animation="slide-right"
                />
                <div className="second_line_title bannertitle">
                  <AnimatedText
                    text={<h2 className="title bannertitle">TAW</h2>}
                    animation="slide-left"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section_para p-lg-5 pl-0">
                <div className="topslide">
                  <AnimatedText
                    text={
                      <p className="brew-text">
                        TAW-the agency ways is more than{" "}
                        <span className="text-highlight">
                          just a marketing agency.
                        </span>{" "}
                        We are the architects of brand experiences, designing
                        stories that resonate with the brand’s audience. At
                        TAW, we provide customize solutions and{" "}
                        <span className="text-highlight">
                          expertise to unique business needs making us the right
                          choice for start-ups and small to medium companies.
                        </span>{" "}
                        With us, you can build future ready brand, through an
                        integration of content, technology and media, using data
                        backed tools and practices.
                      </p>
                    }
                    animation="fade-in"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ImageAnimationUnfold src={worldwideOffice} alt="Image not found" />
      </section>
      <section id="homeSectionFour" className="mt-lg-5 mt-3 ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="position-relative">
                <div>
                  <div className="topslide">
                    <AnimatedText
                      text={
                        <h3 className="redefine-text">
                          Redefining Communication for Brands to Create More
                          Approachable Framework{" "}
                        </h3>
                      }
                      animation="slide-down"
                    />
                  </div>
                </div>
                <div className=" mt-lg-4 mt-2">
                  <AnimatedText
                    text={
                      <div className="brew-text">
                        We believe every brand carries a story and looking for
                        the optimum communication strategy to interact with
                        their audience.{" "}
                        <span className="text-highlight">
                          In the era of technology and artificial intelligence,
                          we design campaigns with human touch that leaves a
                          lasting impression.
                        </span>{" "}
                        With TAW, you can amplify your brand’s communication
                        making it more interactive and people centric. This will
                        not only generate leads but also make your brand more
                        relatable and problem solving to your consumers.{" "}
                        <span className="text-highlight">
                          Join us on a journey where marketing transcends the
                          ordinary and becomes a catalyst for connection,
                          creativity, and growth.
                        </span>
                      </div>
                    }
                    animation="slide-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <AnimatedText
              text={<h2 className="text-lg-center stroke title">Specialist</h2>}
              animation="slide-left"
            />
            <div className="second_line_title bannertitle">
              <AnimatedText
                text={<h2 className="title">Divisions</h2>}
                animation="slide-right"
              />
            </div>
          </div>
        </div>
        <AnimatedText
          text={
            <p>
              A new age <mark className="text-highlight">marketing suite</mark>{" "}
              for modern-day experiences.
            </p>
          }
          animation="slide-left"
        />
        <div className="row">
          <div className="col-12">
            <div id="specialistDivisionsSlider" className="row">
              <div className="col-md-4">
                <div className="grid-view mt-4">
                  <a style={{ textDecoration: "none" }} title="">
                    <AnimatedText
                      text={
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
                      }
                      animation="slide-up"
                    />
                    <AnimatedText
                      text={
                        <p
                          className="text"
                          style={{
                            padding: "13px",
                            fontSize: "17px",
                            fontWeight: "400",
                          }}
                        >
                          Unique insight mining practice that uses a combination
                          of AI + HI to understand consumers better
                        </p>
                      }
                      animation="slide-up"
                    />
                    <div className="d-flex align-items-center justify-content-center">
                      <img src={grid1Logo} alt="Gipsi Logo" />
                    </div>
                    <div className="SD_slider_img">
                      <AnimatedFadeImage src={grid1} alt="Image not found" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="grid-view mt-4">
                  <a style={{ textDecoration: "none" }} title="">
                    <AnimatedText
                      text={
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
                      }
                      animation="slide-up"
                    />
                    <AnimatedText
                      text={
                        <p
                          className="text"
                          style={{
                            padding: "13px",
                            fontSize: "17px",
                            fontWeight: "400",
                          }}
                        >
                          Narrate impactful brand stories with
                          hyper-personalised, data driven videos for engagement
                          at scale.
                        </p>
                      }
                      animation="slide-up"
                    />
                    <div className="d-flex align-items-center justify-content-center mt-4">
                      <img src={grid2Logo} alt="Gipsi Logo" />
                    </div>
                    <div className="SD_slider_img">
                      <AnimatedFadeImage src={grid2} alt="Image not found" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="grid-view mt-4">
                  <a style={{ textDecoration: "none" }} title="">
                    <AnimatedText
                      text={
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
                      }
                      animation="slide-up"
                    />
                    <AnimatedText
                      text={
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
                      }
                      animation="slide-up"
                    />
                    <div className="d-flex align-items-center justify-content-center">
                      <img src={grid3Logo} alt="Gipsi Logo" />
                    </div>
                    <div className="SD_slider_img">
                      <AnimatedFadeImage src={grid3} alt="Image not found" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 col-md-12">
            <div>
              <AnimatedText
                text={
                  <h2 className="specialty-text text-lg-center">Where Our</h2>
                }
                animation="slide-left"
              />
              <AnimatedText
                text={<h2 className="specialty-text">Specialty Lies</h2>}
                animation="slide-right"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 d-none d-md-block">
            <div className="rotating-image text-center">
              <img src={circularText} alt="image not found" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5 ">
          <div className="col-lg-6 col-md-12 col-12">
            <div>
              <div
                className="animated-arrow-btn"
                style={{ marginLeft: "10px", height: "50px", width: "50px" }}
              >
                <ImageAnimationUnfold src={brandIcon} alt="Image not found" />
              </div>
              <a>
                <AnimatedText
                  text={
                    <h3>
                      Social Communication
                    </h3>
                  }
                  animation="slide-left"
                />
              </a>
              <div>
                <AnimatedText
                  text={
                    <ul className="custom-arrow-bullet-point">
                      <li>Social Media Management</li>
                      <li>Social Strategy</li>
                      <li>ORM</li>
                      <li>Influencer Marketing</li>
                    </ul>
                  }
                  animation="slide-left"
                />
              </div>
            </div>
            <div style={{ paddingLeft: "80px", paddingTop: "20px" }}>
              <div
                className="animated-arrow-btn"
                style={{ marginLeft: "10px", height: "50px", width: "50px" }}
              >
                <ImageAnimationUnfold src={brandIcon} alt="Image not found" />
              </div>{" "}
              <a>
                <AnimatedText
                  text={
                    <h3>
                      Creative & Content
                    </h3>
                  }
                  animation="slide-left"
                />
              </a>
              <div>
                <AnimatedText
                  text={
                    <ul className="custom-arrow-bullet-point">
                      <li>Creative assets management</li>
                      <li>Identity and collaterals</li>
                      <li>Content Strategy</li>
                      <li>Production & Photography</li>
                    </ul>
                  }
                  animation="slide-left"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div>
              <div
                className="animated-arrow-btn"
                style={{ marginLeft: "10px", height: "50px", width: "50px" }}
              >
                <ImageAnimationUnfold src={brandIcon} alt="Image not found" />
              </div>{" "}
              <a>
                <AnimatedText
                  text={
                    <h3>
                     Organic & Paid Marketing
                    </h3>
                  }
                  animation="slide-right"
                />
              </a>
              <div>
                <AnimatedText
                  text={
                    <ul className="custom-arrow-bullet-point">
                      <li>Search Engine Optimisation</li>
                      <li>Search Engine Managemen</li>
                      <li>Media Planning and Buying</li>
                      <li>Programmatic Buying</li>
                    </ul>
                  }
                  animation="slide-right"
                />
              </div>
            </div>
            <div style={{ paddingLeft: "100px", paddingTop: "20px" }}>
              <div
                className="animated-arrow-btn"
                style={{ marginLeft: "10px", height: "50px", width: "50px" }}
              >
                <ImageAnimationUnfold src={brandIcon} alt="Image not found" />
              </div>{" "}
              <a>
                <AnimatedText
                  text={
                    <h3>
                     Technology
                    </h3>
                  }
                  animation="slide-right"
                />
              </a>
              <div>
                <AnimatedText
                  text={
                    <ul className="custom-arrow-bullet-point">
                      <li> Website design and Development</li>
                      <li> E-commerce Website Development</li>
                      <li> AR Filter</li>
                      <li> Mobile Application</li>
                    </ul>
                  }
                  animation="slide-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-12">
          <div className="title">
            <AnimatedText
              text={<h2 className="stroke">What’s the </h2>}
              animation="slide-left"
            />
          </div>
          <div className="second_line_title bannertitle">
            <AnimatedText
              text={<h2 className="title">Buzz?</h2>}
              animation="slide-right"
            />
          </div>
        </div>
      </div>

      <BlogSlider></BlogSlider>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <div>
              <AnimatedText
                text={<h2 className="stroke">Ready to redefine your </h2>}
                animation="slide-left"
              />
              <div className="second_line_title bannertitle">
                <AnimatedText
                  text={
                    <h2 className="text-lg-center title ">brand experience?</h2>
                  }
                  animation="slide-right"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 d-none d-md-block">
            <div className="rotating-image text-center">
              <img src={circularText} alt="image not found" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <AnimatedText
                text={
                  <label>
                    Full Name
                    <sup
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </sup>
                  </label>
                }
                animation="slide-up"
              />
              <AnimatedText
                text={
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field mb-lg-5 mb-3"
                    required
                  />
                }
                animation="slide-up"
              />
              <AnimatedText
                text={
                  <label>
                    State
                    <sup
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </sup>
                  </label>
                }
                animation="slide-up"
              />
              <AnimatedText
                text={
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field mb-lg-5 mb-3"
                    required
                  />
                }
                animation="slide-up"
              />
              <AnimatedText
                text={<label htmlFor="service">Choose a service:</label>}
                animation="slide-up"
              />
              <AnimatedText
                text={
                  <select
                    type="dropdown"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field mb-3"
                    required
                  >
                    <option value="selected">Select</option>
                    <option value="Brand Discovery and Strategy">
                      Brand Discovery and Strategy
                    </option>
                    <option value="Social Media Strategy">
                      Social Media Strategy
                    </option>
                    <option value="Data and Insights">Data and Insights</option>
                    <option value="Creative and Content">
                      Creative and Content
                    </option>
                    <option value="Design and Development">
                      Design and Development
                    </option>
                    <option value="Organic and Paid Marketing">
                      Organic and Paid Marketing
                    </option>
                    <option value="Other">Other</option>
                  </select>
                }
                animation="slide-up"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <AnimatedText
                text={
                  <label>
                    Email
                    <sup
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </sup>
                  </label>
                }
                animation="slide-up"
              />
              <AnimatedText
                text={
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field mb-lg-5 mb-3"
                    required
                  />
                }
                animation="slide-up"
              />
              <AnimatedText
                text={
                  <label>
                    Contact number
                    <sup
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </sup>
                  </label>
                }
                animation="slide-up"
              />
              <AnimatedText
                text={
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="+91 9900000088"
                    autoComplete="off"
                    className="form-field mb-lg-5 mb-3"
                    pattern="[0-9]{10}"
                    required
                  />
                }
                animation="slide-up"
              />
              <AnimatedText
                text={<label>Here's something more to add</label>}
                animation="slide-up"
              />
              <AnimatedText
                text={
                  <input
                    type="text"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field"
                    required
                  />
                }
                animation="slide-up"
              />
            </div>
          </div>
          {/* <div
            id="contactSubmitBtn"
            className="d-flex justify-content-center mt-lg-5 mb-3 mt-3"
          >
            <AnimatedText
              text={
                <input
                  type="submit"
                  name="submit"
                  value="Send it"
                  class="submit"
                />
              }
              animation="fade-in"
            />
          </div> */}
          <div className="d-flex justify-content-center  mb-3 mt-3">
            <button className="submit-button">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="35"
                    height="35"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Submit</span>
            </button>
          </div>

        </form>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Home;
