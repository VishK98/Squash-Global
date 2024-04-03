import React, { useEffect, useState } from "react";
import logo from "../../assets/taw-logo.png";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prevState => !prevState);
  };

  const handleToggleClick = () => {
    setIsMobileNavOpen(false);
  };

  const handleNavLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <header className="header nav-wrapper">
        <nav className="navbar navbar-expand-lg" aria-label="Main navigation">
          <div className="container-fluid" style={{ marginLeft: "25px" }}>
            <Link to="/" onClick={handleToggleClick} className="mt-2">
              <img src={logo} alt="BigCo Inc. logo" className="logo-img" />
            </Link>

            <button
              className="navbar-toggler mt-2"
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
            >
              <ul className="navbar-nav mt-2" style={{ marginLeft: "auto" }}>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/"
                    style={{ color: location.pathname === "/" ? "white" : "black" }}
                    onClick={handleNavLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about-us"
                    style={{ color: location.pathname === "/" ? "white" : "black" }}
                    onClick={handleNavLinkClick}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/clients"
                    style={{ color: location.pathname === "/" ? "white" : "black" }}
                    onClick={handleNavLinkClick}
                  >
                    Clients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/services"
                    style={{ color: location.pathname === "/" ? "white" : "black" }}
                    onClick={handleNavLinkClick}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/blog"
                    style={{ color: location.pathname === "/" ? "white" : "black" }}
                    onClick={handleNavLinkClick}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/careers"
                    style={{ color: location.pathname === "/" ? "white" : "black" }}
                    onClick={handleNavLinkClick}
                  >
                    Careers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact"
                    style={{ color: location.pathname === "/" ? "white" : "black" }}
                    onClick={handleNavLinkClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
