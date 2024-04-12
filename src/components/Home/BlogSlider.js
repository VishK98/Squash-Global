import React from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BlogSlider.css';
import blogImage1 from "../../assets/images/taw-blog-banner1.png";
import blogImage2 from "../../assets/images/taw-blog-banner2.png";
import blogImage3 from "../../assets/images/taw-blog-banner3.png";
import AnimatedFadeImage from '../Animations/ImageAnimationFade';
import AnimatedText from '../Animations/TextAnimation';
import rigthArrow from "../../assets/images/Icons/-right-arrow.png";
import ImageAnimationFade from "../Animations/ImageAnimationFade";

const BlogSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-lg-12">
          <Slider {...sliderSettings}>
            <div className="slide-item ">
              <div className="slide-content ">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="box">
                    <AnimatedFadeImage src={blogImage1} alt="Image not found" />
                  </div>
                </div>
                <div className='col-lg-5 col-md-5 col-12'>
                  <AnimatedText text={<h3>How Changes in Social Media Algorithms Are Influencing Content Strategy and What Marketers Need to Know to Stay Ahead</h3>
                  } animation='slide-up' />
                  <AnimatedText text={<p>In today's bustling market where every digital marketing agency is trying to stand out, having consumable content is like the basic rule of the game.                                             ...
                  </p>} animation='slide-up' />
                  <Link to="/Blog" style={{ textDecoration: "none" }}>
                    <div className="animated-arrow-btn" style={{ marginLeft: "10px", height: "50px", width: "50px" }}>
                      <ImageAnimationFade src={rigthArrow} alt="Image not found" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="slide-item ">
              <div className="slide-content ">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="box">
                    <AnimatedFadeImage src={blogImage2} alt="Image not found" />
                  </div>
                </div>
                <div className='col-lg-5 col-md-5 col-12'>
                  <AnimatedText text={<h3>How Artificial Intelligence is Revolutionizing Advertising, From Personalized Targeting to Predictive Analytics</h3>
                  } animation='slide-up' />
                  <AnimatedText text={<p>
                    Welcome to the future of advertising, where the magic of Artificial Intelligence (AI) is transforming the way, we connect with audiences.</p>} animation='slide-up' />
                  <Link to="/Blog" style={{ textDecoration: "none" }}>
                    <div className="animated-arrow-btn" style={{ marginLeft: "10px", height: "50px", width: "50px" }}>
                      <ImageAnimationFade src={rigthArrow} alt="Image not found" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="slide-item ">
              <div className="slide-content ">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="box">
                    <AnimatedFadeImage src={blogImage3} alt="Image not found" />
                  </div>
                </div>
                <div className='col-lg-5 col-md-5 col-12'>
                  <AnimatedText text={<h3>4 Red Flags to Watch Out in Your Next Content Marketing Strategy</h3>
                  } animation='slide-up' />
                  <AnimatedText text={<p>
                    Discover the top 4 red flags that could be undermining your content marketing strategy. Learn how to identify and address these warning signs to ensure your next campaign is a resounding success.                  </p>} animation='slide-up' />
                  <Link to="/Blog" style={{ textDecoration: "none" }}>
                    <div className="animated-arrow-btn" style={{ marginLeft: "10px", height: "50px", width: "50px" }}>
                      <ImageAnimationFade src={rigthArrow} alt="Image not found" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
