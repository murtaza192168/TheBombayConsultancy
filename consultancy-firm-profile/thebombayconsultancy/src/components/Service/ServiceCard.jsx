import React, { useEffect, useRef } from 'react';
import { getImageUrl } from '../../utils';
import "./ServiceCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ServiceCard = ({ service: { imageSrc, title, description, readMore } }) => {
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
      <img
        className="card-img-top"
        src={imageSrc}
        alt={`Image of ${title}`}
        loading="lazy"
        style={{ borderRadius: '1px' }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={readMore} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
