import React from 'react'
import { getImageUrl } from '../../utils';
export const ServiceCard = ({service:{imageSrc, title, description, links}}) => {
  return (
    <div >
                        <li>
                            {/* Display the name and description of each service */}
                            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <a href={links}>Read more</a>
                        </li>
        </div>
  )
}

export default ServiceCard