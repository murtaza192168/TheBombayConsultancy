import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
       <div className={styles.content}>
        <h1 className={styles.title}>Your Trusted Partner
        in Financial Growth</h1>
        <p className={styles.description}>At <span className={styles.highlight}>TheBombayConsultancy</span>, 
we deliver expert financial solutions designed 
to drive your success 
</p>

<a className={styles.contactBtn} href="https://wa.me/971501085253"><i class="fab fa-whatsapp"></i>Get in touch</a>
       </div>
       <img className={styles.heroImg} src={getImageUrl('hero/heroImage2.png')} alt="hero image" />
    </section>
  )
}

export default Hero