import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/"><img src={getImageUrl("nav/tbh_navbarimage.png")} alt="" /></a>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
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
  )
}

export default Navbar