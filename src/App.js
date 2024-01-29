import "./App.css";
import './setup';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
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
import React, { useState } from 'react';


function App() {
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <Router>
        <NavBar></NavBar>
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
          {/* <PopupModal></PopupModal> */}
          {modalVisible && <PopupModal onClose={closeModal} />}

        </div>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
