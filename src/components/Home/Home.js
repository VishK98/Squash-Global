import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../TopButton/TopButton";
import bigCircle from "../../assets/images/big-circle-down-arrow.png";
import gispiImage from "../../assets/images/gipsi-report.png";
import arrowMore from "../../assets/images/arrow-more.png";
import tasc from "../../assets/images/TASC.png";
import onHerLip from "../../assets/images/Whats-on-her-lip.jpg";
import worldwideOffice from "../../assets/images/tonic-worldwide-office.jpg";
import grid1 from "../../assets/images/grid-1.png";
import grid1Logo from "../../assets/images/gipsi-logo.png";
import grid2 from "../../assets/images/grid-2.png";
import grid2Logo from "../../assets/images/twip-logo.png";
import grid3 from "../../assets/images/grid-3.png";
import grid3Logo from "../../assets/images/tonic-amplifiy.svg";
import circularText from "../../assets/images/circular-text.png";
import IndiaClients from "../../assets/images/IndiaClients-bw-new.jpg";
import brandIcon from "../../assets/images/brand-icon.png";
import downArrow from "../../assets/images/small-circle-down-arrow.png";
import "./BlogSlider";
import BlogSlider from "./BlogSlider";
import PartnerSlider from "./PartnerSlider";

function Home() {
  const [selectedService, setSelectedService] = useState("selected");
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };
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
        <div className="container video-display">
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

      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="topslide">What’s Brewing at Squash Global?</h2>
            <h1 className="discover-text">
              Framing People Centric Experiences
            </h1>
            <p className="brew-text">
              Our marketing strategies go beyond{" "}
              <span className="text-highlight">
                With deep understanding of human behavior, we forge connection
                that helps
              </span>{" "}
              Brands to speak to their audience individually.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="outline_btn explorbtn position-relative"
              style={{ marginTop: "30px" }}
            >
              <i style={{ marginRight: "50px" }}>Explore</i>
              <span className="zoom-icon">
                <img src={arrowMore} alt="" className="zooming-image" />
              </span>
              <div className="zoom-overlay"></div>
            </a>
          </div>
          <div className="col-lg-7">
            <img
              style={{ width: "100%" }}
              src={gispiImage}
              alt="Career at Digital Marketing Agency"
            />
          </div>
        </div>
      </div>

      <section id="homeSectionThree ">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <div>
                <div className="title">
                  <h2 className="stroke">Pixels to </h2>
                </div>
                <div className="title bannertitle">
                  <h2 style={{ fontWeight: "bold" }}>People</h2>
                </div>
                <p className="brew-text">
                  Having Technology as an ally,{" "}
                  <mark className="text-highlight">
                    we design digital experiences that
                  </mark>{" "}
                  move brands closer to their vision.
                </p>
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
          <div className="row">
            <div className="work_list_img round_img col-lg-7 col-md-7 col-sm-12 col-12">
              <img
                style={{ height: "100%", width: "100%" }}
                src={onHerLip}
                alt="What’s on her Lip"
              />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex flex-column align-items-center responsive-text">
              <h3 style={{ fontWeight: "bold" }}>What's on the Lips</h3>
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex align-items-center">
                  <h2 style={{ fontWeight: "bold", marginRight: "10px" }}>
                    Explore{" "}
                  </h2>
                  <Link to="/blogDetails" style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "60px",
                        width: "60px",
                        borderRadius: "50px",
                        backgroundColor: "#fe504f",
                      }}
                    >
                      <h4 className="read-more">➟</h4>
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
              <h3 style={{ fontWeight: "bold" }}>What's on the TASC</h3>
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
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "60px",
                          width: "60px",
                          borderRadius: "50px",
                          backgroundColor: "#fe504f",
                        }}
                      >
                        <h4 className="read-more">➟</h4>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="work_list_img round_img col-lg-7 col-md-7 col-sm-12 col-12">
              <img
                style={{ height: "100%", width: "100%" }}
                src={tasc}
                alt="What’s on the TASC"
              />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 mt-3 d-flex flex-column align-items-center d-md-none">
              <h3 style={{ fontWeight: "bold" }}>What's on the TASC</h3>
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex align-items-center">
                  <h2 style={{ fontWeight: "bold", marginRight: "10px" }}>
                    Explore{" "}
                  </h2>
                  <Link to="/blogDetails" style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "60px",
                        width: "60px",
                        borderRadius: "50px",
                        backgroundColor: "#fe504f",
                      }}
                    >
                      <h4 className="read-more">➟</h4>
                    </div>
                  </Link>
                </div>
              </div>
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
          Weaving Narratives, Experiences and Connection.
        </h3>
        <h4 className="text-center">
          In a world saturated with information, we understand that your brand
          isn't just a product or service—it's a story waiting to be told.
        </h4>
        <br />
        <PartnerSlider rtl={true} />
        <div className="mt-3 mt-lg-5">
        <PartnerSlider rtl={false} />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section_title">
                <h2 className="mb-lg-4 stroke title">We're</h2>
                <div className="second_line_title bannertitle">
                  <h2 className="title bannertitle">Squash</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section_para p-lg-5 pl-0">
                <div className="topslide">
                  <p className="brew-text">
                    Squash Global is more than{" "}
                    <span className="text-highlight">
                      just a marketing agency.
                    </span>{" "}
                    We are the architects of brand experiences, designing
                    stories that resonate with the brand’s audience. At Squash,
                    we provide customize solutions and{" "}
                    <span className="text-highlight">
                      expertise to unique business needs making us the right
                      choice for start-ups and small to medium companies.
                    </span>{" "}
                    With us, you can build future ready brand, through an
                    integration of content, technology and media, using data
                    backed tools and practices.
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

      <section id="homeSectionFour" className="mt-lg-5 mt-3 ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="position-relative">
                <div>
                  <div className="topslide">
                    <h3 style={{ fontSize: "45px", textAlign: "center" }}>
                      Redefining Communication for Brands to Create More
                      Approachable Framework{" "}
                    </h3>
                  </div>
                </div>
                <div className=" mt-lg-4 mt-2">
                  <div className="brew-text">
                    We believe every brand carries a story and looking for the
                    optimum communication strategy to interact with their
                    audience. <span className="text-highlight">In the era of technology and artificial
                      intelligence, we design campaigns with human touch that
                      leaves a lasting impression.</span> With Squash, you can amplify
                    your brand’s communication making it more interactive and
                    people centric. This will not only generate leads but also
                    make your brand more relatable and problem solving to your
                    consumers. <span className="text-highlight">
                      Join us on a journey where marketing transcends
                      the ordinary and becomes a catalyst for connection,
                      creativity, and growth.
                    </span>
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
            <h2 className="text-lg-center stroke title">Specialist</h2>
            <div className="second_line_title bannertitle">
              <h2 className="title">Divisions</h2>
            </div>
          </div>
        </div>
        <p>
          A new age <mark className="text-highlight">marketing suite</mark> for
          modern-day experiences.
        </p>
        <div className="row">
          <div className="col-12">
            <div id="specialistDivisionsSlider" className="row">
              <div className="col-md-4">
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
                      Unique insight mining practice that uses a combination of
                      AI + HI to understand consumers better
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
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
              <div className="col-md-4">
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
                      Narrate impactful brand stories with hyper-personalised,
                      data driven videos for engagement at scale.
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
              <div className="col-md-4">
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
                      In partnership with <strong>SEW</strong>, the specialised
                      practice empowers utilities for enhanced outreach and
                      stronger customer connections.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
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

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 col-md-12">
            <div>
              <h2 className="specialty-text text-lg-center">Where Our </h2>
              <h2 className="specialty-text">Specialty </h2>
              <h2 className="text-lg-center specialty-title">
                Lies / Our Cup of Tea
              </h2>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="rotating-image text-center">
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
              <a>
                <h3>
                  Brand Discovery <br />
                  and Strategy
                </h3>
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
            <div style={{ paddingLeft: "80px", paddingTop: "20px" }}>
              <img src={brandIcon} alt="Brand Discovery and Strategy" />
              <a>
                <h3>
                  Brand Discovery <br />
                  and Strategy
                </h3>
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
          <div className="col-lg-6 col-md-12 col-12 ">
            <div>
              <img src={brandIcon} alt="Brand Discovery and Strategy" />
              <a>
                <h3>
                  Brand Discovery <br />
                  and Strategy
                </h3>
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
              <a>
                <h3>
                  Brand Discovery <br />
                  and Strategy
                </h3>
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
        <div className="col-12">
          <div className="title">
            <h2 className="stroke">What’s the </h2>
          </div>
          <div className="second_line_title bannertitle">
            <h2 className="title">Buzz?</h2>
          </div>
        </div>
      </div>

      <BlogSlider></BlogSlider>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <div>
              <h2 className="stroke">Ready to redefine your </h2>
              <div className="second_line_title bannertitle">
                <h2 className="text-lg-center title m-lg-auto">brand experience?</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="rotating-image text-center">
              <img src={circularText} alt="Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4" id="contactForm">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
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
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type here"
                autoComplete="off"
                className="form-field mb-lg-5"
                required
              />
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
              </label>{" "}
              <br />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Type here"
                autoComplete="off"
                className="form-field mb-lg-5"
                required
              />
              <div>
                <label htmlFor="service">Choose a service:</label>
                <select
                  type="dropdown"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Type here"
                  autoComplete="off"
                  className="form-field"
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
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
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
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type here"
                autoComplete="off"
                className="form-field mb-lg-5"
                required
              />
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
              </label>{" "}
              <br />
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="+91 9900000088"
                autoComplete="off"
                className="form-field mb-5"
                pattern="[0-9]{10}"
                required
              />
              <label>
                Here's something more to add{" "}
                <sup
                  style={{
                    color: "red",
                    marginLeft: "5px",
                    fontWeight: "bold",
                  }}
                >
                  *
                </sup>
              </label>{" "}
              <br></br>
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
            </div>
          </div>
          <div
            id="contactSubmitBtn"
            className="d-flex justify-content-center mt-lg-5"
          >
            <input type="submit" name="submit" value="Send it" class="submit" />
          </div>
        </form>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Home;
