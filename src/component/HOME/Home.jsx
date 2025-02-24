import React from 'react'
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import './home.css';
import About from '../About/About';
import Contact from '../Content/Contact';
import Footer from '../Footer/Footer';

const Home = () => {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <div>
      <Navbar />
      <div className='backk'>
        <div className='frist' ref={ref}>
          <div className='text'>
            <motion.h1
              initial={{ x: "-100vw", opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <h3>Welcome</h3>
              <h1>A.TEETH SMILE</h1>
              <p> Comprehensive Care for a Healthy Smile<br />
                We provide the latest dental treatments to <br /> ensure patient comfort
                and outstanding results.</p>
              <Button className="custom-btn1" href="/Signup">Get started</Button>
              <Button className="custom-btn1" href="/Signup">Signup</Button>
            </motion.h1>
          </div>

          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="/Images/Free Photo _ Close up on happy client in dental clinic.jpeg"
              alt="Sample" style={{ marginRight: "10px" }} />
          </motion.div>
        </div>

        <div className='icon'>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="/Images/tooth-clean-svgrepo-com.svg" alt="Tooth Icon" />
          </motion.div>
        </div>

        <About />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
