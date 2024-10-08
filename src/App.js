import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Clients from "./components/Clients/Clients";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Careers from "./components/Careers/Careers";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import MediaPlanning from "./components/ServiceDetails/MediaPlanning";
import DigitalPR from "./components/ServiceDetails/DigitalPR";
import SEO from "./components/ServiceDetails/SEO";
import SocialMedia from "./components/ServiceDetails/SocialMedia";
import Production from "./components/ServiceDetails/Production";
import WebsiteDesign from "./components/ServiceDetails/WebsiteDesign";
import Programmatics from "./components/ServiceDetails/Programmatics";
import Influencer from "./components/ServiceDetails/Influencer";
import WhatsappLogo from "./components/Whatsapp/Whatsapp";
import BlogDetails2 from "./components/BlogDetails/BlogDetails2";
import BlogDetails3 from "./components/BlogDetails/BlogDetails3";
import BlogDetails4 from "./components/BlogDetails/BlogDetails4";
import Thankyou from "./components/Thankyou/Thankyou";
import NotFound from "./components/Not Found/NotFound";
import Modal from "./components/FormPopUp/FormPopUp";

function ScrollToTop() {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (formData) => {
    console.log(formData);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true); // Open the modal after 15 seconds
    }, 5000); // 15 seconds delay before opening modal

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []); // Run this effect only once on component mount

  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <div className="TAW" style={{overflow: "hidden"}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/how-changes-in-social-media-algorithms" element={<BlogDetails />} />
          <Route path="/blog/how-artificial-intelligence-is-revoluationizing-advertising" element={<BlogDetails2 />} />
          <Route path="/blog/4-red-flags-to-watch-out-in-your-next-content-marketing-strategy" element={<BlogDetails3 />} />
          <Route path="/blog/a-comprehensive-website-management-strategy" element={<BlogDetails4 />} />
          <Route path="/services/design" element={<MediaPlanning />} />
          <Route path="/services/digitalpr" element={<DigitalPR />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/socialmedia" element={<SocialMedia />} />
          <Route path="/services/paid-ads" element={<Programmatics />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/influencer-marketing" element={<Influencer />} />
          <Route path="/services/production" element={<Production />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* {modalVisible && <PopupModal />} */}
        <WhatsappLogo />
      </div>
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} /> */}
      <Footer />
    </Router>
  );
}

export default App;
