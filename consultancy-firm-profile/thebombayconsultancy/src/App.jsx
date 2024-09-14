
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service'
import Career from './components/Career/Career';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
function App() {
 

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About/>
      <Service/>

      {/* <Career/> */}
      <Footer/>
    </div>
  )
}

export default App
