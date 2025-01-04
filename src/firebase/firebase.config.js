// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeX0PPOjP-IyaMalXWWY25bnOePzylAiA",
  authDomain: "react-book-review-e6de9.firebaseapp.com",
  projectId: "react-book-review-e6de9",
  storageBucket: "react-book-review-e6de9.firebasestorage.app",
  messagingSenderId: "922379297751",
  appId: "1:922379297751:web:5eb7adb1cd425bdbb96192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;