import React, {useState, useEffect} from 'react'
import styles from './Service.module.css'
import {getImageUrl} from "../../utils";
export const Service = () => {

    const [services, setServices] = useState([]);
    useEffect(() =>{
        const fetchServices = async () => {
            try{
                // ftch data from the server endpoint
                // using await to wait for the promise to resolve and get the data
                const response = await fetch(`http://localhost:8080/api/services`);
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
    <section>
        <h2>Services We Offer</h2>
        <div>
            
             <ul>
                {/* Map throught the services-array and render ech service */}
                {
                   services.map((service) => (
                    <li key={service._id}>
                      {/* Display the name and description of each service */}
                      <h2>{service.title}</h2>
                      <p>{service.description}</p>
                    </li>
                  ))
                }
             </ul>
            
        </div>
    </section>
  )
}

export default Service