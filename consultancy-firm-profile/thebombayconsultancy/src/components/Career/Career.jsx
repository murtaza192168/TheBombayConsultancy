import React, { useState } from 'react';
import axios from 'axios';
import styles from './Career.module.css'; // Import CSS module

const CareerSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null
  });
  const [message, setMessage] = useState('');

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value // Set file or other input values
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file upload
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('resume', formData.resume);

    try {
      const response = await axios.post('/api/apply', form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Server response:', response); // Log response for debugging
      setMessage('Thank you for your application. We will review it and get back to you soon.');
    } catch (error) {
      console.error('Error during application submission:', error.response || error.message); // Improved error logging
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id='career' className={styles.careerSectionWrapper}> {/* Section wrapping the entire content */}
      <h2 className={styles.sectionHeading}>Apply for a Career</h2> {/* Section heading */}
      <div className={styles.careerSection}> {/* Form container */}
        <form onSubmit={handleSubmit}> {/* Form submission handler */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className={styles.fileInput}
            required
          />
          <button type="submit" className={styles.submitButton}>Apply</button> {/* Submit button */}
        </form>
        {message && <p className={styles.submissionMessage}>{message}</p>} {/* Success/Error message */}
      </div>
    </section>
  );
};

export default CareerSection;
