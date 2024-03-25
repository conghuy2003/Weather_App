import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL3Nh-qaA8KH4mlAX_lWPxEnjZym5DCvc",
  authDomain: "app-weather-38819.firebaseapp.com",
  projectId: "app-weather-38819",
  storageBucket: "app-weather-38819.appspot.com",
  messagingSenderId: "900179171430",
  appId: "1:900179171430:web:008eecb0ad9edfb9ec75a7",
  measurementId: "G-BB0VW2EB2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
