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
        </Routes>
        {modalVisible && <PopupModal />}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
