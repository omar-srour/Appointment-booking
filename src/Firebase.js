import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnS0BGWZQSZJ0OiaSggN8aBZfIWHqQ9UE",
  authDomain: "appointment-booking-ea407.firebaseapp.com",
  projectId: "appointment-booking-ea407",
  storageBucket: "appointment-booking-ea407.appspot.com", // تم تصحيح الخطأ هنا
  messagingSenderId: "681027068054",
  appId: "1:681027068054:web:7c4ccd41752b14f0b762b7",
  measurementId: "G-CKCY8X8V0B"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// تهيئة المصادقة (Authentication)
export const auth = getAuth(app);

// تهيئة Firestore (قاعدة البيانات)
export const db = getFirestore(app);
