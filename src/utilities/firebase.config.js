// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP2PJTCgE5CK2SKXLDru_cVr7mCHd0XTc",
  authDomain: "vocabulary-learning-website.firebaseapp.com",
  projectId: "vocabulary-learning-website",
  storageBucket: "vocabulary-learning-website.firebasestorage.app",
  messagingSenderId: "1079558823258",
  appId: "1:1079558823258:web:5bc9c450e920926bd2e763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;