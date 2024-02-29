import React from "react";
import "./AboutUs.css";
import AnimatedText from '../Animations/TextAnimation';
import ScrollToTopButton from '../TopButton/TopButton';
import AboutUs from "../../assets/images/Banner About us.jpg";
import partyScene from "../../assets/images/about us middle image.png";
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";


function Philosophy() {
  return (
    <>
    <div className="full-screen-image">
            <ImageAnimationUnfold src={AboutUs} alt="Image not found" />
          </div>

      <div className="container-fluid mt-lg-4 mt-3">
 
        <div className="row">
          <div className="col-lg-6">
          <AnimatedText text="We Know You ! You Know Us !!" animation="slide-left" className="about-text" />

            <AnimatedText text={<h3 className="age-text">In this age of automated conversations, we noticed that the ‘<span className="text-highlight">human touch </span>’ had
              sneaked out while no one was looking.</h3>} animation="slide-left" />

            <AnimatedText text={<p className="paragraph-text mt-lg-4">
              TAW-the agency ways represents the gap between what the Brands produce and what the Consumers actually want. We offer 360-degree digital marketing solutions to help you build your brand from the scratch. In this complex digital landscape, our team of creative and passionate young people build brands, digital experiences, and products for the companies of tomorrow.
            </p>} animation="slide-up" />
            <AnimatedText text={<p className="paragraph-text mt-lg-4">
              Our guidance and bold imagination help the brands to challenge the industry and shape the future, every day. TAW is a perfect amalgamation of Creativity & Strategy and everything in between. With our vast experience and understanding, we can proudly say that we are not just International but multicultural too.
            </p>} animation="slide-up" />
          </div>
          <div className="col-lg-6 col-12">
            <ImageAnimationUnfold src={partyScene} alt="Image not found" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12  mt-5">
            <AnimatedText text={<p className=" mt-lg-4">
              <h3 className="about-text">WHY TAW?</h3>
              <p className="paragraph-text">TAW believes in solving your problems rather than just answering them.
                We never back down from taking any challenges, after all working hard is our best-defined nature.
                We pour our heart and soul to each and every project no matter the size is.
                At TAW, there are no half measure. 'IFs' and 'BUTs" are not in our dictionary.
                We first Assess, then Strategize and then Come up with the plan best suited for your Brand.
                TAW breathe life into your Brand with meaningful innovation and creative communication.
              </p>
            </p>} animation="slide-down" />
       
            <AnimatedText text={<h3 className="about-text mt-lg-4">
              WE ARE NOT JUST A TYPICAL AGENCY : WE ARE MORE THAN THAT
            </h3>} animation="slide-down" />
            <AnimatedText text={<p className="paragraph-text mt-lg-4">
              Think of TAW as an Extension of your Team, sharing the same Dreams and same Goals.
              We offer multi-dimensional marketing services to drive the attention and visibility your Brand needs.
              TAW turns your ideas into reality so you can also build your business like a pro.
              With the vast and ever-evolving marketing trends, it is a challenge for Brands to keep up with the new technology and crazes. This is where our team comes into play.
            </p>} animation="slide-down" />
            <AnimatedText text={<p className="paragraph-text mt-lg-4 mt-3">
              Our team of Creative and Passionate people will help you create the most effective marketing strategy to supply ideal number of consumer touch points to drive lead and sales.
              Be it Media Planning or Buying, PR or Crisis Management, Creative, Content, Social Media, Search Engine Optimization and Management, Influencer Marketing, Video Production, Programmatic Advertising or more, we are here to cater to your needs and requirements in the most effective and long term way possible.
            </p>} animation="slide-down" />
          </div>
        </div>
      </div>

      <section id="" className="mt-lg-3 mt-3">
        <div className="container-fluid">
          <div className="position-relative phi-bottom-banner ">
            <div className="row p-5">
              <div className="col-md-7"></div>
              <div className="col-md-5 ">
                <AnimatedText text={<h2 className=" mt-lg-4 text-white">
                  Welcome to
                  <br />
                  TAW-the agency ways 2.0
                </h2>} animation="slide-right" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
}

export default Philosophy;
