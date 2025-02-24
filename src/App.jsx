import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login&sign/Login";
import Signup from "./component/Login&sign/Signup";
import Home from "./component/HOME/Home";
import About from "./component/About/About";
import Booking from "./component/Booking/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking" element={<Booking />} />  
      </Routes>
    </Router>
  );
}

export default App;
