import React from "react";
import "./Clients.css";
import ScrollToTopButton from '../TopButton/TopButton';
import client1 from "../../assets/images/clients/client-1.png";
import client2 from "../../assets/images/clients/client-2.png";
import client3 from "../../assets/images/clients/client-3.png";
import client4 from "../../assets/images/clients/client-4.png";
import client5 from "../../assets/images/clients/client-5.png";
import client6 from "../../assets/images/clients/client-6.png";
import client7 from "../../assets/images/clients/client-7.png";
import client8 from "../../assets/images/clients/client-8.png";
import ourClients from "../../assets/images/Client Banner.jpg";
import TAWVideo from "../../assets/squash-video.mp4";
import AnimatedText from '../Animations/TextAnimation';
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";
import ImageAnimationFade from "../Animations/ImageAnimationFade";
import newClient from "../../assets/images/client logos/6.png";
import newClient1 from "../../assets/images/client logos/10.png";
import newClient2 from "../../assets/images/client logos/1.png";
import newClient3 from "../../assets/images/client logos/12.png";
import newClient4 from "../../assets/images/client logos/13.png";
import newClient5 from "../../assets/images/client logos/14.png";
import newClient6 from "../../assets/images/client logos/15.png";
import newClient7 from "../../assets/images/client logos/16.png";
import newClient8 from "../../assets/images/client logos/17.png";
import newClient9 from "../../assets/images/client logos/18.png";
import newClient10 from "../../assets/images/client logos/19.png";
import newClient11 from "../../assets/images/client logos/2.png";
import newClient12 from "../../assets/images/client logos/20.png";
import newClient13 from "../../assets/images/client logos/3.png";
import newClient14 from "../../assets/images/client logos/4.png";
import newClient15 from "../../assets/images/client logos/5.png";




function Work() {
  const clientImage = [newClient, newClient1, newClient2, newClient3, newClient4, newClient5, newClient6, newClient7, newClient8, newClient9, newClient10, newClient11, newClient12, newClient13, newClient14, newClient15];

  return (
    <>
      <div className="full-screen-image">
        <ImageAnimationUnfold src={ourClients} alt="Image not found" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
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
          <source src={TAWVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <ScrollToTopButton />
    </>
  );
}

export default Work;
