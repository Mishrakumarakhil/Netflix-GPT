// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { secretKeys } from "./secretKeys";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: secretKeys["apiKey"],
  authDomain: secretKeys["authDomain"],
  projectId: secretKeys["projectId"],
  storageBucket: secretKeys["storageBucket"],
  messagingSenderId: secretKeys["messagingSenderId"],
  appId: secretKeys["appId"],
  measurementId: secretKeys["measurementId"],
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
