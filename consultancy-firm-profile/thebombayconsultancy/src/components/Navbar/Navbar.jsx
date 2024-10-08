import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from 'react-scroll';
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //handle scroll: freeze and unfreeze
  useEffect( () => {
    
      if(window.innerWidth <= 900){
        if(menuOpen){
          document.body.style.overflow = 'hidden';
        }
        else{document.body.style.overflow = 'auto';}
      }
      else{
        document.body.style.overflow = 'auto';
      }
      return() => {document.body.style.overflow = 'auto';}
    }, [menuOpen])

  
    // handle scrollY
  const [lastScrollY, setLastScrollY] = useState(0); // lastScrollY: recent verticle scroll is set to 0(px) bcz by default.
  const [showNavbar, setShowNavbar] = useState(true); // by default showNavbar is true. Bcz it has to be visible initially
  useEffect(() => {
    const handleScroll = () => {
      if(window.innerWidth > 100){ // we want this functionality for both desktop and mobile
        if(window.scrollY > lastScrollY){
          // scrolling down = hide navbar bcz increase in pixel of verticle scrolling
          setShowNavbar(false);
        }
        // scrolling up - show navbar
        else{setShowNavbar(true)}
        setLastScrollY(window.scrollY);
      }
      
    };

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false); // Close menu on resize to desktop view
        document.body.style.overflow = 'auto'; // Ensure scrolling is enabled
      }
    };
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize);


    // clean up function
    return() =>{
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize);
    }
    
  }, [lastScrollY, menuOpen])
   
    
  
  
  return (
    <section>
      <nav className={`${styles.navbar} ${showNavbar ? '' : styles.navbarHidden}`}>
        <a className={styles.title} href="/">
          <img src={getImageUrl("nav/company_logo.png")} alt="Logo" />
        </a>

        <div className={styles.menu}>
          <img
            className={`${styles.menuBtn} ${menuOpen ? 'active' : ''}`}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {/* Menu items container */}
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <Link className={styles.navLink} to="about" smooth={true} offset={-70} duration={800} onClick={()=>setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} to="service" smooth={true} offset={-110} duration={800} onClick={()=>setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} to="articles" smooth={true} offset={-110} duration={800} onClick={()=>setMenuOpen(false)}>
                Articles
              </Link>
            </li>
          
            <li>
              <Link className={styles.navLink} to="careerform" smooth={true} offset={-110} duration={800} onClick={()=>setMenuOpen(false)}>
                Careers
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} to="contact-us" smooth={true} offset={-110} duration={800} onClick={()=>setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
