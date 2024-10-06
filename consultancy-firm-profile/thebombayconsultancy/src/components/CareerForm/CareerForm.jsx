import { useState, useEffect } from 'react';
import styles from "./CareerForm.module.css";
import { getImageUrl } from '../../utils';

const CareerForm = () => {
    // useState: for STATE MANAGEMENT
    const [showModal, setShowModal] = useState(false); // false: initially dont show modal 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch('https://thebombayconsultancy.onrender.com/api/careers', {
       const response = await fetch('http://localhost:3000/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) { // if true? it is a successfull API call
        setShowModal(true); // show the popup and
        setFormData({name:'', email:'', coverLetter: ''}); // Reset all fields

      } else {
        console.error('Submission failed!')
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }

  };
  const closeModal = () => {
    setShowModal(false); // function to close Modal
  }
  
  return (
    <section id='careerform' className={styles.careerSection} >
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Join Our Team</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter full name'
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter email Id'
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="coverLetter" className={styles.formLabel}>Cover Letter</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              placeholder='Why should we Hire You?'
              value={formData.coverLetter}
              onChange={handleChange}
              required
              className={styles.formTextarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit Application</button>
        </form>
      </div>
      {/* Modal POP-UP & CLOSE DOWN*/}
      {showModal && (
        <div className={styles.modal}>
        <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>&times;</span>
            <div className={styles.checkmarkContainer}>
      <svg className={styles.checkmark} viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          d="M1 12l5 5L23 2"
        />
      </svg>
    </div>
            <p>Application submitted successfully!</p>
        </div>
      </div>
      )
      }
      
    </section>
  );
};

export default CareerForm;
