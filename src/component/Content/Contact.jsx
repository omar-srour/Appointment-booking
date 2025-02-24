import React from 'react';
import './Contact.css';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2 
  });

  return (
    <div id="contact" ref={ref} className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact Us</h2>
        <p>Have a question? Feel free to reach out to us!</p>
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="custom-btn">Send Message</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
