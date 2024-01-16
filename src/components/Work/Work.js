import React from "react";
import "./Work.css";
import work1 from "../../assets/images/work1.png";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.png";
import work4 from "../../assets/images/work4.png";
import work5 from "../../assets/images/work5.png";
import work6 from "../../assets/images/work6.png";
import work7 from "../../assets/images/work7.png";
import work8 from "../../assets/images/work8.png";
import work9 from "../../assets/images/work9.png";
import work10 from "../../assets/images/work10.png";
import work11 from "../../assets/images/work11.png";
import work12 from "../../assets/images/work12.png";

import downArrow from "../../assets/images/small-circle-more-arrow.png";

function Work() {
  const workImageData = [
    {
      url: work1,
    },
    {
      url: work2,
    },
    {
      url: work3,
    },
    {
      url: work4,
    },
    {
      url: work5,
    },
    {
      url: work6,
    },
    {
      url: work7,
    },
    {
      url: work8,
    },
    {
      url: work9,
    },
    {
      url: work10,
    },
    {
      url: work11,
    },
    {
      url: work12,
    },
  ];
  return (
    <section id="industriesSectionOne">
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="route-text">
                <ol class="breadcrumb bg-transparent px-0 route-text mt-4">
                  <li>
                    <a
                      href="/"
                      style={{ color: "grey", textDecoration: "none" }}
                    >
                      Home /
                    </a>
                  </li>
                  <li
                    class="breadcrumb-item active"
                    aria-current="page"
                    style={{ marginLeft: "8px", color: "grey" }}
                  >
                    Work
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h4 className="box-title">
            Guided by our craft and steered by insight-driven strategy, we offer
            integrated solutions that delight and disrupt in equal parts.
          </h4>
          <div
            className="row"
            style={{ justifyContent: "space-between", marginRight: "5px" }}
          >
            {workImageData.map((image, index) => (
              <div
                className="col-lg-5 col-md-6 col-12 mt-3 mb-4"
                key={index}
                style={{ position: "relative" }}
              >
                <img className="work-box-img" src={image.url} alt="FMGC" />
                <img
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    marginBottom: "-25px", 
                    marginRight: "30px"
                  }}
                  src={downArrow}
                  alt="join us"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
