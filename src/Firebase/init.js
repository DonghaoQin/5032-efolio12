// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtWCsa1vsJbM3ss8UUaWYtVGZfYyZVET8",
  authDomain: "week-7-donghao-qin.firebaseapp.com",
  projectId: "week-7-donghao-qin",
  storageBucket: "week-7-donghao-qin.appspot.com",
  messagingSenderId: "1028365532886",
  appId: "1:1028365532886:web:01629a44005de72cd11377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Initialize Firestore with the initialized app
const db = getFirestore(app);

export default db;
