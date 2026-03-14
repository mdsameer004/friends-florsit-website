import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section brand-section">
          <h3>Friends Florist</h3>
          <p>Delivering premium floral arrangements and curated gifts to your doorstep with love and care.</p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/shop">Shop Collection</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section policies-section">
          <h4>Information</h4>
          <ul>
            <li><Link to="/delivery">Delivery Policy</Link></li>
            <li><Link to="/returns">Returns & Refunds</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <ul>
            <li><MapPin size={16} /> 123 Floral Avenue, Rose City, 45678</li>
            <li><Phone size={16} /> +91 98765 43210</li>
            <li><Mail size={16} /> hello@friendsflorist.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Friends Florist. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
