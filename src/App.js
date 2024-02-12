import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Philosophy from "./components/Philosophy/Philosophy";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import Sector from "./components/Sector/Sector";
import Blog from "./components/Blog/Blog";
import Careers from "./components/Careers/Careers";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import PopupModal from "./components/PopupModal/PopupModal";
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
      <div className="Squash">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/work" element={<Work />} />
          <Route path="/sector" element={<Sector />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/popup" element={<PopupModal />} />
          <Route path="/mediaPlanning" element={<MediaPlanning />} />
          <Route path="/digitalPR" element={<DigitalPR />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/socialMedia" element={<SocialMedia />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/content" element={<Content />} />
          <Route path="/production" element={<Production />} />
          <Route path="/websiteDesign" element={<WebsiteDesign />} />
          <Route path="/programmatics" element={<Programmatics />} />
          <Route path="/influencer" element={<Influencer />} />
        </Routes>
        {modalVisible && <PopupModal />}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
