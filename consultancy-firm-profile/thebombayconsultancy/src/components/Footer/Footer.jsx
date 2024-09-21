import React from 'react';
import {Link} from 'react-scroll';
import styles from './Footer.module.css';
import { getImageUrl } from '../../utils';

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <img src={getImageUrl('nav/company_logo.png')} alt="Company Logo" />
      </div>
      <div className={styles.footerInfo}>
        
        <p className={styles.footerAddress}>Ittihad Rd 30, Sector, Dubai, United Arab Emirates</p>
        <p className={styles.footerPhone}>Phone: (971) 50 108 5253</p>
        <p className={styles.footerEmail}>Email: thebombayconsultancy@gmail.com</p>
      </div>
      <div className={styles.footerNav}>
        <h4 className={styles.footerHeading}>Navigation</h4>
        <ul>
          <li><Link to="about">About Us</Link></li>
          <li><Link to="service">Services</Link></li>
          <li><Link to="contact-us">Contact</Link></li>
          <li><Link to="careerform">Careers</Link></li>
        </ul>
      </div>
      <div className={styles.footerSocial}>
        <h4 className={styles.footerHeading}>Follow Us</h4>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/cajmdoctor/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/thebombayconsultancy/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>&copy; 2024 theBombayConsultancy. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer