import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/SocialMediaMarketting.png";
import AnimatedText from '../Animations/TextAnimation';


function SocialMedia() {
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
            <AnimatedText text="&nbsp;SOCIAL MEDIA MANAGEMENT" animation="slide-right" />
          </li>
        </ol>
      </div>
      <div className='row mt-lg-4'>
        <div className='col-lg-5 col-md-5 col-12'>
          <img src={img} className='tittle-img' alt='' />
        </div>
        <div className='col-lg-7 col-md-7 col-12'>
          <h1 className="big-title page-head">DIGITAL PR AND ORM</h1>
          <h3 className='mt-lg-3'>HARNESS THE POWER OF SOCIAL MEDIA</h3>
          <p>The world connects through the internet, and social media is the ultimate weapon to connect with billions of people around the globe. 
            That's being said, if you are not leveraging the boon of social media within your Digital Marketing Strategy, you are missing out on a fast, 
            inexpensive and effective way to reach almost half of the world's population.</p>
            <p>Social Media is the most important and effective link between your Brand and your consumer base. 
              Squash helps you to harness the power of social media and forge out the most comprehensive social media marketing strategy. 
              Our ultimate guidance helps brands gain maximum reach, boost conversions and increase brand awareness. 
              Squash's professional content specialists curate social media message for your product or services that dig deep into the audience's consciousness and make your Brand more noticeable.</p>
          <h3>OUR OFFERINGS FOR SOCIAL MEDIA MARKETING SERVICES:</h3>
          <p>We assist you with wide range of different Social Media Marketing services by bringing an arsenal of different skills and capabilities to the table.</p>
          <ul>
          <li>Strategic Campaign Planning</li>
          <li>Designing and Maintaining Social Media Platforms </li>
          <li>Integrate Social Media Campaigns on multiple platforms </li>
          <li>Social Media Advertising</li>
          <li>Social Media Lead Generation Campaigns</li>
          <li>Twitter Trending Campaigns</li>
          <li>Review Posting</li>
          <li>Polls Creations and Management</li>
          </ul>
          <p>Want the same for your Business?</p>
          <p>How about catching up for a Coffee!</p>
        </div>
      </div>
    </div>

  )
}

export default SocialMedia