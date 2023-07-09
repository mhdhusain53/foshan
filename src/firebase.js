// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDG2hA2o_LyXPHmg7JrCAijNrwmm_hXCfc",
  authDomain: "foshan-a38d8.firebaseapp.com",
  projectId: "foshan-a38d8",
  storageBucket: "foshan-a38d8.appspot.com",
  messagingSenderId: "792025189046",
  appId: "1:792025189046:web:b8813ed6f5bf7a260af417",
  measurementId: "G-KTTGK07ZJQ",
  databaseURL: "https://foshan-a38d8-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const database = getDatabase(app);

export { app, auth,database };