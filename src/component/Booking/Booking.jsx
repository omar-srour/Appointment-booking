import React, { useState } from "react";
import { db } from "../../../src/Firebase"; // استيراد Firestore
import { collection, addDoc } from "firebase/firestore";
import "./Booking.css";
const Booking = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      setMessage("Please fill all fields!");
      return;
    }

    try {
      await addDoc(collection(db, "appointments"), {
        name,
        date,
        time,
      });

      setMessage("Appointment booked successfully!");
      setName("");
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Error booking appointment:", error);
      setMessage("Failed to book appointment.");
    }
  };

  return (
    <div className="bookingg">
      <h2 className="h22">Book Your Appointment</h2>
      {message && <p className="confirmation">{message}</p>}
      <form className="formm" onSubmit={handleBooking}>
        <input
        className="inputt"
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        className="inputt"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
        className="inputt"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button className="buttonn" type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default Booking;
