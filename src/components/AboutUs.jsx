import React from 'react';
// Im importing a component called about us.css which ive created and applied all the styling concerning about us .jsx component
import './AboutUs.css'; // Custom styles

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to HomeGlow</h1>
          <p>Your destination for premium furniture and decor that transforms your home.</p>
        </div>
      </section>
      
      <section className="overview">
        <h2>Company Overview</h2>
        <div className="overview-content">
         <p>HomeGlow is an eCommerce platform offering high-quality furniture and home decor designed to elevate your living space. We believe in blending comfort, style, and functionality to create pieces that make every home unique and beautiful.</p>                     
          <img src="Images/l5.jpg" alt="HomeGlow Furniture" className="about-img" />
        </div>
      </section>

      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <div className="mission-vision-content">
          <p>
            Our mission is to provide premium home decor that reflects individual style and elevates living spaces. We aim to deliver timeless and sustainable pieces that contribute to a more comfortable and aesthetically pleasing home environment.
          </p>
          <p>
            Our vision is to be the top choice for furniture and decor, offering a wide range of products that suit different styles, tastes, and budgets, while maintaining exceptional quality and service.
          </p>
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose HomeGlow?</h2>
        <div className="features">
          <div className="feature">
            <img src="Images/quality.webp" alt="Premium Quality" className="feature-img" />
            <h3>Premium Quality</h3>
            <p>We source only the finest materials to ensure durability and luxury in every piece.</p>
          </div>
          <div className="feature">
            <img src="Images/delivery.png" alt="Fast Shipping" className="feature-img" />
            <h3>Fast Shipping</h3>
            <p>Get your products delivered quickly, wherever you are.</p>
          </div>
          <div className="feature">
            <img src="Images/cs.jpg" alt="Exceptional Service" className="feature-img" />
            <h3>Exceptional Service</h3>
            <p>Our customer service is always here to help with any questions or concerns.</p>
          </div>
        </div>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="Images/c.jpg" alt="John Doe" className="team-img" />
            <h3>Collins Modcom</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="Images/l.jpg" alt="Jane Smith" className="team-img" />
            <h3>Bridget Institute</h3>
            <p>COO, Operations</p>
          </div>
          <div className="team-member">
            <img src="Images/p.jpg" alt="Emily Johnson" className="team-img" />
            <h3>Peter Tech</h3>
            <p>Customer Support Lead</p>
          </div>
        </div>
      </section>

      <section className="customer-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="carousel">
          <div className="testimonial">
            <p>"The furniture I ordered was perfect! Exactly as described, and the quality is outstanding. Highly recommend HomeGlow!"</p>
            <p>- Sarah L.</p>
          </div>
          <div className="testimonial">
            <p>"Amazing experience! The customer service was excellent, and my living room looks stunning with my new furniture!"</p>
            <p>- David K.</p>
          </div>
          <div className="testimonial">
            <p>"Great company! I love the eco-friendly approach they take. It's awesome to know my purchases are sustainable."</p>
            <p>- Jessica M.</p>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us:</p>
        <p>Email: <a href="homeglow86@gmail.com">homeglow86@gmail.com</a></p>
        <p>Phone: +254 723 138 601</p>
      </section>

      <footer>
        <p>Thank you for choosing HomeGlow!</p>
      </footer>
    </div>
  );
}

export default AboutUs;
