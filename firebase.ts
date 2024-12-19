// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWhX0XK0J53DXarFiN3HwSTFeXNrOQgsE",
  authDomain: "otp-project-4f164.firebaseapp.com",
  projectId: "otp-project-4f164",
  storageBucket: "otp-project-4f164.firebasestorage.app",
  messagingSenderId: "734263486621",
  appId: "1:734263486621:web:20a0474b373f210e708c74",
  measurementId: "G-L2KQP224ZZ"
};

// Initialize Firebase
const app = getApps().length === 0? initializeApp(firebaseConfig): getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export {auth};