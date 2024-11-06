import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CareerForm.css";

const CareerForm = () => {
  const [showModal, setShowModal] = useState(false);
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
      // const response = await fetch('http://localhost:3000/api/careers',{
      const response = await fetch('https://thebombayconsultancy.onrender.com/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '', email: '', query: '' });
      } else {
        console.error('Submission failed!');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <section id="careerform" className="py-5 bg-light d-flex flex-column align-items-center">
      <div className="container p-4 bg-white rounded shadow-sm" style={{ maxWidth: '500px' }}>
        <h1 className="text-center mb-4">Reach out to us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email Id"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label fw-semibold">Your Query</label>
            <textarea
              id="query"
              name="query"
              placeholder="How can we help you?"
              value={formData.query}
              onChange={handleChange}
              required
              className="form-control"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">Submit</button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-success">Success</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <svg className="bi bi-check-circle" width="50" height="50" fill="green" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97l5.46-5.47-1.415-1.415L6.97 8.586 5.48 7.096 4.065 8.51l2.905 2.906z"/>
                </svg>
                <p className="mt-3">Query submitted successfully!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CareerForm;
