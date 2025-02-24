// pages/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();



  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Booking");
    } catch (err) {
      setError(err.message);
    }
  };



  const handleGoogleLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, provider);
      navigate("/Booking");
    } catch (err) {
      setError("حدث خطأ أثناء تسجيل الدخول عبر جوجل.");
    }
  };


  
  return (
    <div className="backbody">
      <div className="container">
        <div className="login-container">
          <div className="welcome">
            <h1>Welcome Back! </h1>
            <p>please enter your detiles</p>
          </div>

          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p className="forget">
            <a href="">Forgot your password?</a>
          </p>

          <button className="google-login" onClick={handleGoogleLogin}>
            <FcGoogle className="google-icon" />  Login with Google
          </button>

          <p >
            Don't have an account? <a href="/signup">Create an account</a>
          </p>
        </div>
        <div className="image-section"><img src="/Images/Battling Cavities_ Tips for Prevention and Treatment.jpeg" alt="" /></div>
      </div>
    </div>
  );
};

export default Login;
