import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/Press release.png";
import AnimatedText from '../Animations/TextAnimation';


function DigitalPR() {
  return (
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
            <AnimatedText text="&nbsp;DIGITAL PR AND ORM" animation="slide-right" />
          </li>
        </ol>
      </div>
      <div className='row mt-lg-4'>
        <div className='col-lg-5 col-md-5 col-12'>
          <img src={img} className='tittle-img' alt='' />
        </div>
        <div className='col-lg-7 col-md-7 col-12'>
          <h1 className="big-title page-head">DIGITAL PR AND ORM</h1>
          <h3 className='mt-lg-3'>BACKED BY STRONG STORYTELLING TECHNIQUESL</h3>
          <p>Public Relation is one of the evergreen modes of Mass communication. 
            It breathes life into your Brand bridging the gap between the business and its potential customers.
             But Implementing a PR Strategy is like walking on a tight rope between Strategy, Persuasion, Creativity and Technology.
            And TAW is known for doing exactly the same in the best possible way. .</p>
            <p>We build up a regular rhythm of PR activities towards the creation of goodwill and Brand Image. 
              We know exactly how to develop a cordial relationship between the Brand and its targeted audience. 
              By using multimedia channels, TAW promotes your products or services to cultivate a positive public perception.</p>
          <h3>IMPACTFUL DIGITAL PR & ORM OFFERINGS:</h3>
          <p>TAW-the agency ways offers the following Digital PR & ORM Services:</p>
          <ul>
          <li>Brand Launch & Recognition Strategy</li>
          <li>Reputation Management </li>
          <li>Crisis Communication & Brand Positioning </li>
          <li>Digital PR & Strategy</li>
          <li>Media Outreach & Progress Report</li>
          </ul>
          <p>Want the same for your Business?</p>
          <p>How about catching up for a Coffee!</p>
        </div>
      </div>
    </div>

  )
}

export default DigitalPR