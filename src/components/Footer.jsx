import React from 'react';
import './Footer.css'; // Ensure this CSS file is linked
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <img src="Images/h1.webp" alt="HomeGlow Logo" className="footer-logo" />
          <div className="footer-brand-name">HomeGlow</div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:homeglow86@gmail.com?subject=Support%20Request&body=Hello%20HomeGlow%20team%2C%0D%0A%0D%0AI%20need%20help%20with..."
              className="email-link"
            >
              homeglow86@gmail.com
            </a>
          </p>
          <p>Phone: +254 723 138 601</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>


          <li>
              <a href="https://instagram.com/homeg_low" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
            <a href="https://pinterest.com/HomeGlow86" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest-p"></i> Pinterest
              </a>
            <li>
              <a href="https://facebook.com/homeg_low" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
           
            <li>
              <a href="https://twitter.com/homeglow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            
              
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Subscribe</h4>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom mt-4">
        &copy; {new Date().getFullYear()} HomeGlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
