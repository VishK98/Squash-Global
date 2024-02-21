import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/Content.png";
import AnimatedText from '../Animations/TextAnimation';
function Content() {
  return (
    <div>
       <div className='container'>
      <div class="route-text">
        <ol class="breadcrumb route-text mt-3">
          <li>
            <a
              href="/"
              style={{ color: "grey", textDecoration: "none" }}
            >
              <AnimatedText text="Service /" animation="slide-left" />
            </a>
          </li>
          <li>
            <AnimatedText text="&nbsp; CONTENT " animation="slide-right" />
          </li>
        </ol>
      </div>
      <div className='row mt-lg-4'>
        <div className='col-lg-5 col-md-5 col-12'>
          <img src={img} className='tittle-img' alt='' />
        </div>
        <div className='col-lg-7 col-md-7 col-12'>
          <h1 className="big-title page-head">CONTENT </h1>
          <h3 className='mt-lg-3'>CREATE CONTENT AT SCALE</h3>
          <p>Content is the pillar of trust for any business. TAW is known for not only creating the trust but nurturing it actively. Our adaptable, engaging and easy to consume contents helps next-gen marketers to convey their Brand's message better than before. Businesses trust us to design content marketing strategy in such an appealing way that even the laziest potential customer will have access to the products and services. </p>
          <h3>WHY BRANDS TRUSTS US WITH THEIR CONTENT NEEDS?</h3>
            <p>TAW was born to solve major content marketing problems faced by businesses while scaling up their contents.</p>
          <ul>
          <li>Managing Freelancer and In-House Writers'</li>
          <li>Meeting Deadlines</li>
          <li>Maintaining Quality & Authenticity </li>
          <li>Scaling Up or Scaling Down the Content Volume</li>
          </ul>
          <p>GET A DEDICATED TEAM OF WRITERS</p>
          <p>We curate and manage a team of dedicated writers, who work solely on your project. </p>
          <p>This way we ensure consistency in content quality over the period of the project, helping you focus more on the strategy. </p>
          <p>Our in-house quality control and proofreaders team ensures that the delivered content meets all the parameters of the fine content and is in line with the brief and your expectation.</p>
          <p>Want the same for your business?</p>
          <p>How about catching up for Coffee!</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Content