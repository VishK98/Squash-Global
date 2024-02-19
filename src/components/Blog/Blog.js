import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import ScrollToTopButton from '../TopButton/TopButton';
import blogImage1 from "../../assets/images/blog-image (1).jpg";
import blogImage2 from "../../assets/images/blog-image (2).jpg";
import blogImage3 from "../../assets/images/blog-image (3).jpg";
import blogImage4 from "../../assets/images/blog-image (4).jpg";
import blogImage5 from "../../assets/images/blog-image (5).jpg";
import blogImage6 from "../../assets/images/blog-image (6).jpg";
import blogImage7 from "../../assets/images/blog-image (7).jpg";
import blogImage8 from "../../assets/images/blog-image (8).jpg";
import blogImage9 from "../../assets/images/blog-image (9).jpg";
import blogImage10 from "../../assets/images/blog-image (10).jpg";
import ImageAnimationFade from "../Animations/ImageAnimationFade";
import AnimatedText from '../Animations/TextAnimation';


function Blog() {
  const imagesData = [
    {
      url: blogImage1,
      title: "How to Create Compelling Ad Copy in 2023",
      description:
        "One of the building blocks of a business's success is copywriting. Even if you are not in the marketing field, you are surrounded by ad copies everywhere.",
    },
    {
      url: blogImage2,
      title:
        "The Role of Infographics in Marketing: How to Use Them to Boost Your Brand",
      description:
        "In simple terms, infographics are like “one picture worth a thousand words. The main purpose of infographics is to make the content easy to consume for readers.",
    },
    {
      url: blogImage3,
      title:
        "Discover the best way to advertise your business online while boosting brand awareness and increasing revenue",
      description:
        "Choose the best SEM company to improve sales, build your brand and reach out to a larger audience",
    },
    {
      url: blogImage4,
      title:
        "Wish to know how to increase your reach on instagram? These hacks are for you!",
      description: "Increase organic reach in 2022. Here’s how.",
    },
    {
      url: blogImage5,
      title: "Better your browser; Top 5 best SEO extensions",
      description:
        "Customize your chrome with these free SEO extensions for Chrome.",
    },
    {
      url: blogImage6,
      title: "Decoded: Best social media platform for your brand",
      description:
        "Upgrade your marketing game with the best social media platforms for marketing",
    },
    {
      url: blogImage7,
      title: "How to Shape Your Influencer Marketing Strategy",
      description:
        "Although influencer marketing is not a new term it continues to soar, and it presents exciting new avenues for brands to engage with their audience.",
    },
    {
      url: blogImage8,
      title: "Best Ecommerce Platforms of 2022 in India",
      description:
        "There is no point aiming to set up a website to start your ecommerce venture, if you dont have the right platform to build a scalable, profitable and successful business from it.",
    },
    {
      url: blogImage9,
      title: "7 Simple YouTube SEO Tips To Rank Your Videos On Top",
      description:
        "Here are a few SEO tips to rank your videos on youtube search",
    },
    {
      url: blogImage10,
      title: "Build a high-performing website with suitably-optimized images",
      description:
        "It’s not surprising to learn that website performance is directly correlated to the sizes of images that you put out there",
    },
  ];
  return (
    <>
      <div className="container mt-4">
        <AnimatedText text={<h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            "@media (max-width: 767px)": {
              fontSize: "25px",
              fontWeight: 200,
            },
          }}
        >
          Get the latest transformative insights, trends and growth hacks
          straight out of a Digital agency's playbook.
        </h1>
        } animation='slide-up' />
        <AnimatedText text={<p className="mt-4">
          <span
            style={{
              color: "var(--secondary-color)",
              fontSize: "18px",
              letterSpacing: "1px",
            }}
          >
            We bring you the latest industry trends and best practices to
            overcome all your digital marketing challenges.
          </span>
        </p>} animation='slide-up' />
      </div>
      <div className="container">
        <div className="row">
          {imagesData.map((image, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="box">
                <ImageAnimationFade src={image.url} alt="Image not found" />
                <div className="box-content">
                  <div className="inner-content">
                    <AnimatedText text={<h6 className="title d-none d-md-block">{image.title}</h6>
                    } animation="slide-up" />
                    <Link to="/blogDetails" class="btn-flip mt-4" data-back="😊 😊" data-front="Read more"></Link>
                  </div>
                </div>
              </div>
              <AnimatedText text={<h6 style={{ textAlign: "center", padding: "10px" }}>{image.description}</h6>
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
