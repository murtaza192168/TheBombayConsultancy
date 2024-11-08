import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getImageUrl } from '../../utils';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo and Info Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img 
              src={getImageUrl('nav/company_logo.png')} 
              alt="Company Logo" 
              className="img-fluid mb-3" 
              style={{ filter: 'brightness(0) invert(1)', maxWidth: '120px' }} 
            />
            <p className="mb-1">Ittihad Rd 30, Sector, Dubai, UAE</p>
            <p className="mb-1">Phone: (971) 50 108 5253</p>
            <p>Email: thebombayconsultancy@gmail.com</p>
          </div>
          {/* Navigation Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Navigation</h5>
            <div className="d-flex flex-column align-items-center align-items-md-start">
              
              <a href="/about" className="text-light text-decoration-none mb-2">About Us</a>
              <a href="/services" className="text-light text-decoration-none mb-2">Services</a>
              <a href="/articles" className="text-light text-decoration-none mb-2">Articles</a>
              <a href="/contactform" className="text-light text-decoration-none">Reach out</a>
            </div>
          </div>
          {/* Social Media Section */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener" className="text-light ">
                <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light ">
                <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="https://www.linkedin.com/in/cajmdoctor/" target="_blank" rel="noopener noreferrer" className="text-light ">
                <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
              </a>
             
            </div>
          </div>
        </div>
        <div className="text-center border-top border-secondary pt-4 mt-4">
          <p className="mb-0">&copy; 2024  FJ Accounting & Consultancy LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
