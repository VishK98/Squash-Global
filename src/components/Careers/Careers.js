import React from "react";
import image from "../../assets/images/career-in-tonic.jpg";
import downArrow from "../../assets/images/small-circle-down-arrow.png";
import "./Careers.css";

function Careers() {
  return (
    <>
      <section id="careerSectionOne">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
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
                      Careers
                    </li>
                  </ol>
                </div>
                <div className="inner_title hidden d-flex align-items-center justify-content-between flex-wrap careers-sec">
                  <h1 className="pr-lg-4 topslide story">
                    Your Story
                    <h1 className="d-md-inline-block d-inline-block start">
                      Starts here
                    </h1>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-4">
            <div className="row align-items-center pt-md-4">
              <div className="col-lg-7">
                <div className="inner_section_img position-relative hidden round_corner_img">
                  <div>
                    <img src={image} alt="Career at Digital Marketing Agency" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 topslide">
                <div className="section_text mt-4 mt-lg-0 pl-lg-4 pl-0">
                  <div className="working">
                    <h2 className="working">
                      <br />
                      Work with the biggest brand & brightest
                      <br />
                      minds
                    </h2>
                  </div>
                  <a href="#latestOpeningSection" className="explorbtn mt-lg-4">
                    <i className="joinUs" >Join Us</i>
                    <span >
                      <img style={{marginLeft: "15px"}} src={downArrow} alt="join us" />
                    </span>
                  </a>
                  <div className="hidden mt-lg-3">
                    <p>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
