import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBCnzOJzpM0eg0gMHiTsyKHTg4qP61ClSA",
  authDomain: "test-bf5e4.firebaseapp.com",
  databaseURL: "https://test-bf5e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-bf5e4",
  storageBucket: "test-bf5e4.firebasestorage.app",
  messagingSenderId: "131268407638",
  appId: "1:131268407638:web:9a35aa84e8b546148fe6f7",
  measurementId: "G-36J40GW5P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();