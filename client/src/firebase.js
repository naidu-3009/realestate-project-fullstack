
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate--vistara-homes.firebaseapp.com",
  projectId: "real-estate--vistara-homes",
  storageBucket: "real-estate--vistara-homes.appspot.com",
  messagingSenderId: "750993414618",
  appId: "1:750993414618:web:5f283febb9b1b7ef2148e3",
  measurementId: "G-70QTSY3BSY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Analytics (optional, only if needed and supported)
const analytics = getAnalytics(app);

// Initialize Firebase Storage (for file uploads)
export const storage = getStorage(app);
