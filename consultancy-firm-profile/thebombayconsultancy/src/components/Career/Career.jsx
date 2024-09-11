import React, { useState } from 'react';
import axios from 'axios';
import styles from './Career.module.css'; // Import CSS module

const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [message, setMessage] = useState('');

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value // Set the input values for name and email
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/apply', formData, {
                headers: { 'Content-Type': 'application/json' }
            });
            setMessage(response.data.message || 'Thank you for your application. We will review it and get back to you soon.');
        } catch (error) {
            console.error('Error from server:', error.response ? error.response.data : error.message); // Log the error details
            setMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <section id='career' className={styles.careerSectionWrapper}> {/* Section wrapping the entire content */}
            <h2 className={styles.sectionHeading}>Apply for a Career</h2> {/* Section heading */}
            <div className={styles.careerSection}> {/* Form container */}
                <form action='' method='POST' onSubmit={handleSubmit}> {/* Form submission handler */}
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
                    <button type="submit" className={styles.submitButton}>Apply</button> {/* Submit button */}
                </form>
                {message && <p className={styles.submissionMessage}>{message}</p>} {/* Success/Error message */}
            </div>
        </section>
    );
};

export default Career;
