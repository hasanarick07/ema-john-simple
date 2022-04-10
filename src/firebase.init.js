// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ6NmQdUEPvd1y2qcHj8_WOW0sHlxkxP0",
  authDomain: "ema-john-simple-40284.firebaseapp.com",
  projectId: "ema-john-simple-40284",
  storageBucket: "ema-john-simple-40284.appspot.com",
  messagingSenderId: "5724025849",
  appId: "1:5724025849:web:73ccd64684feab5e58c328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
