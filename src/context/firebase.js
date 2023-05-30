// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9S1FAlDh3nmxFZP237Xdbe3tUwY0LBE8",
  authDomain: "recipeapp-dee41.firebaseapp.com",
  projectId: "recipeapp-dee41",
  storageBucket: "recipeapp-dee41.appspot.com",
  messagingSenderId: "554186083767",
  appId: "1:554186083767:web:3fde06f4d3967e3e98ac32"
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)