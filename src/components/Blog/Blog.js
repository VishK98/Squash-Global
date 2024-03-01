import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import ScrollToTopButton from '../TopButton/TopButton';
import blogImage1 from "../../assets/images/Blog1.png";
import blogImage2 from "../../assets/images/Blog2.png";
import ImageAnimationFade from "../Animations/ImageAnimationFade";
import AnimatedText from '../Animations/TextAnimation';


function Blog() {
  const imagesData = [
    {
      url: blogImage1,
      title: "How Changes in Social Media Algorithms Are Influencing Content Strategy and What Marketers Need to Know to Stay Ahead",
      description:
        "One of the building blocks of a business's success is copywriting. Even if you are not in the marketing field, you are surrounded by ad copies everywhere.",
    },
    {
      url: blogImage2,
      title:
        "The Role of Infographics in Marketing: How to Use Them to Boost Your Brand",
      description:
        "In simple terms, infographics are like “one picture worth a thousand words. The main purpose of infographics is to make the content easy to consume for readers.",
    },
  ];
  return (
    <>
      <div className="container mt-4">
        <AnimatedText text={<h1 className="color-text"
          style={{
            fontFamily: "RedHatDisplayBold, Helvetica, Arial, sans-serif",
            fontSize: "40px",
            fontWeight: "bold",
            "@media (max-width: 767px)": {
              fontSize: "25px",
              fontWeight: 200,
            },
          }}
        >
          Get the latest transformative insights, trends and growth hacks
          straight out of a Digital agency's playbook.
        </h1>
        } animation='slide-up' />
        <AnimatedText text={<p className="mt-4">
          <span className="paragraph-text"
            style={{
              color: "var(--secondary-color)",
              fontSize: "18px",
              letterSpacing: "1px",
            }}
          >
            We bring you the latest industry trends and best practices to
            overcome all your digital marketing challenges.
          </span>
        </p>} animation='slide-up' />
      </div>
      <div className="container">
        <div className="row">
          {imagesData.map((image, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="box">
                <ImageAnimationFade src={image.url} alt="Image not found" />
                <div className="box-content">
                  <div className="inner-content">
                    <AnimatedText text={<h6 className="title d-none d-md-block">{image.title}</h6>
                    } animation="slide-up" />
                    <Link to="/blogDetails" class="btn-flip mt-4" data-back="READ MORE" data-front="Read more"></Link>
                  </div>
                </div>
              </div>
              <AnimatedText text={<h6 style={{ textAlign: "center", padding: "10px" }}>{image.description}</h6>
              } animation='slide-up' />
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Blog;
