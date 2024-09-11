import React, { useEffect, useRef } from 'react';
import { getImageUrl } from '../../utils';
import styles from './ServiceCard.module.css';

export const ServiceCard = ({ service: { imageSrc, title, description, readMore } }) => {
  // Create a ref to keep track of the card
  const cardRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver to check when the card enters the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'visible' class when the card is in the viewport
          entry.target.classList.add(styles.visible);
          // Unobserve the card once it becomes visible
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe the card element
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div className={styles.container} ref={cardRef}>
      <li>
        {/* Display the name and description of each service */}
        <img className={styles.image} src={imageSrc} alt={`Image of ${title}`} loading="lazy" />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a className={styles.link} href={readMore}>Read more</a>
      </li>
    </div>
  );
};

export default ServiceCard;
