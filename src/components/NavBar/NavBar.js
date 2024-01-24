import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/images/logo.png";
// import logo from "../../assets/images/logo-squash.png";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import squashVideo from "../../assets/squash.mp4";

export default function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const cursorRef = useRef(null);
  const location = useLocation();

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };

  const handleToggleClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  const updateVideoHeight = () => {
    setVideoHeight(location.pathname === "/" ? "100%" : "0%");
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleLinkMouseOver = (e) => {
      const cursor = cursorRef.current;
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.backgroundColor = "#fff";
      e.target.style.color = "#000";
    };

    const handleLinkMouseLeave = (e) => {
      const cursor = cursorRef.current;
      cursor.style.width = "10px";
      cursor.style.height = "10px";
      cursor.style.backgroundColor = "#000";
      e.target.style.color = "#333";
    };

    const addListeners = () => {
      document.addEventListener("mousemove", handleMouseMove);

      document.querySelectorAll("a").forEach((link) => {
        link.addEventListener("mouseover", handleLinkMouseOver);
        link.addEventListener("mouseleave", handleLinkMouseLeave);
      });
    };

    const removeListeners = () => {
      document.removeEventListener("mousemove", handleMouseMove);

      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("mouseover", handleLinkMouseOver);
        link.removeEventListener("mouseleave", handleLinkMouseLeave);
      });
    };

    if (window.innerWidth > 768) {
      addListeners();
    }

    return () => {
      removeListeners();
    };
  }, []);

  useEffect(() => {
    const handleLinkClick = () => {
      if (isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };

    document.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      document.querySelectorAll("a.nav-link").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, [isMobileNavOpen]);

  const [videoHeight, setVideoHeight] = useState("100%");

  useEffect(() => {
    updateVideoHeight();
    console.log(videoHeight);
  }, [location.pathname]);

  // Conditionally render the video only when screen width is greater than 768 pixels
  const shouldRenderVideo = window.innerWidth > 768;

  return (
    <>
      {shouldRenderVideo && (
        <div>
          <video autoPlay loop muted playsInline style={{ height: videoHeight }}>
            <source src={squashVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
       <header className="header nav-wrapper">
        <nav className="navbar navbar-expand-lg" aria-label="Main navigation">
          <div className="container" style={{ marginLeft: "25px" }}>
            <Link to="/" onClick={handleToggleClick} className="mt-2">
              <img src={logo} alt="BigCo Inc. logo" className="logo-img" />
            </Link>

            <button
              className="navbar-toggler mt-2 "
              type="button"
              onClick={toggleMobileNav}
              aria-label="Toggle navigation"
            >
              <span
                className={`navbar-toggler-icon ${isMobileNavOpen ? "open" : ""}`}
              ></span>
            </button>

            <div
              className={`collapse navbar-collapse offcanvas-collapse ${
                isMobileNavOpen ? "show" : ""
              }`}
              id="navbarsExampleDefault"
            >
            <ul className="navbar-nav ml-auto mt-2" style={{marginLeft: "130px"}}>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/philosophy">
                    Philosophy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/work">
                    Working
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sector">
                    Sector
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/careers">
                    Careers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div id="cursor" className="cursor" ref={cursorRef}></div>
    </>
  );
}
