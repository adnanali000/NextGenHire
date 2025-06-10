// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtw0KigTVvRFKSyeZDDT99OEvH25iIeFg",
  authDomain: "nextgenhire-d7db8.firebaseapp.com",
  projectId: "nextgenhire-d7db8",
  storageBucket: "nextgenhire-d7db8.firebasestorage.app",
  messagingSenderId: "36776934371",
  appId: "1:36776934371:web:51f04872d66523f6167ed6",
  measurementId: "G-P6Y2D1SN8W"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);