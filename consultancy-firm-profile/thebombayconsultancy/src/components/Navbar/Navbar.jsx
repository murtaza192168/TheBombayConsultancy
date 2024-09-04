import React, { useState } from "react";
import styles from "./Navbar.module.css";
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
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#articles">Articles</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
