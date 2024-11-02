import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils'; // Ensure this utility function is properly imported
import './Service.css'; // Include styles for the ServiceCard

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
       // const response = await fetch('http://localhost:3000/api/services');
         const response = await fetch('https://thebombayconsultancy.onrender.com/api/services');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setServices(data);
      } catch (err) {
        console.error('Error while fetching services', err);
      }
    };
    fetchServices();
  }, []);

  return (
    <section id='service' className="container py-5">
      <h2 className="text-center mb-4">Services We Offer</h2>
      <div className="row justify-content-center">
        {services.map((service, id) => (
          <div className="col-lg-4 col-md-6 mb-4" key={id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service: { imageSrc, title, description, route } }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div className="card shadow-sm text-center p-3" ref={cardRef}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
        <img
          className="card-img-top"
          src={imageSrc}
          alt={`Image of ${title}`}
          loading="lazy"
          style={{ borderRadius: '1px', width: '150px', height: '150px', objectFit: 'contain' }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={route} className="btn btn-primary"> {/* Navigate to service details */}
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Service;
