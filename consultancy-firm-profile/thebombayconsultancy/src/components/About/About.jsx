import React, {useState, useEffect, useRef} from 'react';
import styles from "./About.module.css"
import {getImageUrl} from '../../utils'
const About = () => {
    const [isVisible, setIsVisible] = useState(false); // isVisible is a variable. setIsVisible is a function
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>{
                const entry = entries[0]; // took fisrt array element bcz here we want to work with a only one section
                setIsVisible(entry.isIntersecting);
                if(entry.isIntersecting){
                    observer.unobserve(sectionRef.current);
                }
            }, {threshold: 0.2}
        )
        // means that the section that you are going to visit, is it a valid DOM element on which we want to apply visibility changes / animation.
        // This ensures we don’t attempt to observe null or undefined elements.
        if(sectionRef.current){ observer.observe(sectionRef.current) }

        // The cleanup function ensures that the observer stops watching the section if the component is unmounted, preventing memory leaks.

        return () => {observer.unobserve(sectionRef.current)}

    }, []) // This empty array [] tells useEffect to run the observer setup only once when the component mounts.
    //The effect won't rerun on every render, ensuring performance is optimized.


  return (
    <section loading='lazy' id='about' ref={sectionRef} className={`${styles.container} ${isVisible ? styles.visible : ''} `}>
        
    <div className={styles.content}>
     <h1 className={styles.title}>About us</h1>
     <div className={styles.image_container}>
            <img className={styles.about_image} src={getImageUrl('about/about_image.png')} alt="" />
        </div>
     <div className={styles.para}>
     <p className={styles.description}>
        At <span className={styles.highlight}>The Bombay Consultancy</span>, we are a one-stop firm offering accounting, auditing, and multi-disciplinary advisory services in finance and taxation. Our journey began in 2018 with the establishment of <span className={styles.highlight}>J M Doctor & Associates</span>  in Mumbai, India, providing top-tier accounting and financial services. Building on that success, we expanded our reach to the UAE in 2024, with a new office in Dubai.
       </p>
     </div> {/*para1 end*/}
    <div className={styles.para}>
    <p className={styles.description}>
       Originally headquartered in Mumbai, we now take immense pride in serving clients across the globe. By expertly managing their accounting, taxation, and business advisory needs, we simplify the lives of our clients and help them focus on growing their businesses.
       </p>
    </div>{/*para2 end*/}

    <div className={styles.para}>
            <h3 className={styles.subtitle}>
             Our Strengths
            </h3>   
        <p className={styles.description}>
        Our core strength lies in our dynamic and motivated leadership, driven by a passion for excellence in the financial and legal sectors. Our team of highly skilled professionals is multi-disciplinary and cross-functional, offering clients a range of specialized services:
        <ul className={styles.list}>
            <li>Company Formation in the UAE</li>
            <li>Corporate Tax Advisory</li>
            <li>VAT Consultancy</li>
            <li>Pricing & Profitability</li>
            <li>Budgeting & Cost Management</li>
            <li>Internal Controls</li>
            <li>Accounts Writing (Bookkeeping)</li>
            <li>Finalization of Books of Accounts</li>
        </ul>
       </p>
    </div>{/*para3 end*/}

    <div className={styles.para}>
        <p className={styles.description}>
        With expertise in both local and international markets, we provide tailored solutions designed to meet the unique needs of each client. Whether you’re a startup seeking to establish operations in the UAE or an established business looking to streamline your financial processes, <span className={styles.highlight}>The Bombay Consultancy</span>  is here to provide expert guidance and support.
        </p>
    </div>
       
       
    </div>
 </section>
  )
}

export default About;