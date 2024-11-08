import React, { useState, useEffect, useRef } from 'react';
import { getImageUrl } from '../../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            ref={sectionRef}
            className={`py-5 bg-light ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-50'} transition-opacity transition-transform duration-800`}
        >
            <div className="container">
                <h1 className="text-center mb-4 display-4 text-dark">Welcome to F J Accounting & Consultancy LLC</h1>
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
                            At <span className="text-secondary font-weight-bold">F J Accounting & Consultancy LLC</span>, we are committed to delivering comprehensive accounting, tax, and advisory services tailored to the diverse needs of businesses across the UAE. Established by two highly accomplished Chartered Accountants, our firm is built on a foundation of expertise, trust, and an unwavering commitment to excellence.
                        </p>
                    </div>
                    <div className="col-12">
                        <h3 className="display-5 text-secondary border-left border-secondary pl-3 mb-3">Our Founders</h3>
                        <p className="lead text-justify text-muted">
                            With over 30 years of experience in the UAE, <span className="text-primary font-weight-bold">CA Fakhruddin Sethjiwala</span>, a Chartered Accountant and US CPA, brings unmatched insights into the region's financial landscape, supported by his extensive experience across multiple industries. Complementing him, <span className="text-primary font-weight-bold">Juzer Doctor</span>, a Chartered Accountant with a track record of success in corporate tax, bookkeeping, and financial compliance, ensures a hands-on, client-focused approach. Together, they have established a firm that prioritizes client success and upholds the highest standards of integrity and professionalism.
                        </p>
                    </div>
                    <div className="col-12">
                        <h3 className="display-5 text-secondary border-left border-secondary pl-3 mb-3">Our Services</h3>
                        <ul className="list-unstyled">
                            {[
                                { title: 'Accounting & Bookkeeping', description: 'Accurate record-keeping for informed decision-making.' },
                                { title: 'Corporate Tax & VAT Compliance', description: 'Full compliance with UAE tax regulations while optimizing your tax position.' },
                                { title: 'Audit & Assurance', description: 'Independent audits to build stakeholder confidence in your financial reports.' },
                                { title: 'Business Setup & Advisory', description: 'Guidance on company formation and business strategy for mainland, free zone, or offshore entities.' },
                                { title: 'Financial Reporting & Analysis', description: 'Detailed insights to support sustainable growth and effective risk management.' }
                            ].map((service, index) => (
                                <li key={index} className="bg-white border rounded p-3 mb-2 shadow-sm transition-transform duration-300 hover:bg-light hover:translate-y-1">
                                    <span className="text-dark font-weight-bold">{service.title}:</span> {service.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12">
                        <h3 className="display-5 text-secondary border-left border-secondary pl-3 mb-3">Why Choose Us?</h3>
                        <p className="lead text-justify text-muted">
                            With decades of combined experience and a deep understanding of the UAE’s regulatory environment, <span className="text-secondary font-weight-bold">F J Accounting & Consultancy LLC</span> provides practical, precise, and results-driven solutions. Our personalized approach ensures each client receives the dedicated attention needed to navigate today’s complex business landscape, helping them achieve their goals with confidence and clarity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
