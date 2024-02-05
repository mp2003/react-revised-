// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmSBrpgOaB4sAsAGAGGNNwXpV1p0cb3Ww",
  authDomain: "otp-login-c48f9.firebaseapp.com",
  projectId: "otp-login-c48f9",
  storageBucket: "otp-login-c48f9.appspot.com",
  messagingSenderId: "559041649997",
  appId: "1:559041649997:web:371dd7e7e706a555db2b04",
  measurementId: "G-RX5K1F3F3P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
