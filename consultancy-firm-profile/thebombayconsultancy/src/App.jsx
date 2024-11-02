import { useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

import Service from './components/Service/Service';
// import ServiceDetail from './components/ServiceDetail';
import AccountingAndBookkeeping from './pages/AccountingAndBookkeeping';
import VATCorporateTaxCompliance from './pages/VATCorporateTaxCompliance';
import CompanyFormationLiquidation from './pages/CompanyFormationLiquidation';
import NRITaxation from './pages/NRITaxation';
import InternalAudit from './pages/InternalAudit';
import ProjectReports from './pages/ProjectReports';
import BusinessPlanning from './pages/BusinessPlanning';

import CareerForm from './components/CareerForm/CareerForm';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // Get hash from URL
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  // useEffect(() => {
  //   const preventDrag = (event) => {
  //     event.preventDefault();
  //   };
  
  //   document.addEventListener('mousedown', preventDrag);
  
  //   return () => {
  //     document.removeEventListener('mousedown', preventDrag);
  //   };
  // }, []);
  

  return (
    <div className={styles.App}>
  

      <Router>
      <ScrollToSection />
      <Navbar />
      <Hero />
      <Service/>
      <Routes>
        
        <Route path="/services/accounting-and-bookkeeping" element={<AccountingAndBookkeeping />} />
        <Route path="/services/vat-corporate-tax-compliance" element={<VATCorporateTaxCompliance />} />
        <Route path="/services/company-formation-liquidation" element={<CompanyFormationLiquidation />} />
        <Route path="/services/nri-taxation" element={<NRITaxation />} />
        <Route path="/services/internal-audit" element={<InternalAudit />} />
        <Route path="/services/project-reports" element={<ProjectReports />} />
        <Route path="/services/business-planning" element={<BusinessPlanning />} />
        
      </Routes>
      <About/>
      <CareerForm/>
      <Footer/>
      </Router>
    </div>

   
    
  )
}

export default App
