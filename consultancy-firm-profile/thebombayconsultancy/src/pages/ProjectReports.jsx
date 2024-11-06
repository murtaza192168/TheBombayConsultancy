import React from 'react'
import { useNavigate } from 'react-router-dom';
const ProjectReports = () => {
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
              <h1 className="display-4 section-header">Detailed Project Reporting & Feasibility Analysis</h1>
              <p className="lead text-muted">Empowering your business with precise reports and financial projections for successful project planning and funding.</p>
          </div>
          
          <div className="row">
              <div className="col-md-6 mb-4 section-overview">
                  <h3 className="fw-bold">Overview</h3>
                  <p>
                  Our Project Reporting services offer comprehensive insights into the feasibility and profitability of your business ventures. From industry research and market analysis to detailed profit and loss forecasts, we equip you with the tools needed for sound decision-making. We prepare in-depth project reports that adhere to UAE standards, supporting your efforts to secure funding or investment. With our financial projections, break-even analysis, and risk mitigation strategies, you’ll gain a clear roadmap for project success and sustainable growth.
                  </p>
              </div>
              <div className="col-md-6 mb-4">
                  <h3 className="fw-bold">Services Offered</h3>
                  <ul className="list-group service-list">
                      <li className="list-group-item service-list-item">Feasibility studies for potential business ventures.


                      </li>
                      <li className="list-group-item service-list-item">Financial projections and cost analysis for informed decision-making.


                      </li>
                      <li className="list-group-item service-list-item">Comprehensive project report preparation for funding or investment.


                      </li>
                      <li className="list-group-item service-list-item">Industry research and market analysis.

                      </li>
                      <li className="list-group-item service-list-item">Detailed profit and loss forecasts and break-even analysis.


                      </li>
                      <li className="list-group-item service-list-item">Recommendations for project optimization and risk mitigation.


                      </li>
                      <li className="list-group-item service-list-item">Compliance with UAE standards for project reporting.

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

export default ProjectReports