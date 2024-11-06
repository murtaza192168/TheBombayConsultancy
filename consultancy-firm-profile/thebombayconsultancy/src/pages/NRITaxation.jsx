import React from 'react'
import { useNavigate } from 'react-router-dom';
const NRITaxation = () => {
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
              <h1 className="display-4 section-header">NRI Taxation Advisory Services</h1>
              <p className="lead text-muted">Comprehensive tax solutions tailored for Non-Resident Indians, ensuring compliance and tax efficiency</p>
          </div>
          
          <div className="row">
              <div className="col-md-6 mb-4 section-overview">
                  <h3 className="fw-bold">Overview</h3>
                  <p>
                  Our NRI Taxation services provide specialized guidance to help Non-Resident Indians navigate the complexities of taxation on income, investments, and property in India. From assistance with income tax returns and capital gains planning to strategies for avoiding double taxation through DTAA provisions, we ensure your tax obligations are managed effectively. Our team offers insight into evolving regulations, foreign asset reporting, and repatriation tax implications, empowering you to make informed financial decisions and maintain compliance across jurisdictions.
                  </p>
              </div>
              <div className="col-md-6 mb-4">
                  <h3 className="fw-bold">Services Offered</h3>
                  <ul className="list-group service-list">
                      <li className="list-group-item service-list-item">Advisory on income and investment taxes for NRIs.

                      </li>
                      <li className="list-group-item service-list-item">Assistance with filing income tax returns in India for NRIs.

                      </li>
                      <li className="list-group-item service-list-item">Guidance on avoiding double taxation with DTAA provisions.

                      </li>
                      <li className="list-group-item service-list-item">Capital gains tax planning and compliance.
                      </li>
                      <li className="list-group-item service-list-item">Support for tax implications on property sales and repatriation.

                      </li>
                      <li className="list-group-item service-list-item">Advisory on foreign assets and income reporting.

                      </li>
                      <li className="list-group-item service-list-item">Compliance assistance with evolving NRI tax regulations.

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

export default NRITaxation