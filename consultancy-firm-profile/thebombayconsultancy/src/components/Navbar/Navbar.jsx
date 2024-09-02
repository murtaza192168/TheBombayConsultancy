import React, {useState, useEffect} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const[showNavbar, setShowNavbar] = useState(true)
    const[lastScrollY, setLastScrollY] = useState(0)
  return (
   <section>
    <nav className={styles.navbar}>
        <a className={styles.title} href="/"><img  src={getImageUrl("nav/tbh_navbarimage.png")} alt="" /></a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src = { 
                menuOpen ? getImageUrl("nav/closeIcon.png")
                             : getImageUrl("nav/menuIcon.png")
                } 
            alt="menu-button"
            onClick = {() => setMenuOpen(!menuOpen)} /* else coverage */
            />
           
            
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>{setMenuOpen(false)}}>
                <li>
                    <a href="#about">About</a>
                </li> {/* About section */}

                <li>
                    <a href="#service">Service</a>
                </li> {/* Service section */}

                <li>
                    <a href="#articles">Articles</a>
                </li> {/* Articles section */}

                <li>
                    <a href="#team">Team</a>
                </li> {/* Team section */}

                <li>
                    <a href="#career">Career</a>
                </li> {/* Career section */}

                <li>
                    <a href="#contact-us">Contact Us</a>
                </li> {/* Contact Us section */}

            </ul>
        </div>
    </nav>
   </section> 
  )
}

export default Navbar