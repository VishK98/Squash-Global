import React from "react";
import "./Philosophy.css";
import philosophy from "../../assets/images/tonic-worldwide-philosophy.jpg";
import quotation from "../../assets/images/quotation-marks-svgrepo.png";
import yellowCircle from "../../assets/images/empty-yellow-circle.png";
import partyScene from "../../assets/images/party-scene.png";


function Philosophy() {
  return (
    <>
      <section id="">
        <div>
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="route-text">
                  <ol class="breadcrumb bg-transparent px-0 route-text mt-4">
                    <li class="breadcrumb-item">
                      <a
                        href="/"
                        style={{ color: "grey", textDecoration: "none" }}
                      >
                        Home / 
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page" style={{marginLeft: "8px", color: "grey"}}>
                      Philosophy
                    </li>
                  </ol>
                </div>
                <div class="inner_title mb-4 pb-1">
                  <div class="topslide">
                    <h1 class="philosophys-h2">
                      Built on what we all are made of!
                      <br />
                      True human potential
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="" className="pt-0 service-video-section">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="section_img service-video hidden position-relative mt-lg-4 video-btn"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/yAoLSRbwxL8"
                  data-target="#video_pop"
                >
                  <div className="imagereveal">
                    <img
                      src={philosophy}
                      alt="Tonic Digital Agency Philosophy"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-9 mt-4 pl-phi-quote pl-5"
                style={{ margin: "auto" }}
              >
                <div className="mt-md-4 ">
                  <span className="outline_btn explorbtn sow-btn hidden zoomAnimation mt-4">
                    <img
                      src={quotation}
                      alt="Quotation Mark"
                      className="quote-apos"
                      style={{ float: "left" }}
                    />
                    <h2
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
                    </h2>
                    <span className="quote-writer-name-icon">
                      <img src={yellowCircle} alt="yellow circle" />
                    </span>
                    {/* <i className="quote-writer-name">Pablo Picasso</i> */}
                    <i className="quote-writer-name">Kumar Vishesh & Vishal Upadhyay 😃</i>

                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="" className="mt-lg-5 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="topslide pr-lg-5 pr-0 pr-md-0 philosophy-details">
                <h3>
                  In this age of automated conversations, we noticed that the ‘
                  <span className="text-highlight">human touch</span>’ had
                  sneaked out while no one was looking.
                </h3>
                <p className="topslide mt-lg-4">
                  Everyone has the Siris, Bots and the AI. What they don’t have
                  is a naturally intuitive and personal connection with their
                  customers; a coupling that could turn technology & creatives
                  on their head.
                </p>
                <p className="topslide mt-lg-4">
                  We've taken the leap of faith and of distances to build a
                  highly personalized & nuanced approach to the brands we work
                  with, renewed with a global perspective.
                </p>
                <p className="topslide mt-5 mt-lg-4">
                  Opening global offices isn't just about crossing geographical
                  boundaries for us. It brings with it a cross pollination of
                  cultures, ideas and perspectives. Our endeavour is to bring a
                  mix of trend spotting and cultural insights unique to your
                  brand and audience.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="hidden">
                <div className="imagereveal round_corner_img">
                  <img src={partyScene} alt="Tonic party" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 philosophy-details mt-5 mt-lg-0">
              <p className="topslide mt-lg-4">
                That’s exactly why we are committing our imaginations to ‘a
                humans before boundaries’ approach. We believe that if you look
                carefully enough, you’ll find a great idea in just about
                everything.
              </p>
              <p className="topslide mt-lg-4">
                This is Tonic 2.0 - Where, like a shot of yellow in a ray of
                light, we see things anew.
              </p>
              <h3 className="topslide mt-lg-4">People make us what we are.</h3>
              <p className="topslide mt-lg-4">
                It is about delivering satisfaction, and not business results. A
                thought that turns technology & creatives on their head. Making
                people experience what you set out to achieve – enhancement and
                elevation of the human spirit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="" className="mt-lg-4 mt-4 pt-lg-0 pt-0">
        <div className="container pb-5">
          <div className="position-relative phi-bottom-banner topslide">
            <div className="row p-5">
              <div className="col-md-7"></div>
              <div className="col-md-5 story-title">
                <h2 className="mt-4 text-white topslide">
                  Welcome to
                  <br />
                  Squash Global 2.0
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Philosophy;
