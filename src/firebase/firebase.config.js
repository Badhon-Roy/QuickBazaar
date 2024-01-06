// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc96ZNqXt91q7GLXBUktvzgGSmHuFyO2c",
  authDomain: "ciseco-3a2e8.firebaseapp.com",
  projectId: "ciseco-3a2e8",
  storageBucket: "ciseco-3a2e8.appspot.com",
  messagingSenderId: "764184664318",
  appId: "1:764184664318:web:b113a8dca2f8560f052daf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;