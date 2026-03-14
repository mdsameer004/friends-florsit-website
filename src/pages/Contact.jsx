import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Whether you have a question about our arrangements, pricing, or anything else, our team is ready to answer all your questions.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          
          <div className="info-item">
            <MapPin size={24} className="info-icon" />
            <div>
              <h4>Our Shop</h4>
              <p>123 Floral Avenue<br/>Rose City, 45678</p>
            </div>
          </div>
          
          <div className="info-item">
            <Phone size={24} className="info-icon" />
            <div>
              <h4>Call Us</h4>
              <p>+91 98765 43210<br/>+91 98765 09876</p>
            </div>
          </div>
          
          <div className="info-item">
            <Mail size={24} className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>hello@friendsflorist.com<br/>support@friendsflorist.com</p>
            </div>
          </div>

          <div className="info-item">
            <Clock size={24} className="info-icon" />
            <div>
              <h4>Business Hours</h4>
              <p>Mon - Fri: 8:00 AM - 8:00 PM<br/>Sat - Sun: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h3>Send a Message</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help?" required />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Write your message here..." required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
