// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC22gyapweJxKOH1JFYTk66a6v3YQqs22M",
  authDomain: "tianahs-fragrance.firebaseapp.com",
  projectId: "tianahs-fragrance",
  storageBucket: "tianahs-fragrance.appspot.com",
  messagingSenderId: "243945543282",
  appId: "1:243945543282:web:72167c578e4bb3e78294eb",
  measurementId: "G-4G2MWXR5XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

