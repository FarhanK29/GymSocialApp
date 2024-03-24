// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG-sKqu4lSh4F0D_qLMJdHZWyePn-xHbU",
  authDomain: "gymbuddy-6220d.firebaseapp.com",
  projectId: "gymbuddy-6220d",
  storageBucket: "gymbuddy-6220d.appspot.com",
  messagingSenderId: "3877726239",
  appId: "1:3877726239:web:f74142ceec54c842398d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
export const db = getFirestore(app);