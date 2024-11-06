import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const BusinessPlanning = () => {
    const navigate = useNavigate();

    return (
        <section className="container my-5">
            <style>
                {`
                .section-header {
                    margin-bottom: 1.5rem;
                    color: #2c3e50;
                }
                .section-overview {
                    background-color: #f7f9fc;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    margin-bottom: 2rem;
                }
                .service-list {
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    padding: 0;
                }
                .service-list-item {
                    transition: background-color 0.3s;
                }
                .service-list-item:hover {
                    background-color: #e9ecef;
                }
                .contact-btn, .back-btn {
                    margin-top: 1.5rem;
                }
                .btn-custom {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-size: 16px;
                }
                .btn-custom:hover {
                    background-color: #0056b3;
                }
                `}
            </style>

            <div className="text-center mb-4">
                <h1 className="display-4 section-header">Business Planning</h1>
                <p className="lead text-muted">Strategic guidance to set your business on a path to success.</p>
            </div>
            
            <div className="row">
                <div className="col-md-6 mb-4 section-overview">
                    <h3 className="fw-bold">Overview</h3>
                    <p>
                        Our Business Planning services are designed to help you develop a clear, strategic roadmap tailored to your specific goals and market conditions. From startup planning to growth strategies, we ensure your business is primed for success.
                    </p>
                </div>
                <div className="col-md-6 mb-4">
                    <h3 className="fw-bold">Services Offered</h3>
                    <ul className="list-group service-list">
                        <li className="list-group-item service-list-item">Market analysis and competitive positioning.</li>
                        <li className="list-group-item service-list-item">Business model development and refinement.</li>
                        <li className="list-group-item service-list-item">Financial forecasting and budgeting.</li>
                        <li className="list-group-item service-list-item">Risk assessment and management strategies.</li>
                        <li className="list-group-item service-list-item">Operational planning and resource allocation.</li>
                        <li className="list-group-item service-list-item">Support for investment and funding acquisition.</li>
                        <li className="list-group-item service-list-item">Tailored strategies for market expansion and growth.</li>
                    </ul>
                </div>
            </div>

            <div className="text-center">
                <a 
                    href="https://wa.me/971501085253?text=Hello%2C%20I%27m%20interested%20in%20your%20Business%20Planning%20services." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-custom contact-btn"
                >
                    Contact Us 
                </a>
                <button
                    className="btn btn-custom back-btn ms-3"
                    onClick={() => navigate("/")}
                >
                    Back to Home
                </button>
            </div>
        </section>
    );
};

export default BusinessPlanning;
