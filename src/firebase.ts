// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMny-EbXPsk6kRWNlPqPlW3IBrrMDWTpc",
  authDomain: "zensoar-c304c.firebaseapp.com",
  projectId: "zensoar-c304c",
  storageBucket: "zensoar-c304c.firebasestorage.app",
  messagingSenderId: "530789539804",
  appId: "1:530789539804:web:907dd6b45d519a8693b919",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;