import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-scroll";
import {Link} from "react-router-dom";


import "./Navbar.css";
import { getImageUrl } from "../../utils";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu container

  // Toggle body scroll based on menu state
  useEffect(() => {
    if (window.innerWidth <= 900) {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Close the menu on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  // Handle navbar visibility on scroll
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
        document.body.style.overflow = "auto";
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
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${showNavbar ? '' : 'd-none'}`} ref={menuRef}>
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
              <Link className="nav-link" to="/#about" smooth={true} offset={-70} duration={800} onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li to="/#service" className="nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link className="nav-link dropdown-toggle" to="/#service" smooth={true} offset={-110} duration={800} 
                onClick={() => setMenuOpen(false)}
                role="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Services
              </Link>
              <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <Link className="dropdown-item" to="/services/accounting-and-bookkeeping" smooth={true} offset={-70} duration={800}  onClick={() => setMenuOpen(false)}>Accounting & Bookkeeping</Link>
                <Link className="dropdown-item" to="/services/vat-corporate-tax-compliance" smooth={true} offset={-70} duration={800} onClick={() => setMenuOpen(false)}>VAT & Corporate Tax Compliance & Consultancy</Link>
                <Link className="dropdown-item" to="/services/company-formation-liquidation" smooth={true} offset={-70} duration={800} onClick={() => setMenuOpen(false)}>Company Formation & Liquidation</Link>
                <Link className="dropdown-item" to="/services/nri-taxation" smooth={true} offset={-70} duration={800} onClick={() => setMenuOpen(false)}>NRI Taxation</Link>
                <Link className="dropdown-item" to="/services/internal-audit" smooth={true} offset={-70} duration={800} onClick={() => setMenuOpen(false)}>Internal Audit</Link>
                <Link className="dropdown-item" to="/services/project-reports" smooth={true} offset={-70} duration={800} onClick={() => setMenuOpen(false)}>Project Reports</Link>
                <Link className="dropdown-item" to="/services/business-planning" smooth={true} offset={-70} duration={800} onClick={() => setMenuOpen(false)}>Business Planning</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#articles" smooth={true} offset={-110} duration={800} onClick={() => setMenuOpen(false)}>
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#careerform" smooth={true} offset={-110} duration={800} onClick={() => setMenuOpen(false)}>
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#contact-us" smooth={true} offset={-110} duration={800} onClick={() => setMenuOpen(false)}>
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
