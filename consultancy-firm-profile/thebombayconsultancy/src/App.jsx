import { useEffect } from 'react'; 
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service'
import CareerForm from './components/CareerForm/CareerForm';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
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
      <Navbar />
      <Hero />
      <About/>
      <Service/>

      <CareerForm/>
      <Footer/>
    </div>
  )
}

export default App
