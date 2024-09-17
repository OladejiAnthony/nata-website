// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXXTKGaZEs5ydSKw_Cv0AB67kkTlj9Y5M",
  authDomain: "nata-website-efb71.firebaseapp.com",
  projectId: "nata-website-efb71",
  storageBucket: "nata-website-efb71.appspot.com",
  messagingSenderId: "911665204295",
  appId: "1:911665204295:web:87d7c6b4f6354b2423f562",
  measurementId: "G-8WK71P9X6B"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

