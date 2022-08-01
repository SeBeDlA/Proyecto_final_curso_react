// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbzMUKINxAtNxcX4O3yXFWMRSjrKwVIlQ",
  authDomain: "ecomerce-final.firebaseapp.com",
  projectId: "ecomerce-final",
  storageBucket: "ecomerce-final.appspot.com",
  messagingSenderId: "1084079286631",
  appId: "1:1084079286631:web:f83c2d08d7f7cddc00e7c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
export const auth = getAuth(app)