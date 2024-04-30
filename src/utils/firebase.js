// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ4YtLa-ISCfTxzO0iIRGFH6toRMfiOLs",
  authDomain: "netflixgpt-35649.firebaseapp.com",
  projectId: "netflixgpt-35649",
  storageBucket: "netflixgpt-35649.appspot.com",
  messagingSenderId: "79681221852",
  appId: "1:79681221852:web:4dbfa685d6f4f6b472b019",
  measurementId: "G-D58GF66RS2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
