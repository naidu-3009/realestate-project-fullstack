// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate--vistara-homes.firebaseapp.com",
  projectId: "real-estate--vistara-homes",
  storageBucket: "real-estate--vistara-homes.appspot.com",
  messagingSenderId: "750993414618",
  appId: "1:750993414618:web:5f283febb9b1b7ef2148e3",
  measurementId: "G-70QTSY3BSY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);