import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/pr.png";
import AnimatedText from '../Animations/TextAnimation';


function DigitalPR() {
  return (
    <div>
    <div className='container'>

      <div className='row'>

        <div className='col-lg-6 col-md-6 col-12 mt-lg-5'>
          <img src={img} />
        </div>
        <div className='col-lg-6 col-md-6 col-12 mt-lg-5'>
          <h1 className='service-details-title'>Digital PR And ORM
          </h1>
          <p className='paragraph-text'>First impressions matter, make them count. Our designers and developers are led by a decade of experience, working in sync to deliver a digital identity that not only makes a fantastic first impression, but is future-proof for years to come.</p>
          <ul className='paragraph-text'>
            <li>Website designing</li>
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

export default DigitalPR