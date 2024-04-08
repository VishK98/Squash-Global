import "./Home.css";
import "../Animations/Animation.css";
import AnimatedText from "../Animations/TextAnimation";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../TopButton/TopButton";
import bigCircle from "../../assets/images/big-circle-down-arrow.png";
import gispiImage from "../../assets/images/taw-home-banner1.png";
import onHerLip from "../../assets/images/taw-ad-img1.png";
import worldwideOffice from "../../assets/images/taw-home-banner2.png";
import circularText from "../../assets/images/circular-text.png";
import brandIcon from "../../assets/images/Icons/icons8-bulb.gif";
import "./BlogSlider";
import Card from "./GridCard";
import BlogSlider from "./BlogSlider";
import PartnerSlider from "./PartnerSlider";
import ClientSlider from "./ClientsSlider";
import TAWVideo from "../../assets/taw-main-video.mp4";
import bannerVideo from "../../assets/taw-ad-video.mp4";
import rigthArrow from "../../assets/images/Icons/-right-arrow.png";
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";
import { Helmet } from "react-helmet";
import { contactUs } from "../../utils/api";
import { contactUsMail } from "../../utils/api";
import PopupModal from "../PopupModal/PopupModal";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    companyName: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.contact &&
      formData.companyName &&
      formData.message &&
      formData.service !== "selected"
    ) {
      try {
        setModalShow(true);
        const response = await contactUs(formData);
        // console.log("Response:", response.success);
        if (response.success) {
          await sendMail(formData); // Wait for sendMail() to complete
          setApiResponse(response);
          setModalShow(true);
          const resetValue = {
            name: "",
            email: "",
            contact: "",
            companyName: "",
            service: "",
            message: "",
          };
          setFormData(resetValue);
          window.location.href = "/thankyou";
        }
      } catch (error) {
        console.error("Error submitting form for admin:", error);
      }
    } else {
      alert("Please fill out all fields and select a service.");
    }
  };
  const handleContactChange = (event) => {
    const { value } = event.target;
    // Ensure only numeric values are entered and limit to 10 digits
    const numericValue = value.replace(/\D/g, "").slice(0, 10);
    setFormData((prevData) => ({
      ...prevData,
      contact: numericValue,
    }));
  };

  const sendMail = async (formData) => {
    // Pass formData as an argument
    try {
      const response = await contactUsMail(formData);
      console.log(`Mail response ==> ${response.data}`);
    } catch (error) {
      console.error("Error submitting form for mail:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      <Helmet>
        <title>
          The Agency Way - Digital Marketing and Advertising Agency in Gurgaon
        </title>
        <meta
          name="description"
          content="Boost your brand's digital presence with The Agency Way (TAW)  your trusted Digital Marketing and Advertising Agency in Gurgaon. Reach new heights online."
        />
        <link rel="canonical" href="https://taw.agency/" />
      </Helmet>

      <video
        className="video-main"
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
        className="container-fluid p-lg-5"
        style={{
          marginTop: `${marginTop - marginTop * 0.1}px`,
        }}
      >
        <div className="row">
          <div className="col-lg-4 col-12">
            <AnimatedText
              text={<h1 className="framing-text">Framing People</h1>}
              animation="slide-up"
            />
            <AnimatedText
              text={<p className="framing-text">Centric</p>}
              animation="slide-up"
            />
            <AnimatedText
              text={<p className="Newstyle-text">Experiences</p>}
              animation="slide-up"
            />
            <AnimatedText
              text={
                <p className="paragraph-text">
                  Our marketing strategies go beyond driving campaigns for
                  brands. With deep understanding of human behavior, we forge
                  connection that helps Brands to speak to their audience
                  individually. We breathe life into your Brand with meaningful
                  innovation and creative communication.
                </p>
              }
              animation="slide-up"
            />

            <p className="explorbtn" style={{ marginTop: "35px" }}>
              Explore
            </p>

            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <div
                className="animated-arrow-btn"
                style={{
                  height: "40px",
                  width: "40px",
                }}
              >
                <ImageAnimationUnfold src={rigthArrow} alt="Image not found" />
              </div>
            </Link>
          </div>
          <div className="col-lg-8 mt-4 mt-lg-0 col-12">
            <ImageAnimationUnfold src={gispiImage} alt="Image not found" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 stroke-margin">
            <AnimatedText
              text={
                <h2 className="stroke" style={{ marginBottom: "-35px" }}>
                  Pixels to
                </h2>
              }
              animation="slide-up"
            />
            <AnimatedText
              text={<p className="Division-title">People</p>}
              animation="slide-up"
            />
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="mobile_down_arrow new-big-down-arrow2">
              <img height="200px" width="200px" src={bigCircle} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section id="below-pixel-to-people">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <ImageAnimationUnfold src={onHerLip} alt="Image not found" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 d-flex flex-column align-items-center responsive-text">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex">
                  <p className="explorbtn" style={{ marginBottom: "2px" }}>
                    Explore
                  </p>
                  <Link to="/services" style={{ textDecoration: "none" }}>
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
        <div className="container-fluid mb-lg-4 ">
          <div className="row">
            <div
              className="col-lg-5 col-md-5 d-none d-md-block"
              style={{ paddingTop: "200px", paddingLeft: "100px" }}
            >
              <div
                className="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-12 col-12  d-flex align-items-center">
                    <p className="explorbtn" style={{ marginBottom: "2px" }}>
                      Explore
                    </p>
                    <Link to="/services" style={{ textDecoration: "none" }}>
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

            <div className="col-lg-7 col-md-7 mt-md-4 ">
              <video className="video-banner" autoPlay loop muted>
                <source src={bannerVideo} type="video/mp4" />
              </video>
            </div>
            {/* for mobile view starts*/}

            <div className="col-lg-5 col-md-5 col-sm-12 col-12 mt-3 d-flex flex-column align-items-center d-md-none">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex align-items-center">
                  <h2 style={{ fontWeight: "bold", marginRight: "10px" }}>
                    Explore
                  </h2>
                  <Link to="/services" style={{ textDecoration: "none" }}>
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
            {/* for mobile view starts*/}
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
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
        <div className="container">
          <AnimatedText
            text={
              <h3 className="redefine-text mt-lg-5 mt-5">
                Weaving Narratives, Experiences and Connection.
              </h3>
            }
            animation="slide-down"
          />
        </div>
        <div className="container-fluid">
          <AnimatedText
            text={
              <p className=" home-sub-heading">
                In a world saturated with information, we understand that your
                brand isn't just a product or service - it's a story waiting to
                be told.
              </p>
            }
            animation="slide-up"
          />
        </div>

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
                  animation="slide-up"
                />
                <AnimatedText
                  text={<h2 className="taw-title">TAW</h2>}
                  animation="slide-up"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section_para p-lg-5">
                <div className="topslide">
                  <AnimatedText
                    text={
                      <p className="paragraph-text">
                        TAW-the agency way is more than just a marketing agency.
                        We are the architects of brand experiences, designing
                        stories that resonate with the brand’s audience. At TAW,
                        we provide customize solutions and expertise to unique
                        business needs making us the right choice for start-ups
                        and small to medium companies. With us, you can build
                        future ready brand, through an With us, you can build
                        future ready brand, through an integration of content,
                        technology and media, using data backed tools and
                        practices.
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
      <section id="homeSectionFour" className="mt-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <AnimatedText
                  text={
                    <h3 className="redefine-text">
                      Redefining Communication for Brands to Create More
                      Approachable Framework
                    </h3>
                  }
                  animation="slide-down"
                />
                <div className=" mt-lg-4 mt-2">
                  <AnimatedText
                    text={
                      <div className="paragraph-text">
                        We believe every brand carries a story and looking for
                        the optimum communication strategy to interact with
                        their audience. In the era of technology and artificial
                        intelligence, we design campaigns with human touch that
                        leaves a lasting impression. With TAW, you can amplify
                        your brand’s communication making it more interactive
                        and people centric. This will not only generate leads
                        but also make your brand more relatable and problem
                        solving to your consumers. Join us on a journey where
                        marketing transcends the ordinary and becomes a catalyst
                        for connection, creativity, and growth.
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
              animation="slide-up"
            />

            <AnimatedText
              text={<p className="image-text-effect">Divisions</p>}
              animation="slide-up"
            />
          </div>
        </div>
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
                animation="slide-up"
              />
              <AnimatedText
                text={<h2 className="Lies-title">Specialty Lies</h2>}
                animation="slide-up"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 d-none d-md-block">
            <div className="rotating-image text-center">
              <img src={circularText} alt="" />
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
              {/* <a> */}
              <AnimatedText
                text={<h3 className=" Color-Text">Social Communication</h3>}
                animation="slide-up"
              />
              {/* </a> */}
              <div>
                <AnimatedText
                  text={
                    <ul className="custom-arrow-bullet-point">
                      <li className="paragraph-text">
                        Social Media Management
                      </li>
                      <li className="paragraph-text">Social Strategy</li>
                      <li className="paragraph-text">ORM</li>
                      <li className="paragraph-text">Influencer Marketing</li>
                    </ul>
                  }
                  animation="slide-up"
                />
              </div>
            </div>
            <div className="creative-box">
              <div
                className="animated-arrow-btn"
                style={{ marginLeft: "10px", height: "50px", width: "50px" }}
              >
                <ImageAnimationUnfold src={brandIcon} alt="Image not found" />
              </div>{" "}
              {/* <a> */}
              <AnimatedText
                text={<h3 className="Color-Text">Creative & Content</h3>}
                animation="slide-up"
              />
              {/* </a> */}
              <div>
                <AnimatedText
                  text={
                    <ul className="custom-arrow-bullet-point">
                      <li className="paragraph-text">
                        Creative assets management
                      </li>
                      <li className="paragraph-text">
                        {" "}
                        Identity and collaterals
                      </li>
                      <li className="paragraph-text">Content Strategy</li>
                      <li className="paragraph-text">
                        Production & Photography
                      </li>
                    </ul>
                  }
                  animation="slide-up"
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
              {/* <a> */}
              <AnimatedText
                text={<h3 className="Color-Text">Organic & Paid Marketing</h3>}
                animation="slide-up"
              />
              {/* </a> */}
              <div>
                <AnimatedText
                  text={
                    <ul className="custom-arrow-bullet-point">
                      <li className="paragraph-text">
                        Search Engine Optimization
                      </li>
                      <li className="paragraph-text">
                        Search Engine Management
                      </li>
                      <li className="paragraph-text">
                        Media Planning and Buying
                      </li>
                      <li className="paragraph-text">Programmatic Buying</li>
                    </ul>
                  }
                  animation="slide-up"
                />
              </div>
            </div>
            <div className="creative-box">
              <div
                className="animated-arrow-btn"
                style={{ marginLeft: "10px", height: "50px", width: "50px" }}
              >
                <ImageAnimationUnfold src={brandIcon} alt="Image not found" />
              </div>{" "}
              {/* <a> */}
              <AnimatedText
                text={<h3 className="Color-Text">Technology</h3>}
                animation="slide-up"
              />
              {/* </a> */}
              <div>
                <AnimatedText
                  text={
                    <ul className="custom-arrow-bullet-point">
                      <li className="paragraph-text">
                        {" "}
                        Website design and Development
                      </li>
                      <li className="paragraph-text">
                        {" "}
                        E-commerce Website Development
                      </li>
                      <li className="paragraph-text">AR Filter</li>
                      <li className="paragraph-text"> Mobile Application</li>
                    </ul>
                  }
                  animation="slide-up"
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
              animation="slide-up"
            />
          </div>
          <AnimatedText
            text={<h2 className="taw-title">Buzz?</h2>}
            animation="slide-up"
          />
        </div>
      </div>

      <BlogSlider></BlogSlider>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <div>
              <AnimatedText
                text={
                  <h2 className="stroke" style={{ marginBottom: "-20px" }}>
                    Ready to redefine your{" "}
                  </h2>
                }
                animation="slide-up"
              />
              <AnimatedText
                text={
                  <>
                    <h2 className="brand-title">brand</h2>
                    <h2 className="exp-title"> experience?</h2>
                  </>
                }
                animation="slide-up"
              />
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
                    name="companyName"
                    value={formData.companyName}
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
              <div className="form-group">
                <label htmlFor="service"></label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-field mb-3"
                  required
                >
                  <option value="">Select</option>
                  <option value="Social Media Management (SMM)">
                    Social Media Management (SMM)
                  </option>
                  <option value="Search Engine Optimisation (SEO)">
                    Search Engine Optimisation (SEO)
                  </option>
                  <option value="Public Relation (PR)">
                    Public Relation (PR)
                  </option>
                  <option value="Paid Ads">Paid Ads</option>
                  <option value="Website Design and Developments">
                    Website Design and Developments
                  </option>
                  <option value="Creative Design">Creative Design</option>
                  <option value="Content Solutions">Content Solutions</option>
                  <option value="Influencer Marketing">
                    Influencer Marketing
                  </option>
                  <option value="Film & Photography">Film & Photography</option>
                </select>
              </div>
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
                    name="contact"
                    value={formData.contact}
                    onChange={handleContactChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field mb-2"
                    maxLength={10} // Ensure max length is set to 10
                    required
                  />
                }
                animation="slide-up"
              />
              <AnimatedText
  text={
    <label style={{ marginTop: "40px" }}>
      Here's something more to add
    </label>
  }
  animation="slide-up"
/>

              <AnimatedText
                text={
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
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
            <PopupModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              apiResponse={apiResponse}
            />
          </div>
        </form>
      </div>

      <ScrollToTopButton />
    </>
  );
}

export default Home;
