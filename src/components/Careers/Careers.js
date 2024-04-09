import React, { useState, useEffect, useRef } from "react";
import "./Careers.css";
import ScrollToTopButton from "../TopButton/TopButton";
import image from "../../assets/images/taw-careers-banner1.png";
import team from "../../assets/images/taw-careers-banner2.png";
import teamBreak from "../../assets/images/taw-careers-banner3.png";
import jobPost from "../../assets/images/taw-hiring.png";
import AnimatedText from "../Animations/TextAnimation";
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";
import { Helmet } from "react-helmet";
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
      title: "Business Development Manager",
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
        "Agency experience is preferred.",
      ],
    },
  ];

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
    formRef.current.scrollIntoView({ behavior: "smooth" });
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

  const handleFileChange = (e) => {
    // file change logic here...
  };

  const handleContactChange = (event) => {
    // contact change logic here...
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    role: "",
    about: "",
    cv: null,
  });

  const handleSubmit = (event) => {
    // form submit logic here...
  };

  const handleChange = (e) => {
    // form change logic here...
  };

  return (
    <>
      <Helmet>
        <title>Careers - The Agency Way (TAW)</title>
        <meta
          name="description"
          content="Chart your path to success with Careers - The Agency Way (TAW). Explore exciting opportunities and join a team committed to innovation and excellence."
        />
        <link rel="canonical" href="https://taw.agency/careers" />
      </Helmet>
      <div className="full-screen-image">
        <ImageAnimationUnfold
          src={image}
          alt="Image not found"
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </div>
      <div className="container-fluid mt-lg-4 mt-3 p-4">
        <div className="start-heading">
          <AnimatedText
            text={<h1>Start your journey in TAW</h1>}
            animation="slide-up"
          />
        </div>
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="career-sub-heading">
              <h2>Work with a dynamic team and creative minded people.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-4">
        <AnimatedText
          text={
            <h3 className="At-Taw-text">
              At TAW, we believe in growing together.
            </h3>
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
                  At <span className="career-sub-heading">TAW</span> we foster
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
                    <a className="mail-text" href="mailto:hr@theagencyway.co.in">
                      hr@theagencyway.co.in
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
                className={`card ${
                  selectedJobIndex === index ? "flipped" : ""
                }`}
              >
                <div className="text-center mb-2">
                  <img
                    className="img-fluid animated-image"
                    src={job.url}
                    alt="card img"
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
                  <p style={{ fontWeight: "500" }}>Salary : {job.salary}</p>
                  <p style={{ fontWeight: "500" }}>
                    Posted On : {job.postDate}
                  </p>
                </div>
                <div className="job-description">
                  <ul>
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  <h5>Requirements</h5>
                  <ul>
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                  <button
                    id={`applyNowButton-${index}`}
                    className="btn btn-primary"
                    onClick={() => handleDetailsClick(index)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedJobIndex !== null && (
          <div className="container mt-4" ref={applyNowRef}>
            <button
              className="btn btn-primary mb-3"
              onClick={() => handleDetailsClick(null)}
            >
              Close
            </button>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Role Applying For"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Tell us about yourself..."
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="cv">Upload CV:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="cv"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Careers;
