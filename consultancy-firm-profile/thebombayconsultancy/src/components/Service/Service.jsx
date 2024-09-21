import React, {useState, useEffect} from 'react';
import styles from './Service.module.css';

import {ServiceCard} from "./ServiceCard";


 const Service = () => {
  
    const [services, setServices] = useState([]);
    useEffect(() =>{
      
        const fetchServices = async () => {
          
            try{
                // ftch data from the server endpoint
                // using await to wait for the promise to resolve and get the data
                const response = await fetch('https://thebombayconsultancy.onrender.com/api/services');
                //Custom Exception applied using throw keyword :additional handling with a condition
                if(!response.ok){
                  throw new Error('Network response was not ok');
                }

                // Parse the JSON response
                const data = await response.json();
                // update the state with the fetched data
                setServices(data);
            }catch(err){
                console.error('Error while fetching services', err);
            }
        }
        // invoke the function
        fetchServices();
    }, []) // Empty dependency array means this effect runs only once

    

  return (
    <section id='service' className={styles.container}>
            <h2 className={styles.title}> Services We Offer</h2>
            <div className={styles.services}>
                <ul>
                    {/* Map through the services array and render each service */}
                    {services.map((service, id) => {
                      return  (
                        <ServiceCard key={id} service={service}/>
                      )
                        //  <div key={id}>
                        // <li >
                        //     {/* Display the name and description of each service */}
                        //     <img src={getImageUrl(service.imageSrc)} alt={Image of ${service.title}} />
                        //     <h3>{service.title}</h3>
                        //     <p>{service.description}</p>
                        //     <a href={service.links}>Read more</a>
                        // </li>
                        // </div>
                        
 })}
                </ul> 
                
            </div>
            
        </section>
  )
}

export default Service;