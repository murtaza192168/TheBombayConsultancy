import React from 'react'
import { useNavigate } from 'react-router-dom';
const VATCorporateTaxCompliance = () => {
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
        <h1 className="display-4 section-header">VAT & Corporate Tax Compliance and Advisory Services</h1>
        <p className="lead text-muted">Comprehensive tax solutions for compliance, efficiency, and optimized financial outcomes.</p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4 section-overview">
          <h3 className="fw-bold">Overview</h3>
          <p>
          Our VAT and Corporate Tax Consultancy services are designed to ensure your business complies with UAE tax regulations while optimizing tax efficiency. From expert guidance on VAT registration and return filing to tailored corporate tax strategies, we provide you with the tools to minimize liabilities and streamline reporting. With ongoing updates on UAE tax laws, audit assistance, and support for precise record-keeping, we help you maintain compliance and enhance your financial operations.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h3 className="fw-bold">Services Offered</h3>
          <ul className="list-group service-list">
            <li className="list-group-item service-list-item">Expert VAT and corporate tax registration services.



            </li>
            <li className="list-group-item service-list-item">Guidance on VAT return filing, reporting, and compliance.



            </li>
            <li className="list-group-item service-list-item">Corporate tax advisory tailored to minimize tax liabilities.


            </li>
            <li className="list-group-item service-list-item">Regular updates on changes in UAE tax laws and regulations.


            </li>
            <li className="list-group-item service-list-item">Assistance with tax audits and representation.



            </li>
            <li className="list-group-item service-list-item">Strategic tax planning to maximize tax efficiency.



            </li>
            <li className="list-group-item service-list-item">Record-keeping support for seamless audits.


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

export default VATCorporateTaxCompliance