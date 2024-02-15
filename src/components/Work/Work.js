import React from "react";
import "./Work.css";
import ScrollToTopButton from '../TopButton/TopButton';
import client1 from "../../assets/images/clients/client-1.png";
import client2 from "../../assets/images/clients/client-2.png";
import client3 from "../../assets/images/clients/client-3.png";
import client4 from "../../assets/images/clients/client-4.png";
import client5 from "../../assets/images/clients/client-5.png";
import client6 from "../../assets/images/clients/client-6.png";
import client7 from "../../assets/images/clients/client-7.png";
import client8 from "../../assets/images/clients/client-8.png";
import ourClients from "../../assets/images/our-clients.png";
import squashVideo from "../../assets/squash-video.mp4";
import AnimatedText from '../Animations/TextAnimation';
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";
import ImageAnimationFade from "../Animations/ImageAnimationFade";



function Work() {
  const clientImage = [client1, client2, client3, client4, client5, client6, client7, client8, client2, client3, client4, client5, client6, client7, client1, client3];

  return (
    <>
    <div>
          <ImageAnimationUnfold src={ourClients} alt="Image not found" />
        </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div class="route-text">
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <AnimatedText text={<h4 className="guest-text mb-4">
          Guests are always welcome at our establishment, and we aim to provide them with a memorable experience.
        </h4>} animation='fade-in' />
        <AnimatedText text={<h1 className="text-center partnership-text mt-3 mt-lg-4">Building Strong Relationships with Our Valued Clients</h1>
        } animation='slide-up' />
        <div
          className="row mt-3 mt-lg-4"
          style={{ justifyContent: "space-between", marginRight: "5px" }}
        >
          {clientImage.map((image, index) => (
            <div className="col-lg-3 col-md-3 col-xl-3 col-6 mb-4" key={index}>
              <div className="work-box">
                <div className="work-box-img" style={{ height: "150px", width: "150px" }}>
                  <ImageAnimationFade src={image} alt="Image not found" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="video-box">
        <video autoPlay loop muted playsInline >
          <source src={squashVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <ScrollToTopButton />
    </>
  );
}

export default Work;
