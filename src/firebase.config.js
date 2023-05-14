// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5x-4O4_zQJyA8bhWbv5DCyMZsbwjYPMw",
  authDomain: "hayfa-ecd6e.firebaseapp.com",
  projectId: "hayfa-ecd6e",
  storageBucket: "hayfa-ecd6e.appspot.com",
  messagingSenderId: "579266385416",
  appId: "1:579266385416:web:2498e708a7b263adff63bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);