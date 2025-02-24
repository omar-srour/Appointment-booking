import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <motion.footer
      ref={ref}
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-container">
        <div className="footer-logo">
          <h2>A.SMILE TEETH</h2>
          <p>Providing quality dental care for a healthier smile.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 A.SMILE TEETH. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
