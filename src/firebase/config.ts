// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ0K_0Yp02fHwxhb0R22qVR2LIsNTpXlc",
  authDomain: "task-manager-bee65.firebaseapp.com",
  projectId: "task-manager-bee65",
  storageBucket: "task-manager-bee65.firebasestorage.app",
  messagingSenderId: "518090406501",
  appId: "1:518090406501:web:7a9236fb84319da395648c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);