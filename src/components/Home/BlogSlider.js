import React from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BlogSlider.css';
import blogImage4 from "../../assets/images/Blog1.png";
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
            {/* Slide 1 */}
            <div className="slide-item ">
              <div className="slide-content ">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="box">
                    <AnimatedFadeImage src={blogImage4} alt="Image not found" />
                  </div>
                </div>
                <div className='col-lg-5 col-md-5 col-12'>
                  <AnimatedText text={<h3>How Changes in Social Media Algorithms Are Influencing Content Strategy and What Marketers Need to Know to Stay Ahead</h3>
                  } animation='slide-up' />
                  <AnimatedText text={<p>In today's bustling market where every digital marketing agency is trying to stand out, having consumable content is like the basic rule of the game.                                             ...
                  </p>} animation='slide-up' />
                  <Link to="/blogDetails" style={{ textDecoration: "none" }}>
                    <div className="animated-arrow-btn" style={{ marginLeft: "10px", height: "50px", width: "50px" }}>
                      <ImageAnimationFade src={rigthArrow} alt="Image not found" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="slide-item ">
              <div className="slide-content ">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="box">
                    <AnimatedFadeImage src={blogImage4} alt="Image not found" />
                  </div>
                </div>
                <div className='col-lg-5 col-md-5 col-12'>
                  <AnimatedText text={<h3>Why Images and Videos are Critical for Engagement for Social Media Platforms</h3>
                  } animation='slide-up' />
                  <AnimatedText text={<p>
                    You would have often come across the popular phrase “A picture is worth a thousand words.” However, contrary to this statement is the power of videos that now allows you to dictate your story just in 30 seconds.
                  </p>} animation='slide-up' />
                  <Link to="/blogDetails" style={{ textDecoration: "none" }}>
                    <div className="animated-arrow-btn" style={{ marginLeft: "10px", height: "50px", width: "50px" }}>
                      <ImageAnimationFade src={rigthArrow} alt="Image not found" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="slide-item ">
              <div className="slide-content ">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="box">
                    <AnimatedFadeImage src={blogImage4} alt="Image not found" />
                  </div>
                </div>
                <div className='col-lg-5 col-md-5 col-12'>
                  <AnimatedText text={<h3>Why Images and Videos are Critical for Engagement for Social Media Platforms</h3>
                  } animation='slide-up' />
                  <AnimatedText text={<p>
                    You would have often come across the popular phrase “A picture is worth a thousand words.” However, contrary to this statement is the power of videos that now allows you to dictate your story just in 30 seconds.                                             ...
                  </p>} animation='slide-up' />
                  <Link to="/blogDetails" style={{ textDecoration: "none" }}>
                    <div className="animated-arrow-btn" style={{ marginLeft: "10px", height: "50px", width: "50px" }}>
                      <ImageAnimationFade src={rigthArrow} alt="Image not found" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
