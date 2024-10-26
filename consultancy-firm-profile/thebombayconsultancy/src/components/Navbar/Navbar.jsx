import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { getImageUrl } from "../../utils";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // handle scroll: freeze and unfreeze
  useEffect(() => {
    if (window.innerWidth <= 900) {
      document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // handle scrollY
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY, menuOpen]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${showNavbar ? '' : 'd-none'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={getImageUrl("nav/company_logo.png")} alt="Logo" />
        </a>
        <button
          className={`navbar-toggler ${menuOpen ? "collapsed" : ""}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} offset={-70} duration={800} onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="service" smooth={true} offset={-110} duration={800} onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="articles" smooth={true} offset={-110} duration={800} onClick={() => setMenuOpen(false)}>
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="careerform" smooth={true} offset={-110} duration={800} onClick={() => setMenuOpen(false)}>
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact-us" smooth={true} offset={-110} duration={800} onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
