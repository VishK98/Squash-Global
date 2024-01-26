import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BlogSlider.css'; // Add your custom styles here
import blogImage9 from "../../assets/images/blog-image (9).jpg";
import blogImage10 from "../../assets/images/blog-image (5).jpg";
import blogImage4 from "../../assets/images/blog-image (4).jpg";


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
            <div className="slide-item">
              <div className="slide-content justify-content-between">
                <div className="image-container col-lg-6 col-md-6 col-12">
                  <img className='mb-3' src={blogImage9} alt="Slide 1" />
                </div>
                <div className='col-lg-5 col-md-5 col-12'>
                  <h3>How to Leverage Podcasts for Your Brand in 2023</h3>
                  <p>In today's bustling market where every digital marketing agency is trying to stand out, having consumable content is like the basic rule of the game.                                             ...
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60px", width: "60px", borderRadius: "50px", backgroundColor: "orange" }}>
                    <h4 style={{ fontSize: "35px" }}>➟</h4>
                  </div>

                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="slide-item">
              <div className="slide-content justify-content-between">
                <div className="image-container col-lg-6 col-md-6 col-12">
                  <img className='mb-3' src={blogImage10} alt="Slide 2" />
                </div>
                <div className='col-lg-5 col-md-5 col-12'>
                  <h3>Why Images and Videos are Critical for Engagement for Social Media Platforms</h3>
                  <p>
                    You would have often come across the popular phrase “A picture is worth a thousand words.” However, contrary to this statement is the power of videos that now allows you to dictate your story just in 30 seconds.                                             ...
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60px", width: "60px", borderRadius: "50px", backgroundColor: "orange" }}>
                    <h4 style={{ fontSize: "35px" }}>➟</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="slide-item">
              <div className="slide-content justify-content-between">
                <div className="image-container col-lg-6 col-md-6 col-12">
                  <img className='mb-3'src={blogImage4} alt="Slide 2" />
                </div>
                <div className='col-lg-5 col-md-5 col-12'>
                  <h3>Why Images and Videos are Critical for Engagement for Social Media Platforms</h3>
                  <p>
                    You would have often come across the popular phrase “A picture is worth a thousand words.” However, contrary to this statement is the power of videos that now allows you to dictate your story just in 30 seconds.                                             ...
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60px", width: "60px", borderRadius: "50px", backgroundColor: "orange" }}>
                    <h4 style={{ fontSize: "35px" }}>➟</h4>
                  </div>
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
