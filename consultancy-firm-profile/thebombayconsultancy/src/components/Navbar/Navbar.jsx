import React, {useState, useEffect} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';
//for click_navigation and smooth react scrolling
import {Link} from 'react-scroll';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const[showNavbar, setShowNavbar] = useState(true)
    const[lastScrollY, setLastScrollY] = useState(0)
  return (
   <section>
    <nav className={styles.navbar}>
        <a className={styles.title} href="/"><img  src={getImageUrl("nav/tbh_navbarimage.png")} alt="" /></a>
       
        <button className={styles.menuBtn} 
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <img 
                            src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                            alt="menu-button"
                        />
                    </button>
    </nav>
    {menuOpen && (
                <div className={styles.menuContainer}>
                    <ul className={styles.menuItems}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#articles">Articles</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#career">Career</a></li>
                        <li><a href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>
            )}
        
    
   </section> 
  )
}

export default Navbar