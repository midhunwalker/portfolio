import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Social Links */}
          <div className="footer-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/midhun-p-618729301/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/midhunwalker" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
                <span>GitHub</span>
              </a>
              <a href="https://www.instagram.com/itsmidhunp" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h4>Direct Contact</h4>
            <div className="contact-info">
              <a href="mailto:midhunpparakkottil@gmail.com">
                <FaEnvelope className="icon" />
                <span>midhunpparakkottil@gmail.com</span>
              </a>
              <a href="tel:+916238319936">
                <FaPhone className="icon" />
                <span>+91 6238 319 936</span>
              </a>
              <a href="https://wa.me/916238319936" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="icon" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Midhun P. All rights reserved.</p>
          <p>Full-Stack Developer | MERN Specialist</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;