import React, { useState, useEffect, useRef } from 'react';
import { getImageUrl } from '../../utils';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            loading='lazy'
            id='about'
            ref={sectionRef}
            className={`py-5 bg-light ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-50'} transition-opacity transition-transform duration-800`}
        >
            <div className="container">
                <h1 className="text-center mb-4 display-4 text-dark">Who We Are?</h1>
                <div className="row justify-content-center mb-4">
                    <div className="col-12">
                        <img
                            className="img-fluid w-100"
                            style={{ height: '50vh', objectFit: 'cover' }}
                            src={getImageUrl('about/about_image.jpg')}
                            alt="About Us"
                        />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <p className="lead text-justify text-muted">
                            At <span className="text-secondary font-weight-bold">TheBombayConsultancy</span>, we are a one-stop firm offering accounting, auditing, and multi-disciplinary advisory services in finance and taxation. Our journey began in 2018 with the establishment of <span className="text-secondary font-weight-bold">J M Doctor & Associates</span> in Mumbai, India, providing top-tier accounting and financial services. Building on that success, we expanded our reach to the UAE in 2024, with a new office in Dubai.
                        </p>
                    </div>
                    <div className="col-12">
                        <p className="lead text-justify text-muted">
                            Originally headquartered in Mumbai, we now take immense pride in serving clients across the globe. By expertly managing their accounting, taxation, and business advisory needs, we simplify the lives of our clients and help them focus on growing their businesses.
                        </p>
                    </div>
                    <div className="col-12">
                        <h3 className="display-5 text-secondary border-left border-secondary pl-3 mb-3">Our Strengths</h3>
                        <p className="lead text-justify text-muted">
                            Our core strength lies in our dynamic and motivated leadership, driven by a passion for excellence in the financial and legal sectors. Our team of highly skilled professionals is multi-disciplinary and cross-functional, offering clients a range of specialized services:
                        </p>
                        <ul className="list-unstyled">
                            {[
                                'Company Formation in the UAE',
                                'Corporate Tax Advisory',
                                'VAT Consultancy',
                                'Pricing & Profitability',
                                'Budgeting & Cost Management',
                                'Internal Controls',
                                'Accounts Writing (Bookkeeping)',
                                'Finalization of Books of Accounts'
                            ].map((item, index) => (
                                <li key={index} className="bg-white border rounded p-3 mb-2 shadow-sm transition-transform duration-300 hover:bg-light hover:translate-y-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12">
                        <p className="lead text-justify text-muted">
                            With expertise in both local and international markets, we provide tailored solutions designed to meet the unique needs of each client. Whether you’re a startup seeking to establish operations in the UAE or an established business looking to streamline your financial processes, <span className="text-secondary font-weight-bold">The Bombay Consultancy</span> is here to provide expert guidance and support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
