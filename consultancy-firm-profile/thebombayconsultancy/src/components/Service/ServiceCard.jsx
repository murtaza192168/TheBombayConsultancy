import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './ServiceCard.module.css';
export const ServiceCard = ({service:{imageSrc, title, description, readMore}}) => {
  return (
    <div className={styles.container} >
                        <li>
                            {/* Display the name and description of each service */}
                            <img className={styles.image} src={imageSrc} alt={`Image of ${title}`} />
                            <h3 className={styles.title}>{title}</h3>
                            <p className={styles.description}>{description}</p>
                            <a className={styles.link} href={readMore}>Read more</a>
                        </li>
        </div>
  )
}

export default ServiceCard