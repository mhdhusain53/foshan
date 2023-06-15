// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuUgrxn7E8OD9t5YOkBIbDV_tUz1YViwM",
  authDomain: "foshan-e7c66.firebaseapp.com",
  projectId: "foshan-e7c66",
  storageBucket: "foshan-e7c66.appspot.com",
  messagingSenderId: "392148853239",
  appId: "1:392148853239:web:11a64894ce8549c7ac8ef2",
  measurementId: "G-HWRWV8651E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app, auth};