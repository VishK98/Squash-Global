import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/mplanning.png";
import AnimatedText from '../Animations/TextAnimation';


function MediaPlanning() {
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
            <AnimatedText text="&nbsp;MEDIA PLANNING AND BUYING" animation="slide-right" />
          </li>
        </ol>
      </div>
      <div className='row mt-lg-4'>
        <div className='col-lg-5 col-md-5 col-12'>
          <img src={img} className='tittle-img' alt='' />
        </div>
        <div className='col-lg-7 col-md-7 col-12'>
          <h1 className="big-title page-head">MEDIA PLANNING AND BUYING</h1>
          <h3 className='mt-lg-3'>FROM TRADITIONAL TO DIGITAL</h3>
          <h4>We Cover It ALL!</h4>
          <p>The medium is the power and to harness that power you need Media Planning experts by your side who knows how and when to deliver that message to the right people.</p>
          <p> Squash ensures your billions of advertising dollars are not wasted by guiding you through proper media planning strategies. We assign a combination of people with skilled knowledge of media, budgeting, content creation, and other areas of expertise related to marketing. Our Media Planning Strategies will certainly help you drive the desired results that you are dreaming of.</p>
          <h3>3 PILLARS OF MEDIA PLANNING:</h3>
          <p>Purpose: What are the goals and objectives of the Brand? Does it create awareness and visibility or encourage a viewer to fill out a form? We consider all the possible questions at the early stages of the planning process. </p>
          <p>Audience: Whom are we targeting? Who will likely to be benefitted from the message we are amplifying? Will they be interested in the product? Will they buy it? Will it serve its purpose of developing a long-term relationship between Brand and Customer? The Purpose and the Audience are both sides of a same coin.</p>
          <p>Reach: What would be volume? How many people are we targeting? What would be the frequency? Not everyone consumes the media at the same time. So, it is utmost important to decide the reach and frequency of a campaign. </p>
          <p>All these three are interconnected and our media planning team consider each and every aspect during the early stage of plan formation. </p>
          <p>Want the same for your Business?</p>
          <p>How about catching up for a Coffee!</p>
        </div>
      </div>
    </div>

  )
}

export default MediaPlanning