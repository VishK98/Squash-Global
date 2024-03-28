import React from 'react'
import "./ServiceDetails.css"
// import img from "../../assets/images/SocialMediaMarketting.png";
import newImage from "../../assets/images/Download.png";
import AnimatedText from '../Animations/TextAnimation';


function SocialMedia() {
  return (
    <div>
      <div className='container'>

        <div className='row'>

          <div className='col-lg-6 col-md-6 col-12 mt-lg-5'>
            <img src={newImage} />
          </div>
          <div className='col-lg-6 col-md-6 col-12 mt-lg-5'>
            <h1 className='service-details-title'>Social Media Marketing
            </h1>
            <p className='paragraph-text'>With an ever-growing family of social content specialists, we curate communication and start conversations that reward and resonate with your audience. With a decade worth of practice in staying on top of topical chatter, we know how to maximise reach, recall and impact across platforms that we identify as most appropriate for your brand.</p>
            <ul className='paragraph-text'>
              <li >Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
              <li>Strategic Campaign Planning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SocialMedia