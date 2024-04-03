import React, { useState, useEffect } from 'react';
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
import MediaPlanning from './components/ServiceDetails/MediaPlanning';
import DigitalPR from './components/ServiceDetails/DigitalPR';
import SEO from './components/ServiceDetails/SEO';
import SocialMedia from './components/ServiceDetails/SocialMedia';
import Creative from './components/ServiceDetails/Creative';
import Content from './components/ServiceDetails/Content';
import Production from './components/ServiceDetails/Production';
import WebsiteDesign from './components/ServiceDetails/WebsiteDesign';
import Programmatics from './components/ServiceDetails/Programmatics';
import Influencer from './components/ServiceDetails/Influencer';
import WhatsappLogo from './components/Whatsapp/Whatsapp';
import BlogDetails2 from './components/BlogDetails/BlogDetails2';
import Thankyou from './components/Thankyou/Thankyou';



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <div className="TAW">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/How Changes in Social Media Algorithms" element={<BlogDetails />} />
          <Route path="/How Artificial Intelligence is Revolutionizing Advertising" element={<BlogDetails2 />} />
          <Route path="/services/design" element={<MediaPlanning />} />
          <Route path="/services/digitalpr" element={<DigitalPR />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/socialmedia" element={<SocialMedia />} />
          <Route path="/services/creative" element={<Creative />} />
          <Route path="/services/content" element={<Content />} />
          <Route path="/services/paid-ads" element={< Programmatics/>} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/influencer-marketing" element={<Influencer/>} />
          <Route path="/services/production" element={<Production />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
        {/* {modalVisible && <PopupModal />} */}
        <WhatsappLogo/>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
