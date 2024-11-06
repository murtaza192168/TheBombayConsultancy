import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const AccountingAndBookkeeping = () => {
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
                <h1 className="display-4 section-header">Accounting and Bookkeeping</h1>
                <p className="lead text-muted">Your trusted partner for financial management.</p>
            </div>
            
            <div className="row">
                <div className="col-md-6 mb-4 section-overview">
                    <h3 className="fw-bold">Overview</h3>
                    <p>
                        Our Accounting and Bookkeeping services provide comprehensive financial record management tailored to your business needs, ensuring accuracy and compliance.
                    </p>
                </div>
                <div className="col-md-6 mb-4">
                    <h3 className="fw-bold">Services Offered</h3>
                    <ul className="list-group service-list">
                        <li className="list-group-item service-list-item">Comprehensive financial record management tailored to your business.</li>
                        <li className="list-group-item service-list-item">Monthly, quarterly, and annual financial statements.</li>
                        <li className="list-group-item service-list-item">Real-time tracking of income and expenses for better budgeting.</li>
                        <li className="list-group-item service-list-item">Payroll processing and reconciliation.</li>
                        <li className="list-group-item service-list-item">Accounts payable and receivable management.</li>
                        <li className="list-group-item service-list-item">Bank reconciliation and cash flow tracking.</li>
                        <li className="list-group-item service-list-item">Compliance with UAE financial regulations and standards.</li>
                    </ul>
                </div>
            </div>

            <div className="text-center">
                <a 
                    href="https://wa.me/971501085253?text=Hello%2C%20I%27m%20interested%20in%20your%20Accounting%20and%20Bookkeeping%20services." 
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

export default AccountingAndBookkeeping;
