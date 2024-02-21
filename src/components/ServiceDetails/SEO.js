import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/Seo.png";
import AnimatedText from '../Animations/TextAnimation';


function SEO() {
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
            <AnimatedText text="&nbsp;SEARCH ENGINE OPTIMIZATION" animation="slide-right" />
          </li>
        </ol>
      </div>
      <div className='row mt-lg-4'>
        <div className='col-lg-5 col-md-5 col-12'>
          <img src={img} className='tittle-img' alt='' />
        </div>
        <div className='col-lg-7 col-md-7 col-12'>
          <h1 className="big-title page-head">SEO & SEM</h1>
          <h3 className='mt-lg-3'>SEARCH ENGINE OPTIMIZATION</h3>
          <p>Nowadays finding a website with optimum SEO strategy is tougher than finding a needle in the haystack. 
            No matter how responsive and attractive your website is, it wonâ€™t reach your potential audience without a good SEO. 
            Our team of SEO experts ranks your website higher on SERPs to help your website gain the focus and visibility it deserves.</p>
            <p>That's not all! We also monitor your online performance by implementing the data analytics and revamping the SEO strategy accordingly.</p>
          <h3>Our SEO Services Includes: :</h3>
          <ul>
          <li>Search Engine Optimization on Page</li>
          <li>SEM Strategy with Keyword Selection </li>
          <li>Google AdWords Campaign Management </li>
          <li>Contextual Advertising</li>
          </ul>
         <h3>SEARCH ENGINE MARKETING</h3>
         <p>Google Ads make sure your Brand's message is being properly propagated to the targeted segments and serving its purpose. 
          With vast amount of knowledge, TAW curates the perfect strategy to give you the best online presence with Google AdWords.</p>
        <h3>Our Search Engine Marketing Services Comprise: </h3>
        <ul>
          <li>Google Search Campaigns</li>
          <li>Google Display Campaigns </li>
          <li>Google App Download Campaigns </li>
          <li>•	Remarketing Campaigns</li>
          </ul>
          <p>Want the same for your Business?</p>
          <p>How about catching up for a Coffee!</p>
        </div>
      </div>
    </div>

  )
}

export default SEO