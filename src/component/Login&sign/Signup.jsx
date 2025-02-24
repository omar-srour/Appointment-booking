import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../Firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Signup with Google successful!");
    } catch (err) {
      setError(err.message);
    }
  };



  return (
    <div className="signup-container">

      <div className="containers">
        <div className="content">

          <h2>Signup</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>

            <p className="ready">
              Do you already have an account? <a href="/login">login</a>
            </p>
          </form>
          <div class="or-divider">
            <span>or</span>
          </div>
          <button onClick={handleGoogleSignup} className="google-btn">
            <FcGoogle /> Sign Up with Google
          </button>



        </div>
        <div className="image-section2"><img src="\Images\Battling Cavities_ Tips for Prevention and Treatment.jpeg" alt="" /></div>

      </div>
    </div>
  );
};

export default Signup;
