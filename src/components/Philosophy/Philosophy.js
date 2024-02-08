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
                <li>
                  <AnimatedText text="&nbsp;About us" animation="slide-right" />
                </li>
              </ol>
            </div>
            <AnimatedText text="Built on what we all are  made of! True human potential" animation="slide-left" className="aboutUs-heading" />
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
            <AnimatedText text={<h3>In this age of automated conversations, we noticed that the ‘<span className="text-highlight">human touch </span>’ had
              sneaked out while no one was looking.</h3>} animation="slide-left" />
            <AnimatedText text={<p className=" mt-lg-4">
              Everyone has the Siris, Bots and the AI. What they don’t have
              is a naturally intuitive and personal connection with their
              customers; a coupling that could turn technology & creatives
              on their head.
            </p>} animation="slide-up" />
            <AnimatedText text={<p className=" mt-lg-4">
              We've taken the leap of faith and of distances to build a
              highly personalized & nuanced approach to the brands we work
              with, renewed with a global perspective.
            </p>} animation="slide-up" />
            <AnimatedText text={<p className=" mt-lg-4">
              Opening global offices isn't just about crossing geographical
              boundaries for us. It brings with it a cross pollination of
              cultures, ideas and perspectives. Our endeavour is to bring a
              mix of trend spotting and cultural insights unique to your
              brand and audience.
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
              That’s exactly why we are committing our imaginations to ‘a
              humans before boundaries’ approach. We believe that if you look
              carefully enough, you’ll find a great idea in just about
              everything.
            </p>} animation="slide-down" />
            <AnimatedText text={<p className=" mt-lg-4">
              This is Squash Global - Where, like a shot of yellow in a ray of
              light, we see things a new.
            </p>} animation="slide-down" />
            <AnimatedText text={<h3 className=" mt-lg-4">
              People make us what we are.
            </h3>} animation="slide-left" />
            <AnimatedText text={<p className=" mt-lg-4">
              It is about delivering satisfaction, and not business results. A
              thought that turns technology & creatives on their head. Making
              people experience what you set out to achieve – enhancement and
              elevation of the human spirit.
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
