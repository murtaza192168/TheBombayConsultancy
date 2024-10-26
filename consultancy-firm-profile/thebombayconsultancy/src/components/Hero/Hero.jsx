import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { getImageUrl } from '../../utils';
import './Hero.css'; // Custom CSS for non-Bootstrap-specific styles

export const Hero = () => {
  return (
    <section id='contact-us' className="container-fluid d-flex align-items-center justify-content-between hero-section">
      <div className="content">
        <h1 className="display-4 font-weight-bold text-dark mb-3">Your Trusted Partner in Financial Growth</h1>
        <p className="lead text-secondary mb-4">
          At <span className="highlight">TheBombayConsultancy</span>, we deliver expert financial solutions designed to drive your success
        </p>
        <a className="btn btn-success contact-btn" href="https://wa.me/971501085253">
          <i className="fab fa-whatsapp"></i> Get in touch
        </a>
      </div>
      <img className="hero-img" src={getImageUrl('hero/heroImage2.png')} alt="hero image" />
    </section>
  )
}

export default Hero;