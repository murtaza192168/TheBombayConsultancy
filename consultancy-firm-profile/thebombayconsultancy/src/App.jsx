
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service'

function App() {
 

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />

      <Service/>
    </div>
  )
}

export default App
