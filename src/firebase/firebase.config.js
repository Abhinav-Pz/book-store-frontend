// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU1T6nRkcFPhg4jZjcf9HgB9na9i4OdOU",
  authDomain: "mern-book-inventory-6540e.firebaseapp.com",
  projectId: "mern-book-inventory-6540e",
  storageBucket: "mern-book-inventory-6540e.appspot.com",
  messagingSenderId: "371368161965",
  appId: "1:371368161965:web:232342d71387cf75d64c24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;