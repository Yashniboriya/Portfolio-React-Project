// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp7H2ju5yCExcZJhd4VP0Wy7qW2oIZrf4",
  authDomain: "react-portfolio-yash7.firebaseapp.com",
  projectId: "react-portfolio-yash7",
  storageBucket: "react-portfolio-yash7.appspot.com",
  messagingSenderId: "123019748328",
  appId: "1:123019748328:web:a3abba6a172dde8f7e3a5d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
