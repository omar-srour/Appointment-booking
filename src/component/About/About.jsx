import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // استخدام `useInView` لاكتشاف متى يصبح العنصر مرئيًا
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2 
  });

  return (
    <div id='about' ref={ref}>
      <section className="about-section">
        <div className="about-container">
        
          <motion.img 
            src="/Images/Free Photo _ Dentist doing a check up on the patient.jpeg" 
            alt="About Us" 
            className="about-image"
            initial={{ x: -100, opacity: 0 }}  
            animate={inView ? { x: 0, opacity: 1 } : {}} // يحدث فقط عند الظهور
            transition={{ duration: 1 }}
          />

       
          <motion.div 
            className="about-text"
            initial={{ y: 50, opacity: 0 }}  
            animate={inView ? { y: 0, opacity: 1 } : {}}  
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2>About Our Dental Clinic</h2>
            <p>
              We provide high-quality dental care with the latest technology to ensure your comfort and a healthy smile.
            </p>
            <p>
              Our experienced team is dedicated to offering professional services in a relaxing environment.
            </p>
            <button className="custom-btn">Learn More</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
