import "./Home.css";
import "../Animations/Animation.css";
import AnimatedText from "../Animations/TextAnimation";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../TopButton/TopButton";
import bigCircle from "../../assets/images/big-circle-down-arrow.png";
import gispiImage from "../../assets/images/Banner Homepage.png";
import onHerLip from "../../assets/images/home-banner-new.png";
import worldwideOffice from "../../assets/images/Home Page Bottom Banner.png";
import circularText from "../../assets/images/circular-text.png";
import brandIcon from "../../assets/images/Icons/icons8-bulb.gif";
import "./BlogSlider";
import Card from "./GridCard";
import BlogSlider from "./BlogSlider";
import PartnerSlider from "./PartnerSlider";
import ClientSlider from "./ClientsSlider";
import TAWVideo from "../../assets/new-video.mp4";
import bannerVideo from "../../assets/Banner Video.mp4";
import rigthArrow from "../../assets/images/Icons/-right-arrow.png";
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
        className=""
        style={{
          marginTop: `${marginTop - marginTop * 0.1}px`,
          "@media (max-width: 767px)": {
            // marginTop: "100vh"
            marginTop: `${marginTop - marginTop * 1}px`,
          },
        }}
      ></div>
      <div className="container-fluid p-lg-3">
        <div className="row">
          <div className="col-lg-5 col-12">
            <AnimatedText
              text={
                <h1 className="Newstyle-text">
                  Framing People Centric Experiences
                </h1>
              }
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

            <p className="explorbtn" style={{ marginBottom: "2px" }}>
              Explore
            </p>
            <div
              className="animated-arrow-btn"
              style={{
                height: "40px",
                width: "40px",
              }}
            >
              <ImageAnimationUnfold src={rigthArrow} alt="Image not found" />
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
                  text={
                    <h2 className="stroke" style={{ marginBottom: "-30px" }}>
                      Pixels to
                    </h2>
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <p
                      className="Division-title"
                      style={{ fontWeight: "bold" }}
                    >
                      People
                    </p>
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <p className="brew-text">
                      Having Technology as an ally, we design digital
                      experiences that move brands closer to their vision.
                    </p>
                  }
                  animation="slide-up"
                />
              </div>
              <div className="mobile_down_arrow new-big-down-arrow2">
                <div style={{ marginLeft: "900px" }}>
                  <img height='200px' width='200px' src={bigCircle} alt="image not found" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="work_list_img round_img col-lg-7 col-md-7 col-sm-12 col-12">
              <ImageAnimationUnfold src={onHerLip} alt="Image not found" />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex flex-column align-items-center responsive-text">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex">
                  <p className="explorbtn" style={{ marginBottom: "2px" }}>
                    Explore
                  </p>
                  <Link to="/sector" style={{ textDecoration: "none" }}>
                    <div
                      className="animated-arrow-btn"
                      style={{
                        height: "40px",
                        width: "40px",
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
        <div className="container mb-lg-4 ">
          <div className="row">
            <div
              className="col-lg-4 col-md-4 col-sm-12 col-12 d-none d-md-block"
              style={{ marginTop: "150px" }}
            >
              {/* <AnimatedText
                className="brewText-stroke"
                text={
                  <h3 style={{ fontWeight: "bold" }}>What's on the TASC</h3>
                }
                animation="slide-up"
              />{" "} */}
              <div
                className="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-12 col-12  d-flex align-items-center">
                    <p className="explorbtn" style={{ marginBottom: "2px" }}>
                      Explore
                    </p>
                    <Link to="/sector" style={{ textDecoration: "none" }}>
                      <div
                        className="animated-arrow-btn"
                        style={{
                          height: "40px",
                          width: "40px",
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
            <div className="col-lg-8 col-md-8 col-sm-12 col-12 mt-md-3 d-flex justify-content-end">
              <video className="video-banner" autoPlay loop muted>
                <source src={bannerVideo} type="video/mp4" />
              </video>
            </div>


            <div className="col-lg-5 col-md-5 col-sm-12 col-12 mt-3 d-flex flex-column align-items-center d-md-none">
              {/* <AnimatedText
                text={
                  <h3 style={{ fontWeight: "bold" }}>What's on the TASC</h3>
                }
                animation="slide-up"
              /> */}
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex align-items-center">
                  <h2 style={{ fontWeight: "bold", marginRight: "10px" }}>
                    Explore{" "}
                  </h2>
                  <Link to="/sector" style={{ textDecoration: "none" }}>
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
            <h1 className="redefine-text mt-5">
              Weaving Narratives, Experiences and Connection.
            </h1>
          }
          animation="slide-down"
        />
        <AnimatedText
          text={
            <h4 className="text-center mt-4">
              In a world saturated with information, we understand that your
              brand isn't just a product or service—it's a story waiting to be
              told.
            </h4>
          }
          animation="slide-up"
        />

        <br />
        <PartnerSlider />
        <ClientSlider />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section_title">
                <AnimatedText
                  text={
                    <h2
                      className="stroke title"
                      style={{ marginBottom: "-30px" }}
                    >
                      We're
                    </h2>
                  }
                  animation="slide-right"
                />
                <AnimatedText
                  text={<h2 className="taw-title">TAW</h2>}
                  animation="slide-up"
                />
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
                        stories that resonate with the brand’s audience. At TAW,
                        we provide customize solutions and{" "}
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
            <AnimatedText
              text={<h2 className="Division-title">Divisions</h2>}
              animation="slide-right"
            />
          </div>
        </div>
        <AnimatedText
          text={<h4>A new age marketing suite for modern-day experiences.</h4>}
          animation="slide-up"
        />
        <Card />
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
                text={<h2 className="Lies-title">Specialty Lies</h2>}
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
                  text={<h3 className="Color-Text">Social Communication</h3>}
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
                  text={<h3 className="Color-Text">Creative & Content</h3>}
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
                    <h3 className="Color-Text">Organic & Paid Marketing</h3>
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
                      <li>Programmatic Buying</li>
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
                  text={<h3 className="Color-Text">Technology</h3>}
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
              text={
                <h2 className="stroke" style={{ marginBottom: "-30px" }}>
                  What’s the{" "}
                </h2>
              }
              animation="slide-left"
            />
          </div>
          <AnimatedText
            text={<h2 className="taw-title">Buzz?</h2>}
            animation="slide-right"
          />
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
                    <h2 className="taw-tittle text-lg-center title ">
                      brand experience?
                    </h2>
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
                    Company Name
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
                    <option value="Media Planning And Buying">
                      Media Planning And Buying
                    </option>
                    <option value="Digital PR And ORM">
                      Digital PR And ORM
                    </option>
                    <option value="SEO & SEM">SEO & SEM</option>
                    <option value="Creative">Creative</option>
                    <option value="Design and Development">
                      Design and Development
                    </option>
                    <option value="Content">Content</option>
                    <option value="Production">Production</option>
                    <option value="Website Design And Devlopment">
                      Website Design And Devlopment
                    </option>
                    <option value="Influencer Marketing">
                      Influencer Marketing
                    </option>
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
