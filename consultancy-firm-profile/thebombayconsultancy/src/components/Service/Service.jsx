import React, { useState, useEffect } from 'react';
import { ServiceCard } from './ServiceCard';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <section id="service" className="container py-5">
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

export default Service;
