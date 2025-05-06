import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure icons are available

emailjs.init('XKQeAilQN_jwiHS3-');

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rrubs0b',
        'template_2hmpby5',
        form.current,
        'XKQeAilQN_jwiHS3-'
      )
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        alert(`Failed to send message: ${error.text}`);
      });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Contact Us</h2>

      {/* Contact Info Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card contact-card h-100 shadow-sm text-center">
            <div className="card-body">
              <i className="bi bi-geo-alt-fill display-5 text-danger mb-3"></i>
              <h5 className="card-title">Our Address</h5>
              <p className="card-text">2nd Floor, Haven Court, Opp Lion Place,<br /> Along Waiyaki Way Westlands, Nairobi</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card contact-card h-100 shadow-sm text-center">
            <div className="card-body">
              <i className="bi bi-envelope-fill display-5 text-primary mb-3"></i>
              <h5 className="card-title">Email</h5>
              <p className="card-text">
                <a href="mailto:homeglow86@gmail.com" className="text-decoration-none text-dark">
                  homeglow86@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card contact-card h-100 shadow-sm text-center">
            <div className="card-body">
              <i className="bi bi-telephone-fill display-5 text-success mb-3"></i>
              <h5 className="card-title">Support</h5>
              <p className="card-text">+254 723 138 601<br />(Mon - Fri, 9AM - 6PM)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form ref={form} onSubmit={sendEmail} className="card p-4 shadow-sm">
            <h4 className="mb-3"><i className="bi bi-chat-dots-fill me-2"></i>Send us a message</h4>
            <div className="mb-3">
              <label>Your Name</label>
              <input type="text" name="user_name" className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Your Email</label>
              <input type="email" name="user_email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Your Message</label>
              <textarea name="message" rows="5" className="form-control" required></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100">
              <i className="bi bi-send-fill me-2"></i>Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
