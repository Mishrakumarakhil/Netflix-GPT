// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr0Jjpge3s6oV04fY7PJy2OqCvYY6VId4",
  authDomain: "netflixgpt-68eba.firebaseapp.com",
  projectId: "netflixgpt-68eba",
  storageBucket: "netflixgpt-68eba.appspot.com",
  messagingSenderId: "710526630808",
  appId: "1:710526630808:web:3b7f9dcf419f53db7309ed",
  measurementId: "G-JG9BH0SZN5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
