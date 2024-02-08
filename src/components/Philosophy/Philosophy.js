import React from "react";
import "./Philosophy.css";
import AnimatedImage from '../Animations/ImageAnimation';
import AnimatedText from '../Animations/TextAnimation';
import ScrollToTopButton from '../TopButton/TopButton';
import philosophy from "../../assets/images/tonic-worldwide-philosophy.jpg";
import quotation from "../../assets/images/quotation-marks-svgrepo.png";
import yellowCircle from "../../assets/images/empty-yellow-circle.png";
import partyScene from "../../assets/images/party-scene.png";


function Philosophy() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="route-text">
              <ol class="breadcrumb route-text mt-3">
                <li>
                  <a
                    href="/"
                    style={{ color: "grey", textDecoration: "none" }}
                  >
                    <AnimatedText text="Home /" animation="slide-left" />
                  </a>
                </li>
                <li
                >
                  <AnimatedText text="&nbsp;About us" animation="slide-right" />
                </li>
              </ol>
            </div>
            <AnimatedText text="WE KNOW YOU, YOU KNOW US" animation="slide-left" className="aboutUs-heading" />
          </div>
        </div>
      </div>
      <div className="container pt-3">
        <div className="row">
          <div className="col-12">
            <AnimatedImage src={philosophy} alt="Image not found" />
          </div>
          <div
            className="col-lg-9 mt-4"
            style={{ margin: "auto" }}
          >
            <div className="mt-md-4 ">
              <span className="explorbtn  mt-4">
                <img
                  src={quotation}
                  alt="Quotation Mark"
                  className="quote-apos"
                  style={{ float: "left" }}
                />
                <AnimatedText text={<h2
                  className="ml-4 quote pt-4"
                  style={{ opacity: 1, fontWeight: "bold" }}
                >
                  Some
                  <mark className="text-highlight">
                    {" "}
                    painters transform{" "}
                  </mark>{" "}
                  the sun into a yellow spot, others
                  <mark className="text-highlight">
                    {" "}
                    transform a yellow <br />
                    spot into the sun.
                  </mark>
                </h2>} animation="slide-down" />
                <span className="quote-writer-name-icon">
                  <img src={yellowCircle} alt="yellow circle" />
                </span>
                <i className="quote-writer-name">Kumar Vishesh & Vishal Upadhyay 😃</i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <AnimatedText text={<p className=" mt-lg-4">
            We offer 360-degree digital marketing solutions to help you build your brand from the scratch. In this complex digital landscape, our team of creative and passionate young people build brands, digital experiences, and products for the companies of tomorrow.
            </p>} animation="slide-up" />
            <AnimatedText text={<p className=" mt-lg-4">
            Our guidance and bold imagination help the brands to challenge the industry and shape the future, every day. Squash is a perfect amalgamation of Creativity & Strategy and everything in between. With our vast experience and understanding, we can proudly say that we are not just International but multicultural too. 
            </p>} animation="slide-up" />
          </div>
          <div className="col-lg-6 col-12">
            <AnimatedImage src={partyScene} alt="Image not found" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 philosophy-details mt-5">
            <AnimatedText text={<p className=" mt-lg-4">
              <h3>WHY SQUASH?</h3>
              Squash believes in solving your problems rather than just answering them.
              <section>We never back down from taking any challenges, after all working hard is our best-defined nature. </section>
              <section>We pour our heart and soul to each and every project no matter the size is. </section>   
              <section>At Squash, there are no half measure. 'IFs' and 'BUTs" are not in our dictionary. </section>        
              <section>We first Assess, then Strategize and then Come up with the plan best suited for your Brand. </section>  
              <section>Squash breathe life into your Brand with meaningful innovation and creative communication.</section>
            </p>} animation="slide-down" />
            <AnimatedText text={<p className=" mt-lg-4">
              This is Squash Global - Where, like a shot of yellow in a ray of
              light, we see things a new.
            </p>} animation="slide-down" />
            <AnimatedText text={<h3 className=" mt-lg-4">
            WE ARE NOT JUST A TYPICAL AGENCY; WE ARE MORE THAN THAT
            </h3>} animation="slide-left" />
            <AnimatedText text={<p className=" mt-lg-4">
            Think of Squash as an Extension of your Team, sharing the same Dreams and same Goals.
            <section>We offer multi-dimensional marketing services to drive the attention and visibility your Brand needs</section>
            <section>Squash turns your ideas into reality so you can also build your business like a pro. </section>
            <section>With the vast and ever-evolving marketing trends, it is a challenge for Brands to keep up with the new technology and crazes. This is where our team comes into play. </section>
            <section>Our team of Creative and Passionate people will help you create the most effective marketing strategy to supply ideal number of consumer touch points to drive lead and sales.</section>
            <p1>Be it Media Planning or Buying, PR or Crisis Management, Creative, Content, Social Media, Search Engine Optimization and Management, Influencer Marketing, Video Production, Programmatic Advertising or more, we are here to cater to your needs and requirements in the most effective and long term way possible.</p1>
            </p>} animation="slide-down" />
          </div>
        </div>
      </div>

      <section id="" className="mt-lg-3 mt-3">
        <div className="container">
          <div className="position-relative phi-bottom-banner ">
            <div className="row p-5">
              <div className="col-md-7"></div>
              <div className="col-md-5 ">
                <AnimatedText text={<h2 className=" mt-lg-4 text-white">
                  Welcome to
                  <br />
                  Squash Global 2.0
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
