import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Send notification to YOUR email
      await emailjs.sendForm(
        'service_lrt4ats',
        'template_c7onal5', // Contact Us template
        form.current,
        'sIJvaLxQvq1WPqzwV'
      );

      alert('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error('Error:', error);
      alert(`Failed to send: ${error.text}`);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input 
              type="text" 
              name="from_name" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="from_email" 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              required
              minLength="10"
            ></textarea>
          </div>
          <button className="cta-button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;