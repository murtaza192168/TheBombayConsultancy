import React from 'react';
import axios from 'axios';
import styles from "./Career.module.css";
import { getImageUrl } from '../../utils';

const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: null
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => { // This function is called every time there’s a change in any form input (such as text input, email input, or file upload).
        const {name, value, files} = e.target;

        setFormData({
            ...formData, // coping existing form data to ensure that no other input field's data is lost.
            [name]: files? files[0]: value //The square brackets around name allow the field to be updated dynamically based on which input triggered the event (e.g., "name", "email", or "resume").
        })   // If files exists (meaning the input is a file input), it assigns files[0] to the state, which refers to the first file selected by the user.
       // If there are no files (meaning the input is a text or email input), it assigns the value of the input (e.g., the entered text or email) to the state.
    } //handleChange end

    const handleSubmit = async () => {
        //         Multipart Data: When dealing with file uploads, the FormData object allows you to handle binary files (like the resume) and text data (like name and email) together. This makes it suitable for sending both types of data in one HTTP request.
// Content-Type: By default, when using FormData, the browser sets the request's Content-Type header to multipart/form-data, which is necessary for sending files in an HTTP request.
const form = new FormData(); // FormData is a built-in JavaScript class used to construct a set of key-value pairs that represent form fields and their values.
form.append('name', formData.name); // The append() method is used to add data to the FormData object.
form.append('email', formData.email);
form.append('resume', formData.resume);

        try{
            await axios.post('/api/apply', form, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            setMessage('Thak you for your application. We will review it and get back to you soon.');
        }
        catch(error){
            setMessage('Something went wrong. Pease try again later.')
        }
    }// handleSubmit end



  return (
    <section id='career'>Careers</section>
  )
}

export default Career