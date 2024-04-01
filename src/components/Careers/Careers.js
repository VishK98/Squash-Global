import React, { useState, useEffect, useRef } from "react";
import "./Careers.css";
import ScrollToTopButton from "../TopButton/TopButton";
import image from "../../assets/images/Banner Careers.png";
import downArrow from "../../assets/images/Icons/-down-arrow.png";
import team from "../../assets/images/Career Section Middle Banner.png";
import teamBreak from "../../assets/images/Career Section Bottom Banner.png";
import jobPost from "../../assets/images/hiring.png";
import AnimatedText from "../Animations/TextAnimation";
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";

function Careers() {
  const jobData = [
    {
      url: jobPost,
      title: "Account Executive",
      location: "Gurugram",
      experience: "2 years",
      salary: "2.4-4.8 LPA",
      postDate: "15/03/2024",
      responsibilities: [
        " Understand brand sentiment, requirements, guidelines and TG Reference impactful campaigns, creative ideas that can be adapted Effectively execute and manage accounts assigned, jointly strategize for campaigns and take care of end-to-end client co-ordination , Manage inter-team co-ordination to ensure deliverables are met",
        "Communicate seamlessly with clients over calls and at meetings , Establish an in-depth understanding of each platform and writing innovative/ creative content based on the brand requirement and consumer insights as per the brand tonality , Proactively plan for content based on the festive and marketing calendarAttend live events, cover the event schedule, prepare content at the event and post the same in real time",
        "Work on monthly reports, daily JSR generation and ensure the same are sent out on time.",
      ],
      requirements: [
        "Bachelor's degree in a relevant field",
        "Strong written and verbal communication skills",
        "Strong organizational skills",
        "Proficiency in Microsoft Office",
      ],
    },
    {
      url: jobPost,
      title: "SEO Manager",
      location: "Gurugram",
      experience: "2-5 years",
      salary: "4-5 LPA",
      postDate: "15/03/2024",
      responsibilities: [
        "Implement and develop new SEO strategies. This includes conducting keyword research, analysing competitor websites, and optimizing website content and structure. Work with teams to drive SEO in content creation and programming. This means ensuring that all new content is optimized for search engines and that SEO is a priority in the overall marketing strategy. Staying up to date with the latest Google Algorithm changes. This is essential for ensuring that the website remains competitive in search results.",
        "Staying up to date with the latest Google Algorithm changes. This is essential for ensuring that the website remains competitive in search results. Recommend changes to website architecture, content, linking and other factors to improve SEO positions for target keywords. This involves making changes to the website that will help it rank higher for specific keywords. Work around content development & off-page strategies with the team & clients Measuring the ROI and success of the website. This includes tracking website traffic, leads, and sales to determine the effectiveness of SEO efforts. Execute tests, collect and analyse data and results, identify trends and insights in order to achieve maximum ROI Should be comfortable with word documents, presentations & excel sheets Track, report, and analyse website analytics Should understand the financial eco-system of the SEO process to drive more business' growth and success for the organization.",
        "Familiarity with some of the top content management systems like – WordPress, Shopify, Magento etc. Explore new industry tools & insights regularly In points",
      ],
      requirements: [
        "Proven work experience in SEO field, Knowledge of ranking factors and search engine algorithms, Demonstrate excellent keyword research techniques.",
        "Strong organizational and communication skills",
        "Ability to work independently or in a team environment as and when required.",
        "Ability to work Multitask",
        "Strong analytical skills",
      ],
    },
    {
      url: jobPost,
      title: "Buisness Devlopment Manager",
      location: "Gurugram",
      experience: "2-5 years",
      salary: "2.5-6 LPA",
      postDate: "15/03/2024",
      responsibilities: [
        "An active listener with compelling sales personality, and a hunger to chase and close new business from cold calls and inbound warm leads. Ability to flourish with minimal guidance, be proactive, and handle uncertainty. Work with the strategy team to develop proposals that speak to the client needs, concerns, and objectives.",
        "Prepare and present monthly, quarterly sales activity and performance reports Meet potential clients by growing, maintaining, and leveraging your network Handle objections by clarifying, emphasising agreements/facts/objectives, and working through differences to a positive conclusion Participating in and Leading brainstorms for new business opportunities Demonstrate a thorough understanding of business and strategic marketing. Can ace multitasking and is looking for an enriching and challenging role",
        "Giving attention to detail and accuracy of work should be your thing. Monitor Digital & New Media industry trends and competitor offerings to identify potential business avenues and improve current offerings Professional approach to time, costs and deadline. Maintaining and deepening relationships with existing clients.",
      ],
      requirements: [
        "Excellent with pitch presentation skills",
        "Experience in selling integrated digital marketing services (Websites, SEO, Social Media, Paid Media, Public Relation,ORM, Production, Content Marketing, Creative, etc.)",
        "Someone who can sneak into any conversation with mind-blowing industry insights.",
        "Agency experience is preferred.",      ],
    },
  ];

  const [selectedService, setSelectedService] = useState("selected");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };
  const handleFileChange = (e) => {
    const fileName = e.target.files[0].name;
    document.getElementById("file-upload-label").textContent = fileName;
    document.getElementById("file-upload-close").style.display = "inline";
    handleChange(e);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    contactNumber: "",
    about: "",
    service: "",
    resume: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
    } else {
      console.log("Form is not valid");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const validateForm = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.state.trim() !== "" &&
      formData.contactNumber.trim() !== "" &&
      formData.about.trim() !== "" &&
      formData.service.trim() !== "" &&
      formData.resume !== null
    );
  };

  const [selectedJobIndex, setSelectedJobIndex] = useState(false);
  const applyNowRef = useRef(null);
  const formRef = useRef(null);
  const closeRef = useRef(null);

  const handleApplyNowClick = () => {
    // Scroll to the form section
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleCloseClick = () => {
    // Scroll to the form section
    closeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDetailsClick = (index) => {
    setSelectedJobIndex((prevIndex) => (prevIndex === index ? null : index));

    if (selectedJobIndex !== index) {
      setTimeout(() => {
        const applyNowButton = document.getElementById(
          `applyNowButton-${index}`
        );
        if (applyNowButton && applyNowButton.offsetParent !== null) {
          applyNowButton.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  useEffect(() => {
    if (selectedJobIndex && applyNowRef.current) {
      applyNowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedJobIndex]);

  return (
    <>
      <div className="full-screen-image">
        <ImageAnimationUnfold
          src={image}
          alt="Image not found"
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </div>
      <div className="container-fluid mt-lg-4 mt-3 p-4">
        <div class="start-heading">
          <AnimatedText
            text={<h1>Start your journey in TAW</h1>}
            animation="slide-up"
          />
        </div>
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-12">
            <div class="career-sub-heading">
              <h1>Work with a dynamic team and creative minded people.</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-4">
        <AnimatedText
          text={
            <h1 className="At-Taw-text">
              At TAW, we believe in growing together.
            </h1>
          }
          animation="slide-up"
        />
      </div>
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-12 col-sm-12 mt-3">
            <AnimatedText
              text={
                <h3 className="color-text">
                  Where ideas thrive and turn that idea into reality
                </h3>
              }
              animation="slide-left"
            />
            <AnimatedText
              text={
                <p className="paragraph-text mt-3">
                  At <span class="career-sub-heading">TAW</span> we foster
                  collaboration, innovation and creative minds to explore
                  limitless possibilities. If you are someone who wants to be a
                  part of the next big thing in the marketing and advertising
                  industry,
                </p>
              }
              animation="slide-left"
            />
            <AnimatedText
              text={
                <p
                  className="paragraph-text mt-3"
                  style={{ fontWeight: "bold" }}
                >
                  Write to us at{" "}
                  <span>
                    <a className="mail-text" href="mailto:hr@taw.agency">
                      hr@taw.agency
                    </a>
                  </span>
                </p>
              }
              animation="slide-left"
            />
          </div>
          <div className="col-lg-7 col-md-7 col-12 col-sm-12 mt-3 mb-1 ">
            <div>
              <ImageAnimationUnfold src={team} alt="Image not found" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4 mb-3 p-4">
        <AnimatedText
          text={
            <h2 className="color-text" style={{ fontWeight: "bold" }}>
              Life at The Agency Way
            </h2>
          }
          animation="slide-left"
        />
      </div>
      <ImageAnimationUnfold src={teamBreak} alt="Image not found" />
      <div className="container-fluid p-4">
        <h3 className="Color-Text">Latest Openings</h3>
        <div className="row" ref={closeRef}>
          {jobData.map((job, index) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 mt-4 col-lg-4"
              key={index}
            >
              <div
                className={`card ${selectedJobIndex === index ? "flipped" : ""
                  }`}
              >
                <div className="text-center mb-2">
                  <img
                    className="img-fluid animated-image"
                    src={job.url}
                    alt="card image"
                  />
                  <h4 className="card-title mt-3">{job.title}</h4>
                  <div className="row" style={{ marginLeft: "0px" }}>
                    <div className="col-6">
                      <p style={{ fontWeight: "500" }}>
                        Location : {job.location}
                      </p>
                    </div>
                    <div className="col-6">
                      <p style={{ fontWeight: "500" }}>
                        Experience : {job.experience}
                      </p>
                    </div>
                  </div>
                  <div className="row" style={{ marginLeft: "0px" }}>
                    <div className="col-6">
                      <p style={{ fontWeight: "500" }}>
                        Salary : {job.salary}
                      </p>
                    </div>
                    <div className="col-6">
                      <p style={{ fontWeight: "500" }}>
                        Posted on : {job.postDate}
                      </p>
                    </div>
                  </div>
                  <button
                    ref={applyNowRef}
                    className="apply-now-btn mt-3 mb-2"
                    onClick={() => handleDetailsClick(index)}
                  >
                    {selectedJobIndex === index ? "Close" : "Details"}
                  </button>
                </div>
                <div
                  className="back"
                  style={{
                    display: selectedJobIndex === index ? "block" : "none",
                  }}
                >
                  <div id={`applyNowButton-${index}`} className="card-body">
                    <h4 className="card-title text-center">{job.title}</h4>
                    <p style={{ fontWeight: "bold" }}>Responsibilities</p>
                    <ul className="card-text" style={{ marginLeft: "15px" }}>
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                    <p style={{ fontWeight: "bold" }}>Requirements</p>
                    <ul className="card-text" style={{ marginLeft: "15px" }}>
                      {job.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                    <div
                      className="row "
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <button
                        className="apply-now-btn mt-3"
                        onClick={() => {
                          handleDetailsClick(index);
                          handleApplyNowClick();
                        }}
                      >
                        Apply Now
                      </button>
                      <button
                        onClick={() => {
                          handleCloseClick(index);
                          handleDetailsClick(index);
                        }}
                        className="apply-now-btn mt-3"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container " ref={formRef}>
        <div className="row">
          <div
            className="career-box col-lg-4 col-md-4 col-sm-12 col-12"
            ref={formRef}>
            <AnimatedText
              text={
                <h4
                  className="welove-text content-box-text mb-5"
                >
                  We love people with ideas & the thirst to see that idea
                  through.
                </h4>
              }
              animation="slide-up"
            />
            <AnimatedText
              text={
                <h4 className="welove-text content-box-text">
                  If you think you can match up to our challenge, give us a
                  shout & we will make it work.
                </h4>
              }
              animation="slide-up"
            />
          </div>

          <div className="col-lg-8 col-md-8 col-sm-12 col-12 form-mobile mt-3">
            <div id="contactForm">
              <form onSubmit={handleSubmit}>
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
                      className="form-field mb-3"
                      required
                    />
                  }
                  animation="slide-up"
                />

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
                      className="form-field "
                      required
                    />
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  className="mt-2"
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
                      className="form-field mb-3"
                      pattern="[0-9]{10}"
                      required
                    />
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <label>
                      Role applying for
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
                      <option value="selected">Select role</option>
                      <option value="Jr. Project Manager">
                        Jr. Project Manager
                      </option>
                      <option value="Account Management">
                        Account Management
                      </option>
                      <option value="Associate Creative Director">
                        Associate Creative Director
                      </option>
                      <option value="Creative Supervisor">
                        Creative Supervisor
                      </option>
                      <option value="Scriptwriter">Scriptwriter</option>
                      <option value="SEO Technical Lead">
                        SEO Technical Lead
                      </option>
                    </select>
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <label>
                      Write something about yourself
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
                      name="about"
                      value={formData.about}
                      onChange={handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="form-field mb-3"
                      required
                    />
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <label>
                      Attach your resume here
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
                  animation="sldie-up"
                />
                <AnimatedText
                  text={
                    <input
                      id="file-upload"
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                      className="form-field"
                    />
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <label
                      htmlFor="file-upload"
                      className="custom-file-upload"
                      style={{ color: "grey", marginRight: "5px" }}
                      id="file-upload-label"
                    >
                      No file chosen
                    </label>
                  }
                  animation="slide-up"
                />
                <span
                  id="file-upload-close"
                  onClick={() => {
                    document.getElementById("file-upload").value = "";
                    document.getElementById("file-upload-label").textContent =
                      "No file chosen";
                    document.getElementById("file-upload-close").style.display =
                      "none";
                  }}
                  style={{ display: "none", cursor: "pointer" }}
                >
                  &#x2715;
                </span>
                <AnimatedText
                  text={
                    <div className="d-flex justify-content-center mt-4 mb-3">
                      <input
                        type="submit"
                        name="submit"
                        value="Send it"
                        className="submit"
                      />
                    </div>
                  }
                  animation="fade-in"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Careers;
