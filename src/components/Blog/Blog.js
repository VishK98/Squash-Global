import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import ScrollToTopButton from '../TopButton/TopButton';
import blogImage1 from "../../assets/images/taw-blog-banner1.webp";
import blogImage2 from "../../assets/images/taw-blog-banner2.webp";
import blogImage3 from "../../assets/images/taw-blog-banner3.webp";
import ImageAnimationFade from "../Animations/ImageAnimationFade";
import AnimatedText from '../Animations/TextAnimation';
import { Helmet } from 'react-helmet';

function Blog() {
  const imagesData = [
    {
      url: blogImage3,
      title:
        "4 Red Flags to Watch Out in Your Next Content Marketing Strategy",
      description:
        "In simple terms, Discover the top 4 red flags that could be undermining your content marketing strategy. Learn how to identify and address these warning signs to ensure your next campaign is a resounding success.",
      route: '/blog/4-red-flags-to-watch-out-in-your-next-content-marketing-strategy'
    },
    {
      url: blogImage1,
      title: "How Changes in Social Media Algorithms Are Influencing Content Strategy and What Marketers Need to Know to Stay Ahead",
      description:
        "One of the building blocks of a business's success is copywriting. Even if you are not in the marketing field, you are surrounded by ad copies everywhere.",
      route: '/blog/how-changes-in-social-media-algorithms'
    },
    {
      url: blogImage2,
      title:
        "How Artificial Intelligence is Revolutionizing Advertising, From Personalized Targeting to Predictive Analytics",
      description:
        "In simple terms, infographics are like “one picture worth a thousand words. The main purpose of infographics is to make the content easy to consume for readers.",
      route: '/blog/how-artificial-intelligence-is-revoluationizing-advertising'
    },
    
  ];
  return (
    <>
    <Helmet>
        <title>Get The Latest Blogs - The Agency Way (TAW)</title>
        <meta name="description" content="Stay ahead with the latest insights! Get The Latest Blogs - The Agency Way (TAW) for expert tips, trends, and strategies to propel your business forward." />
        <link rel="canonical" href="https://taw.agency/blog" />
      </Helmet>
      <div className="container mt-4">
        <AnimatedText
          text={
            <h1 className="blog-heading">
              Get the latest transformative insights, trends and growth hacks
              straight out of a Digital agency's playbook.
            </h1>
          }
          animation="slide-down"
        />

        <AnimatedText text={
          <p className="blog-sub-heading mt-lg-4 mb-lg-4">
           <h2>We bring you the latest industry trends and best practices to
            overcome all your digital marketing challenges.</h2> 
          </p>
        } animation='slide-up' />

      </div>
      <div className="container">
        <div className="row">
          {imagesData.map((image, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="box">
                <ImageAnimationFade src={image.url} alt="Image not found" />
                <div className="box-content">
                  <div className="inner-content">
                    <AnimatedText text={<h6 className="blogs-title mt-4">{image.title}</h6>
                    } animation='slide-up' />
                    <Link to={image.route} class="btn-flip mt-4" data-back="Read more" data-front="Read more"></Link>
                  </div>
                </div>
              </div>
              <AnimatedText text={<h6 className="paragraph-text mt-4">{image.description}</h6>
              } animation='slide-up' />
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Blog;
