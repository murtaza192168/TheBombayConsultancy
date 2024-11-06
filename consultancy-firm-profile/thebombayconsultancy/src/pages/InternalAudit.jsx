import React from 'react'
import { useNavigate } from 'react-router-dom';
const InternalAudit = () => {
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
              <h1 className="display-4 section-header">Comprehensive Internal Audit Services</h1>
              <p className="lead text-muted">Ensuring robust risk management, compliance, and operational excellence for your business.</p>
          </div>
          
          <div className="row">
              <div className="col-md-6 mb-4 section-overview">
                  <h3 className="fw-bold">Overview</h3>
                  <p>
                  Our Internal Audit services provide an in-depth, independent assessment of your organization’s internal controls and processes. We work to identify potential risks, enhance compliance with industry standards, and improve operational efficiency. By offering proactive fraud prevention strategies and continuous audit solutions, we help safeguard the integrity and accuracy of your financial and operational data, empowering informed decision-making and sustainable business growth.
                  </p>
              </div>
              <div className="col-md-6 mb-4">
                  <h3 className="fw-bold">Services Offered</h3>
                  <ul className="list-group service-list">
                      <li className="list-group-item service-list-item">Identification and analysis of risks within business processes.
                      </li>
                      <li className="list-group-item service-list-item">Independent assessment of internal controls and systems.
                      </li>
                      <li className="list-group-item service-list-item">Recommendations to strengthen governance and compliance.
                      </li>
                      <li className="list-group-item service-list-item">Assurance on operational efficiency and effectiveness.
                      </li>
                      <li className="list-group-item service-list-item">Fraud detection and prevention strategies.
                      </li>
                      <li className="list-group-item service-list-item">Review of financial and operational data accuracy.
                      </li>
                      <li className="list-group-item service-list-item">Continuous auditing solutions for risk management.
                      </li>
                  </ul>
              </div>
          </div>

          <div className="text-center">
              <a 
                  href="https://wa.me/971501085253?text=Hello%2C%20I%27m%20interested%20in%20your%20Company%20Formation%20and%20Liquidation%20services." 
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

}

export default InternalAudit