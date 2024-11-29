// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const database = getDatabase();


const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});