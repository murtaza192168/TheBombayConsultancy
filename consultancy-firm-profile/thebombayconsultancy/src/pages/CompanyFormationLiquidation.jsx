import React from 'react'
import { useNavigate } from 'react-router-dom';

const CompanyFormationLiquidation = () => {
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
              <h1 className="display-4 section-header">Professional Company Formation & Liquidation Services</h1>
              <p className="lead text-muted">Seamlessly establish or wind down your business with expert support.</p>
          </div>
          
          <div className="row">
              <div className="col-md-6 mb-4 section-overview">
                  <h3 className="fw-bold">Overview</h3>
                  <p>
                      Our Company Formation and Liquidation services are tailored to help businesses navigate the setup and closing processes with ease and compliance. We ensure that every step, from documentation to legal formalities, is handled professionally.
                  </p>
              </div>
              <div className="col-md-6 mb-4">
                  <h3 className="fw-bold">Services Offered</h3>
                  <ul className="list-group service-list">
                      <li className="list-group-item service-list-item">End-to-end assistance for LLC, Free Zone, and Offshore companies.</li>
                      <li className="list-group-item service-list-item">Guidance on UAE's legal requirements for new businesses.</li>
                      <li className="list-group-item service-list-item">Assistance with obtaining trade licenses and permits.</li>
                      <li className="list-group-item service-list-item">Advice on choosing the best structure for your company.</li>
                      <li className="list-group-item service-list-item">Professional support for company liquidation, ensuring compliance.</li>
                      <li className="list-group-item service-list-item">Document preparation and submission for faster processing.</li>
                      <li className="list-group-item service-list-item">Post-establishment support for hassle-free operations.</li>
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

export default CompanyFormationLiquidation;
