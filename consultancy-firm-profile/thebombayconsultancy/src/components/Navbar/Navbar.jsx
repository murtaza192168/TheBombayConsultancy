import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from 'react-scroll';
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          <img src={getImageUrl("nav/tbh_navbarimage.png")} alt="Logo" />
        </a>

        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
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
                Service
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} to="articles" smooth={true} offset={-110} duration={800} onClick={()=>setMenuOpen(false)}>
                Articles
              </Link>
            </li>
          
            <li>
              <Link className={styles.navLink} to="career" smooth={true} offset={-110} duration={800} onClick={()=>setMenuOpen(false)}>
                Career
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} to="contact-us" smooth={true} offset={-110} duration={800} onClick={()=>setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
