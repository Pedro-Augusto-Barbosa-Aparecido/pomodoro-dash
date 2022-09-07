import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgNyoxDRsQGSMY4k3DMB4iO4UqJOZbw6c",
  authDomain: "pomodoro-d36d2.firebaseapp.com",
  projectId: "pomodoro-d36d2",
  storageBucket: "pomodoro-d36d2.appspot.com",
  messagingSenderId: "132674394794",
  appId: "1:132674394794:web:ffc11a077d0d71a9e68ed3",
  measurementId: "G-HRZMLCS5M8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);