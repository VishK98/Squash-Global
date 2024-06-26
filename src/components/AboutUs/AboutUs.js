import React from "react";
import "./AboutUs.css";
import AnimatedText from "../Animations/TextAnimation";
import ScrollToTopButton from "../TopButton/TopButton";
import AboutUs from "../../assets/images/taw-about-banner1.png";
import partyScene from "../../assets/images/taw-about-banner2.png";
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";
import bottomBanner from "../../assets/images/taw-about-banner3.png";
import { Helmet } from "react-helmet";

function Philosophy() {
  return (
    <>
      <Helmet>
        <title>Know More About - The Agency Way (TAW)</title>
        <meta
          name="description"
          content="Read the secrets of success with Know More About - The Agency Way (TAW). Dive into our innovative strategies and expert insights to propel your business forward."
        />
        <link rel="canonical" href="https://taw.agency/about-us" />
      </Helmet>
      <div className="full-screen-image">
        <ImageAnimationUnfold src={AboutUs} alt="Image not found" />
      </div>

      <div className="container-fluid mt-lg-4 mt-3">
        <div className="row">
          <div className="col-lg-6">
            <div style={{ marginBottom: "-18px" }}>
              <h1 className="know-text">
                <span>
                  <AnimatedText text="We Know You !" animation="slide-up" />
                </span>
                <span className="animated-know-text">
                  <AnimatedText text="You Know Us !" animation="slide-up" />
                </span>
              </h1>
            </div>
            <AnimatedText
              text={
                <h3 className="age-text">
                  In this age of automated conversations, we noticed that the
                  ‘human touch’ had sneaked out while no one was looking.
                </h3>
              }
              animation="slide-left"
            />
            <AnimatedText
              text={
                <p className="paragraph-text mt-lg-4">
                  TAW-the agency way represents the gap between what the Brands
                  produce and what the Consumers actually want. We offer
                  360-degree digital marketing solutions to help you build your
                  brand from the scratch. In this complex digital landscape, our
                  team of creative and passionate young people build brands,
                  digital experiences, and products for the companies of
                  tomorrow.
                </p>
              }
              animation="slide-up"
            />
          </div>
          <div className="col-lg-6 col-12">
            <ImageAnimationUnfold src={partyScene} alt="Image not found" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12  mt-5">
            <AnimatedText
              text={
                <p className=" mt-lg-4">
                  <h2 className="Whytaw-text" style={{ marginLeft: "16px" }}>
                    WHY TAW?
                  </h2>

                  <p
                    className="paragraph-text"
                    style={{ marginLeft: "20px", marginRight: "40px" }}
                  >
                    TAW believes in solving your problems rather than just
                    answering them. We never back down from taking any
                    challenges, after all working hard is our best-defined
                    nature. We pour our heart and soul to each and every project
                    no matter the size is. At TAW, there are no half measure.
                    'IFs' and 'BUTs" are not in our dictionary. We first Assess,
                    then Strategize and then Come up with the plan best suited
                    for your Brand. TAW breathe life into your Brand with
                    meaningful innovation and creative communication.
                  </p>
                </p>
              }
              animation="slide-down"
            />

            <AnimatedText
              text={
                <h3
                  className="about-text mt-lg-4"
                  style={{ marginLeft: "16px" }}
                >
                  WE ARE NOT JUST A TYPICAL AGENCY: WE ARE MORE THAN THAT
                </h3>
              }
              animation="slide-down"
            />

            <AnimatedText
              text={
                <p
                  className="paragraph-text mt-lg-4"
                  style={{ marginLeft: "20px", marginRight: "40px" }}
                >
                  Think of TAW as an Extension of your Team, sharing the same
                  Dreams and same Goals. We offer multi-dimensional marketing
                  services to drive the attention and visibility your Brand
                  needs. TAW turns your ideas into reality so you can also build
                  your business like a pro. With the vast and ever-evolving
                  marketing trends, it is a challenge for Brands to keep up with
                  the new technology and crazes. This is where our team comes
                  into play.
                </p>
              }
              animation="slide-down"
            />
            <AnimatedText
              text={
                <p
                  className="paragraph-text mt-lg-4 mt-3"
                  style={{ marginLeft: "20px", marginRight: "40px" }}
                >
                  Our team of Creative and Passionate people will help you
                  create the most effective marketing strategy to supply ideal
                  number of consumer touch points to drive lead and sales. Be it
                  Media Planning or Buying, PR or Crisis Management, Creative,
                  Content, Social Media, Search Engine Optimization and
                  Management, Influencer Marketing, Video Production,
                  Programmatic Advertising or more, we are here to cater to your
                  needs and requirements in the most effective and long term
                  ways to possible.
                </p>
              }
              animation="slide-down"
            />
          </div>
        </div>
      </div>

      <section className="mt-5 mb-3 position-relative">
        <svg className="taw-animated-text" viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            The Agency Way
          </text>
        </svg>
        <img className="img-fluid" src={bottomBanner} alt="Bottom Banner" />
      </section>
      <ScrollToTopButton />
    </>
  );
}

export default Philosophy;
