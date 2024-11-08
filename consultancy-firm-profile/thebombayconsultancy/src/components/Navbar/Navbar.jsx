import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { getImageUrl } from "../../utils";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      setMenuOpen(false);
      setDropdownOpen(false);
    };

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down - hide navbar
        setShowNavbar(false);
      } else {
        // Scroll up - show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
      
      // Close menu and dropdown on scroll for mobile view
      if (isMobile) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobile, lastScrollY]);

  const toggleDropdown = () => {
    if (isMobile) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setDropdownOpen(false);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}
      ref={menuRef}
    >
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
              <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={toggleDropdown}
            >
              <Link className="nav-link dropdown-toggle" to="/services" role="button">
                Services
              </Link>
              <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <Link className="dropdown-item" to="/services/accounting-and-bookkeeping"  onClick={() => setMenuOpen(false)}>Accounting & Bookkeeping</Link>
                <Link className="dropdown-item" to="/services/vat-corporate-tax-compliance"  onClick={() => setMenuOpen(false)}>VAT & Corporate Tax Compliance & Consultancy</Link>
                <Link className="dropdown-item" to="/services/company-formation-liquidation"  onClick={() => setMenuOpen(false)}>Company Formation & Liquidation</Link>
                <Link className="dropdown-item" to="/services/nri-taxation"  onClick={() => setMenuOpen(false)}>NRI Taxation</Link>
                <Link className="dropdown-item" to="/services/internal-audit"  onClick={() => setMenuOpen(false)}>Internal Audit</Link>
                <Link className="dropdown-item" to="/services/project-reports"  onClick={() => setMenuOpen(false)}>Project Reports</Link>
                <Link className="dropdown-item" to="/services/business-planning"  onClick={() => setMenuOpen(false)}>Business Planning</Link>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/articles" onClick={() => setMenuOpen(false)}>
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactform" onClick={() => setMenuOpen(false)}>
                Reach out
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
